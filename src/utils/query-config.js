module.exports.ghostQueryConfig = [
    {
        tag: `hash-faq`,
        prefix: `/faq/`,
        template: `./src/templates/faq.js`,
        tagsTemplate: `./src/templates/tags-faq.js`,
        indexName: `faq`,
    },
    {
        tag: `hash-tutorial`,
        prefix: `/tutorials/`,
        template: `./src/templates/standalone-post.js`,
        tagsTemplate: `./src/templates/tags-tutorials.js`,
        indexName: `tutorial`,
    },
    {
        tag: `hash-integration`,
        prefix: `/integrations/`,
        template: `./src/templates/integration.js`,
        indexName: `integration`,
    },
]
