const Promise = require(`bluebird`)
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === `MarkdownRemark`) {
        // TODO: use slug of `path` property in frontmatter if given
        const slug = createFilePath({ node, getNode, basePath: `pages` })

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

    // TODO: move this to shared query builder tool, where we hold all our queries
    function ghostPostQuery(tag) {
        return (`
          {
            allGhostPost(filter: {tags: {elemMatch: {slug: {eq: "${tag}"}}}}) {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `)
    }

    const ghostPostToQuery = [
        {
            tag: `hash-faq`,
            prefix: `/faq/`,
            template: `./src/templates/standalone-post.js`,
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

    const queryPromises = []

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
    ghostPostToQuery.forEach((ghostPostQueryData) => {
        queryPromises.push(new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
            graphql(ghostPostQuery(ghostPostQueryData.tag)).then((result) => {
                result.data.allGhostPost.edges.forEach(({ node }) => {
                    createPage({
                        path: `${ghostPostQueryData.prefix}${node.slug}/`,
                        component: path.resolve(ghostPostQueryData.template),
                        context: {
                            slug: node.slug,
                        },
                    })
                })
                resolve()
            }).catch(() => {
                resolve()
            })
        }))
    })

    queryPromises.push(new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
        graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
        `).then((result) => {
            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
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
        }).catch(() => resolve())
    }))

    return Promise.all(queryPromises)
}
