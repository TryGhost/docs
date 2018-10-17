module.exports.ghostQueryConfig = [
    {
        tag: `hash-faq`,
        section: `faq`,
        template: `./src/templates/faq.js`,
        tagsTemplate: `./src/templates/tags-faq.js`,
        indexName: `faq`,
    },
    {
        tag: `hash-tutorial`,
        section: `tutorials`,
        template: `./src/templates/standalone-post.js`,
        tagsTemplate: `./src/templates/tags-tutorials.js`,
        indexName: `tutorial`,
    },
    {
        tag: `hash-integration`,
        section: `integrations`,
        template: `./src/templates/integration.js`,
        indexName: `integration`,
    },
]

module.exports.markdownQueryConfig = [
    {
        section: `concepts`,
        indexName: `concept`,
    },
    {
        section: `setup`,
        indexName: `setup`,
    },
    {
        section: `api`,
        indexName: `api`,
    },
]

module.exports.defaultMarkdownSection = `setup`
