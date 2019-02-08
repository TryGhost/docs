const createPages = require(`./gatsby/createPages`)
const onCreateNode = require(`./gatsby/onCreateNode`)

exports.createPages = ({ graphql, actions }) => {
    return {
        createRedirects: createPages.createRedirects({ actions }),
        createGhostPages: createPages.createGhostPages({ graphql, actions }),
        createMarkdownPages: createPages.createMarkdownPages({ graphql, actions }),
    }
}

exports.onCreateNode = ({ node, getNode, actions }) => {
    return {
        createMarkdownNodeFields: onCreateNode.createMarkdownNodeFields(({ node, getNode, actions })),
    }
}
