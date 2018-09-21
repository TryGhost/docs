const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
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

    const loadFAQPosts = new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
        graphql(`
          {
            allGhostPost(filter: {tags: {elemMatch: {slug: {eq: "hash-faq"}}}}) {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `).then((result) => {
            result.data.allGhostPost.edges.forEach(({ node }) => {
                createPage({
                    path: `/faq/${node.slug}/`,
                    component: path.resolve(`./src/templates/faq.js`),
                    context: {
                        slug: node.slug,
                    },
                })
            })
            resolve()
        }).catch(() => {
            resolve()
        })
    })

    const loadTutorialPosts = new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
        graphql(`
          {
            allGhostPost(filter: {tags: {elemMatch: {slug: {eq: "hash-tutorial"}}}}) {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `).then((result) => {
            result.data.allGhostPost.edges.forEach(({ node }) => {
                createPage({
                    path: `/tutorials/${node.slug}/`,
                    component: path.resolve(`./src/templates/standalone-post.js`),
                    context: {
                        slug: node.slug,
                    },
                })
            })
            resolve()
        }).catch(() => {
            resolve()
        })
    })

    const loadIntegrations = new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
        graphql(`
          {
            allGhostPost(filter: {tags: {elemMatch: {slug: {eq: "hash-integration"}}}}) {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `).then((result) => {
            result.data.allGhostPost.edges.forEach(({ node }) => {
                createPage({
                    path: `/integrations/${node.slug}/`,
                    component: path.resolve(`./src/templates/integration.js`),
                    context: {
                        slug: node.slug,
                    },
                })
            })
            resolve()
        }).catch(() => {
            resolve()
        })
    })

    // Querying only non API pages
    const createMDPages = new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
        graphql(`
        {
            allMarkdownRemark(
                filter: {
                    fields: {
                    slug: {
                    regex: "/^((?!\/api\/).)*$/"
                    }
                }
                }
            ) {
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
                // Exclude the default README.md pages from the api docs repo
                if (!node.fields.slug.match(/readme\/$/i)) {
                    createPage({
                        path: node.fields.slug,
                        component: path.resolve(`./src/templates/doc-navigation-toc.js`),
                        context: {
                            // Data passed to context is available
                            // in page queries as GraphQL variables.
                            slug: node.fields.slug,
                        },
                    })
                }
            })
            resolve()
        }).catch(() => {
            resolve()
        })
    })

    // Querying API pages
    const createAPIPages = new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
        graphql(`
        {
            allMarkdownRemark(
                filter: {
                    fields: {
                    slug: {
                    regex: "/\/api\//"
                    }
                }
                }
            ) {
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
                // Exclude the default README.md pages from the api docs repo
                if (!node.fields.slug.match(/readme\/$/i)) {
                    createPage({
                        path: node.fields.slug,
                        component: path.resolve(`./src/templates/doc-toc.js`),
                        context: {
                            slug: node.fields.slug,
                        },
                    })
                }
            })
            resolve()
        }).catch(() => {
            resolve()
        })
    })

    return Promise.all([loadFAQPosts, loadTutorialPosts, loadIntegrations, createMDPages, createAPIPages])
}

