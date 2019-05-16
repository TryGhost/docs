const { allGhostPosts, allMarkdownPosts } = require(`./node-queries`)
const { ghostQueryConfig, markdownQueryConfig } = require(`./query-config`)
const { fragmentTransformer } = require(`./algolia-transforms`)
const urlUtils = require(`./urls`)

const algoliaGhostFields = `
    objectID:id
    slug
    title
    html
    image: feature_image
    tags {
        name
        slug
    }
`

const algoliaMarkdownFields = `
    objectID:id
    fields {
        slug
        section
    }
    frontmatter {
        title
        image
    }
    html
`

const mdNodeMap = ({ node }) => {
    // Flatten fields
    node.slug = node.fields.slug
    node.section = node.fields.section
    node.title = node.frontmatter.title
    // @TODO make this consistent?!
    // TODO: switch to relative URLs again, once the move to G3 is fully completed
    node.url = urlUtils.convertToAbsoluteUrl(node.slug)

    delete node.frontmatter
    delete node.fields

    return node
}

const ghostQueries = ghostQueryConfig.map(({ tag, section, indexName }) => {
    return {
        query: allGhostPosts(tag, algoliaGhostFields),
        indexName,
        transformer: ({ data }) => data
            .allGhostPost.edges
            .map(({ node }) => {
                // @TODO is there some other way to do this?!
                node.section = section
                // TODO: switch to relative URLs again, once the move to G3 is fully completed
                node.url = urlUtils.urlForGhostPost(node, section, true)
                return node
            })
            .reduce(fragmentTransformer, []),
    }
})

const mdQueries = markdownQueryConfig.map(({ section, indexName }) => {
    return {
        query: allMarkdownPosts(section, algoliaMarkdownFields),
        indexName,
        transformer: ({ data }) => data
            .allMarkdownRemark.edges
            .map(mdNodeMap)
            .reduce(fragmentTransformer, []),

    }
})

// Uncomment these for testing, to temporarily only do this for a small number of posts
// let testQueryArr = [{
//     query: `
//     {
//         allMarkdownRemark(
//             sort: {order: ASC, fields: [frontmatter___date]},
//             filter: {fields: {
//                 slug: {eq: "/install/source/"},
//             }}
//         ) {
//             edges {
//                 node {
//                     ${algoliaMarkdownFields}
//                 }
//             }
//         }
//     }
//     `,
//     indexName: `setup`,
//     transformer: ({ data }) => data
//         .allMarkdownRemark.edges
//         .map(mdNodeMap)
//         .reduce(fragmentTransformer, []),
// }]

// module.exports = testQueryArr
// module.exports = [ghostQueries[1]]
// module.exports = [mdQueries[1]]

// The REAL DEAL
module.exports = ghostQueries.concat(mdQueries)
