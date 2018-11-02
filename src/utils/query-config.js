const ghostQueryConfig = [
    {
        tag: `hash-faq`,
        section: `faq`,
        niceName: `FAQ`,
        template: `./src/templates/faq.js`,
        tagsTemplate: `./src/templates/tags-faq.js`,
        indexName: `faq`,
    },
    {
        tag: `hash-tutorial`,
        section: `tutorials`,
        niceName: `Tutorials`,
        template: `./src/templates/standalone-post.js`,
        tagsTemplate: `./src/templates/tags-tutorials.js`,
        indexName: `tutorial`,
    },
    {
        tag: `hash-integration`,
        section: `integrations`,
        niceName: `Integrations`,
        template: `./src/templates/integration.js`,
        tagsTemplate: `./src/templates/tags-integration.js`,
        indexName: `integration`,
    },
]

const markdownQueryConfig = [
    {
        section: `concepts`,
        indexName: `concept`,
        niceName: `Concepts`,
    },
    {
        section: `setup`,
        indexName: `setup`,
        niceName: `Setup Guide`,
    },
    {
        section: `api`,
        indexName: `api`,
        niceName: `API Reference`,
    },
]

module.exports = {
    defaultMarkdownSection: `setup`,
    markdownQueryConfig,
    ghostQueryConfig,
    searchConfig: markdownQueryConfig
        .concat(ghostQueryConfig)
        .reduce((acc, { indexName, niceName }) => {
            acc[indexName] = niceName
            return acc
        }, {}),
}
