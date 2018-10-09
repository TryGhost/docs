const Promise = require(`bluebird`)
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === `MarkdownRemark`) {
        // Passing a `path` property in frontmatter will overwrite the
        // slug that we build from the folder structure
        const slug = node.frontmatter.path ? node.frontmatter.path : createFilePath({ node, getNode, basePath: `pages` })

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

    // TODO: create redirect for `/api/*` to `/api/v2/:splat` BUT not `/api/v*`
    // look into using the https://www.gatsbyjs.org/packages/gatsby-plugin-netlify/ plugin
    createRedirect({
        fromPath: `/design/`,
        isPermanent: true,
        redirectInBrowser: true,
        toPath: `/design/styling/`,
    })

    createRedirect({
        fromPath: `/design`,
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
                        createPage({
                            path: `${prefix}${node.slug}/`,
                            component: path.resolve(template),
                            context: {
                                // Data passed to context is available
                                // in page queries as GraphQL variables.
                                slug: node.slug,
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
