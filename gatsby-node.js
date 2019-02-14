const Promise = require(`bluebird`)
const createPages = require(`./gatsby/createPages`)
const onCreateNode = require(`./gatsby/onCreateNode`)

exports.createPages = ({ graphql, actions }) => Promise.props({
    createRedirects: createPages.createRedirects({ actions }),
    createGhostPages: createPages.createGhostPages({ graphql, actions }),
    createMarkdownPages: createPages.createMarkdownPages({ graphql, actions }),
})

exports.onCreateNode = ({ node, getNode, actions }) => Promise.props({
    createMarkdownNodeFields: onCreateNode.createMarkdownNodeFields(({ node, getNode, actions })),
})
