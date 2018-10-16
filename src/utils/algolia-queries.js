const { allGhostPosts } = require(`./node-queries`)
const { ghostQueryConfig } = require(`./query-config`)

const algoliaFields = `
    objectID:id,
    slug,
    title,
    html,
    tags {
        slug
        name
    }
`

module.exports = ghostQueryConfig.map(({ tag, indexName }) => {
    return {
        query: allGhostPosts(tag, algoliaFields),
        indexName,
        transformer: ({ data }) => data.allGhostPost.edges.map(({ node }) => node),
    }
})
