const path = require('path');

exports.onCreateNode = ({node, getNode, actions}) => {
    const {createNodeField} = actions;
};

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions;

    const loadPosts = new Promise((resolve, reject) => {
        graphql(`
          {
            allGhostPost {
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

    return Promise.all([loadPosts]);
};

