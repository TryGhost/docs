const path = require(`path`)
const _ = require(`lodash`)
const { allGhostPosts, allMarkdownPosts } = require(`../utils/node-queries`)
const { ghostQueryConfig } = require(`../utils/query-config`)
const urlUtils = require(`../utils/urls`)
const getRelatedPosts = require(`../utils/getRelatedPosts`)

module.exports.createRedirects = ({ actions }) => {
    const { createRedirect } = actions

    // The /concepts page doesn't exist, we need to redirect to
    // the first post of this section
    createRedirect({
        fromPath: `/concepts`,
        isPermanent: true,
        redirectInBrowser: true,
        toPath: `/concepts/introduction/`,
    })
}

module.exports.createGhostPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const queryPromises = []

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

    return Promise.all(queryPromises)
}

module.exports.createMarkdownPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const queryPromises = []

    queryPromises.push(new Promise((resolve, reject) => {
        graphql(allMarkdownPosts())
            .then((result) => {
                if (result.errors) {
                    return reject(result.errors)
                }

                return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                    const DocTemplate = path.resolve(`./src/templates/markdown/post.js`)

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
