const createPages = require(`./gatsby/createPages`)

exports.createPages = ({ graphql, actions }) => {
    return {
        createRedirects: createPages.createRedirects({ actions }),
        createGhostPages: createPages.createGhostPages({ graphql, actions }),
        createMarkdownPages: createPages.createMarkdownPages({ graphql, actions }),
    }
}

exports.onCreateNode = require(`./gatsby/onCreateNode`)
