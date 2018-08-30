const path = require('path');
const {createFilePath} = require('gatsby-source-filesystem');

exports.onCreateNode = ({node, getNode, actions}) => {
    const {createNodeField} = actions;
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({node, getNode, basePath: `pages`});
        createNodeField({
            node,
            name: `slug`,
            value: slug
        });
    }
};

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions;

    const loadFAQPosts = new Promise((resolve, reject) => {
        graphql(`
          {
            allGhostPost(filter: {primary_tag: {slug: {eq: "faq"}}}) {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `).then((result) => {
            result.data.allGhostPost.edges.forEach(({node}) => {
                createPage({
                    path: `/faq/${node.slug}/`,
                    component: path.resolve(`./src/templates/faq.js`),
                    context: {
                        slug: node.slug
                    }
                });
            });
            resolve();
        });
    });

    const loadTutorialPosts = new Promise((resolve, reject) => {
        graphql(`
          {
            allGhostPost(filter: {primary_tag: {slug: {eq: "tutorial"}}}) {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `).then((result) => {
            result.data.allGhostPost.edges.forEach(({node}) => {
                createPage({
                    path: `/tutorials/${node.slug}/`,
                    component: path.resolve(`./src/templates/tutorials.js`),
                    context: {
                        slug: node.slug
                    }
                });
            });
            resolve();
        });
    });

    const createMDPages = new Promise((resolve, reject) => {
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
            result.data.allMarkdownRemark.edges.forEach(({node}) => {
                createPage({
                    path: node.fields.slug,
                    component: path.resolve(`./src/templates/docs.js`),
                    context: {
                        // Data passed to context is available
                        // in page queries as GraphQL variables.
                        slug: node.fields.slug
                    }
                });
            });
            resolve();
        });
    });

    return Promise.all([loadFAQPosts, loadTutorialPosts, createMDPages]);
};

