const { allGhostPosts, allMarkdownPosts } = require(`./node-queries`)
const { ghostQueryConfig, markdownQueryConfig } = require(`./query-config`)
const urlUtils = require('./urls')

const algoliaGhostFields = `
    objectID:id
    slug
    title
    html
`

const algoliaMarkdownFields = `
    objectID:id
    fields {
        slug
        section
    }
    frontmatter {
        title
    }
    html
`

const chunkString = (str, length) => str.match(new RegExp(`(.|[\r\n]){1,` + length + `}`, `g`))

const transformer = (chunksTotal, node) => {
    const htmlChunks = chunkString(node.html, 5000)
    const record = node;
    const recordChunks = htmlChunks.reduce((recordChunksTotal, htmlChunksItem, idx) => {
        return [
            ...recordChunksTotal,
            { ...record, ...{ html: htmlChunksItem }, objectID: `${node.objectID}_${idx}` }
        ];
    }, []);

    return [...chunksTotal, ...recordChunks];
}

let ghostQueries = ghostQueryConfig.map(({ tag, section, indexName }) => {
    return {
        query: allGhostPosts(tag, algoliaGhostFields),
        indexName,
        transformer: ({ data }) => data
            .allGhostPost.edges
            .map(({ node }) => {
                // @TODO is there some other way to do this?!
                node.section = section
                node.url = urlUtils.urlForGhostPost(node, section)
                return node
            })
            .reduce(transformer, []),
    }
})

let mdQueries = markdownQueryConfig.map(({ section, indexName }) => {
    return {
        query: allMarkdownPosts(section, algoliaMarkdownFields),
        indexName,
        transformer: ({ data }) => data
            .allMarkdownRemark.edges
                .map(({ node }) => {
                    // Flatten fields
                    node.slug = node.fields.slug
                    node.section = node.fields.section
                    node.title = node.frontmatter.title
                    // @TODO make this consistent?!
                    node.url = node.slug

                    delete node.frontmatter
                    delete node.fields

                    return node
                })
                .reduce(transformer, [])

    }
})

// Uncomment these for testing, to temporarily only do this for a small number of posts
// module.exports = [ghostQueries[1]]
// module.exports = [mdQueries[1]]
module.exports = ghostQueries.concat(mdQueries)
