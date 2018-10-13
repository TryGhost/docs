const Promise = require(`bluebird`)
const path = require(`path`)
const _ = require(`lodash`)
const { createFilePath } = require(`gatsby-source-filesystem`)

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
    let filteredPosts = allPosts.filter(hasSameTags)

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
        return _.concat(higherRankedPosts, filteredPosts.sort(sortByDateDescending)).slice(0,5)
    }

    // We didn't have more than 2 tags in common, the result will only be sorted by date
    if (filteredPosts.length > 5) {
        return filteredPosts.sort(sortByDateDescending).slice(0, 5)
    } else if (filteredPosts.length > 1) {
        return filteredPosts.sort(sortByDateDescending)
    }

    return filteredPosts
}

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === `MarkdownRemark`) {
        // Passing a `path` property in frontmatter will overwrite the
        // slug that we build from the folder structure
        let slug = node.frontmatter.path ? node.frontmatter.path : createFilePath({ node, getNode, basePath: `pages` })

        // Remove the version slug from the latest API version docs
        // TODO: use env config to add latest API version
        if (slug.match(/\/api\/v2\/\S*/i)) {
            slug = slug.replace(/\/v2/, ``)
        }

        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const { createRedirect } = actions
    const { allGhostPosts, allMarkdownPosts } = require(`./src/utils/node-queries`)
    const queryPromises = []
    const ghostPostToQuery = [
        {
            tag: `hash-faq`,
            prefix: `/faq/`,
            template: `./src/templates/faq.js`,
        },
        {
            tag: `hash-tutorial`,
            prefix: `/tutorials/`,
            template: `./src/templates/standalone-post.js`,
        },
        {
            tag: `hash-integration`,
            prefix: `/integrations/`,
            template: `./src/templates/integration.js`,
        },
    ]

    createRedirect({
        fromPath: `/design/`,
        isPermanent: true,
        redirectInBrowser: true,
        toPath: `/design/styling/`,
    })

    // Query for each of the tags that we defined above
    ghostPostToQuery.forEach(({ tag, prefix, template }) => {
        queryPromises.push(new Promise((resolve, reject) => {
            graphql(allGhostPosts(tag))
                .then((result) => {
                    if (result.errors) {
                        return reject(result.errors)
                    }

                    return result.data.allGhostPost.edges.forEach(({ node }) => {
                        // Update the existing URL field to reflect the URL in Gatsby and
                        // not in Ghost. Also needed to link to related posts.
                        node.url = `${prefix}${node.slug}/`

                        createPage({
                            path: `${prefix}${node.slug}/`,
                            component: path.resolve(template),
                            context: {
                                // Data passed to context is available
                                // in page queries as GraphQL variables.
                                slug: node.slug,
                                relatedPosts: getRelatedPosts(node, result.data.allGhostPost.edges),
                            },
                        })
                        return resolve()
                    })
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
                    // Exclude the default README.md pages from the api docs repo
                    if (node.fields.slug.match(/readme\/$/i)) {
                        return resolve()
                    }

                    createPage({
                        path: node.fields.slug,
                        component: DocTemplate,
                        context: {
                            // Data passed to context is available
                            // in page queries as GraphQL variables.
                            slug: node.fields.slug,
                        },
                    })
                    return resolve()
                })
            })
    }))

    return Promise.all(queryPromises)
}
