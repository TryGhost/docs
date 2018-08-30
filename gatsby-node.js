const path = require('path');

exports.onCreateNode = ({node, getNode, actions}) => {
    const {createNodeField} = actions;
};

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions;

    const loadFAQPosts = new Promise((resolve, reject) => {
        graphql(`
          {
            allGhostPost(filter: {primary_tag: {slug: {eq: "company"}}}) {
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
            allGhostPost(filter: {primary_tag: {slug: {eq: "ghost-pro"}}}) {
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

    return Promise.all([loadFAQPosts, loadTutorialPosts]);
};

