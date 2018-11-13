const Promise = require(`bluebird`)
const path = require(`path`)
const _ = require(`lodash`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const urlUtils = require(`./src/utils/urls`)
const { allGhostPosts, allMarkdownPosts } = require(`./src/utils/node-queries`)
const { ghostQueryConfig, markdownQueryConfig, defaultMarkdownSection } = require(`./src/utils/query-config`)
const knownSections = _.map(markdownQueryConfig, `section`)

const sortByDateDescending = (a, b) => {
    const aPublishedAt = (new Date(a.node.published_at)).getTime()
    const bPublishedAt = (new Date(b.node.published_at)).getTime()

    if (aPublishedAt > bPublishedAt) {
        return -1
    }

    if (aPublishedAt < bPublishedAt) {
        return 1
    }

    return 0
}

const getRelatedPosts = (currentPost, allPosts) => {
    const NUMBER_RELATED_POSTS = 5
    let mostCommonTags = []

    const hasSameTags = ({ node }) => {
        // stop when we have the same id
        if (currentPost.slug === node.slug) {
            return false
        }

        const commonTags = _.intersectionBy(currentPost.tags, node.tags, tag => tag.slug)

        if (commonTags.length > 2) {
            // when we have an article with more than our 2 min tags in common
            // we store it, to sort it later by the number of tags and use this
            // order to render the related posts
            mostCommonTags.push({
                slug: node.slug,
                tags: commonTags.length,
            })
        }

        // Needs to be minimum 2 tags in common, as the internal Tag is already one
        return commonTags.length >= 2
    }

    // Our base articles that have min 2 tags in common
    let filteredPosts = _.filter(allPosts, hasSameTags)

    if (filteredPosts.length && mostCommonTags.length) {
        const higherRankedPosts = []

        // Sort the mostCommonTags list by the highest number
        mostCommonTags = _.sortBy(mostCommonTags, `tags`)

        // In order of our most common tag list (higher -> lower), we find the associated
        // node in our post list and set it aside for later, keeping the order.
        _.forEach(mostCommonTags, (tagList) => {
            higherRankedPosts.push(_.find(filteredPosts, ({ node }) => node.slug === tagList.slug))
        })

        // Remove the nodes, that we set aside
        filteredPosts = _.difference(filteredPosts, higherRankedPosts)

        // We return the concatinated list of posts, but put our higher ranked posts first, then
        // the regular filtered posts, which we order by date

        filteredPosts = _.concat(higherRankedPosts, filteredPosts.sort(sortByDateDescending)).slice(0, NUMBER_RELATED_POSTS)
    } else if (filteredPosts.length) {
        // We didn't have more than 2 tags in common, the result will only be sorted by date
        if (filteredPosts.length > NUMBER_RELATED_POSTS) {
            filteredPosts = filteredPosts.sort(sortByDateDescending).slice(0, NUMBER_RELATED_POSTS)
        } else if (filteredPosts.length > 1) {
            filteredPosts = filteredPosts.sort(sortByDateDescending)
        }
    }

    // if we didn't reach the minimum number of related posts, we randomly pick some until we do
    if (filteredPosts.length < NUMBER_RELATED_POSTS) {
        let missingPostsNumber = NUMBER_RELATED_POSTS - filteredPosts.length
        // Only check the posts that are not used yet and remove our current post as well
        allPosts = _.filter(allPosts, ({ node }) => node.slug !== currentPost.slug)
        const allPostsAvailable = _.difference(allPosts, filteredPosts)

        const randomPosts = []

        while (missingPostsNumber > 0 && allPostsAvailable.length) {
            const randomPostNumber = Math.floor(Math.random() * (allPostsAvailable.length + 1))
            const [randomPost] = allPostsAvailable.splice(randomPostNumber, 1)

            if (randomPost) {
                randomPosts.push(randomPost)

                missingPostsNumber -= 1
            }
        }

        return _.concat(filteredPosts, randomPosts)
    } else {
        return filteredPosts
    }
}

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === `MarkdownRemark`) {
        let slug = urlUtils.urlForMarkdown(node, createFilePath({ node, getNode, basePath: `pages` }))
        // Section is the first part of the path
        let section = slug.match(/^\/(.*?)\//)[1]
        section = _.includes(knownSections, section) ? section : defaultMarkdownSection

        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })

        createNodeField({
            node,
            name: `section`,
            value: section,
        })
    }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const { createRedirect } = actions
    const queryPromises = []

    createRedirect({
        fromPath: `/api/content/`,
        isPermanent: true,
        redirectInBrowser: true,
        toPath: `https://api.ghost.org`,
    })
    createRedirect({
        fromPath: `/api/admin/`,
        isPermanent: true,
        redirectInBrowser: true,
        toPath: `https://api.ghost.org`,
    })
    // The /concepts page doesn't exist, we need to redirect to
    // the first post of this section
    createRedirect({
        fromPath: `/concepts`,
        isPermanent: true,
        redirectInBrowser: true,
        toPath: `/concepts/introduction/`,
    })

    // Query for each of the tags that we defined above
    ghostQueryConfig.forEach(({ tag, section, template, tagsTemplate }) => {
        queryPromises.push(new Promise((resolve, reject) => {
            graphql(allGhostPosts(tag))
                .then((result) => {
                    if (result.errors) {
                        return reject(result.errors)
                    }

                    const items = result.data.allGhostPost.edges

                    // Create a tags archive page per primary internal tag as defined per ghostPostToQuery
                    // The URL of each tags archive page will contain the current internal tag slug and
                    // the tag slug, e. g. `/faq/errors/` or `/tutorials/themes/`
                    if (tagsTemplate) {
                        let tagArchives = []

                        _.forEach(items, ({ node }) => {
                            // Remove all internal tags
                            const filteredTags = node.tags.filter(tag => !tag.slug.match(/^hash-/))

                            _.forEach(filteredTags, tag => tagArchives.push(tag))
                        })

                        // Remove invalid values and duplicates
                        tagArchives = _.uniqBy(_.compact(tagArchives), `slug`)

                        _.forEach(tagArchives, (tag) => {
                            tag.url = urlUtils.urlForGhostTag(tag, section)

                            createPage({
                                path: tag.url,
                                component: path.resolve(tagsTemplate),
                                context: {
                                    // Data passed to context is available
                                    // in page queries as GraphQL variables.
                                    // TODO: this could be refactored to be an object
                                    // not sure if it interfers with search
                                    tagSlug: tag.slug,
                                    tagName: tag.name,
                                    tagURL: tag.url,
                                    tagDescription: tag.description,
                                    tagImage: tag.feature_image,
                                    tagMetaTitle: tag.meta_title,
                                    tagMetaDescription: tag.meta_description,
                                    section: section,
                                },
                            })
                        })
                    }

                    _.forEach(items, ({ node }) => {
                        // Update the existing URL field to reflect the URL in Gatsby and
                        // not in Ghost. Also needed to link to related posts.
                        node.url = urlUtils.urlForGhostPost(node, section)

                        createPage({
                            path: node.url,
                            component: path.resolve(template),
                            context: {
                                // Data passed to context is available
                                // in page queries as GraphQL variables.
                                slug: node.slug,
                                relatedPosts: getRelatedPosts(node, result.data.allGhostPost.edges),
                                section,
                            },
                        })
                    })

                    return resolve()
                })
        }))
    })

    queryPromises.push(new Promise((resolve, reject) => {
        graphql(allMarkdownPosts())
            .then((result) => {
                if (result.errors) {
                    return reject(result.errors)
                }

                return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                    const DocTemplate = path.resolve(`./src/templates/doc-navigation-toc.js`)

                    createPage({
                        path: node.fields.slug,
                        component: DocTemplate,
                        context: {
                            // Data passed to context is available
                            // in page queries as GraphQL variables.
                            slug: node.fields.slug,
                            section: node.fields.section,
                        },
                    })
                    return resolve()
                })
            })
    }))

    return Promise.all(queryPromises)
}
