const postcssCustomMedia = require(`postcss-custom-media`)
const autoprefixer = require(`autoprefixer`)
const cssVariables = require(`postcss-css-variables`)
const colorModFunction = require(`postcss-color-mod-function`)
const cssNano = require(`cssnano`)
const customProperties = require(`postcss-custom-properties`)
const easyImport = require(`postcss-easy-import`)
const algoliaQueries = require(`./src/utils/algolia-queries`)
const path = require(`path`)

require(`dotenv`).config({
    path: `.env.${process.env.NODE_ENV}`,
})

if (!process.env.GHOST_API_URL || !process.env.GHOST_API_KEY) {
    throw new Error(
        `GHOST_API_URL and GHOST_API_KEY are required to build. Check the CONTRIBUTING guide.`
    )
}

const SERVICE_WORKER_KILL_SWITCH = (process.env.SERVICE_WORKER_KILL_SWITCH === `true`) || false

const plugins = [
    /**
     *  Content Plugins
     */
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            path: path.join(__dirname, `content`),
            name: `markdown-pages`,
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `images`,
            path: path.join(__dirname, `src`, `images`),
        },
    },
    {
        resolve: `gatsby-transformer-remark`,
        options: {
            plugins: [
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 590,
                    },
                },
                `gatsby-remark-code-titles`,
                `gatsby-remark-prismjs`, // TODO: make aliases work!
                `gatsby-remark-external-links`,
                `gatsby-remark-autolink-headers`,
            ],
        },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    {
        resolve: `gatsby-source-ghost`,
        options: {
            apiUrl: `${process.env.GHOST_API_URL}`,
            clientId: `ghost-frontend`,
            clientSecret: `${process.env.GHOST_API_KEY}`,
        },
    },
    `gatsby-plugin-catch-links`,
    /**
     *  Utility Plugins
     */
    {
        resolve: `gatsby-plugin-manifest`,
        options: {
            name: `Ghost Docs`,
            short_name: `Ghost`,
            start_url: `/`,
            background_color: `#343f44`,
            theme_color: `#343f44`,
            display: `minimal-ui`,
            icon: `src/images/favicon.png`,
        },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-force-trailing-slashes`,
    /**
     *  Display Plugins
     */
    {
        resolve: `gatsby-plugin-postcss`,
        options: {
            postCssPlugins: [
                autoprefixer({ browsers: [`last 2 versions`] }),
                easyImport(),
                cssVariables(),
                colorModFunction(),
                customProperties({ preserve: false }),
                postcssCustomMedia(),
                cssNano({ zindex: false }),
            ],
        },
    },
    {
        resolve: `gatsby-plugin-react-svg`,
        options: {
            rule: {
                include: /icons/,
            },
        },
    },
]

if (process.env.ALGOLIA_ADMIN_KEY && !process.env.ALGOLIA_ADMIN_KEY.match(/<key>/)) {
    plugins.push({
        resolve: `gatsby-plugin-algolia`,
        options: {
            appId: `6RCFK5TOI5`,
            apiKey: `${process.env.ALGOLIA_ADMIN_KEY}`,
            queries: algoliaQueries,
            chunkSize: 10000, // default: 1000
        },
    })
}

// Global switch to either use or remove service worker
if (SERVICE_WORKER_KILL_SWITCH) {
    console.log(`Remove service worker plugin`)
    plugins.push(`gatsby-plugin-remove-serviceworker`)
} else {
    console.log(`Install service worker plugin`)
    plugins.push(`gatsby-plugin-offline`)
}

module.exports = {
    siteMetadata: {
        title: `Ghost Docs`,
        siteUrl: process.env.SITE_URL || `https://docs.ghost.org`,
        description: `Everything you need to know about working with the Ghost professional publishing platform.`,
    },
    plugins: plugins,
}
