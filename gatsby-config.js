require(`dotenv`).config({
    path: `.env.${process.env.NODE_ENV}`,
})

// const postcssCustomMedia = require(`postcss-custom-media`)
// const autoprefixer = require(`autoprefixer`)
// const cssVariables = require(`postcss-css-variables`)
// const colorModFunction = require(`postcss-color-mod-function`)
// // const cssNano = require(`cssnano`)
// const customProperties = require(`postcss-custom-properties`)
// const easyImport = require(`postcss-easy-import`)

module.exports = {
    siteMetadata: {
        title: `Ghost Docs`,
        siteUrl: `https://docs.ghost.org`,
        description: `Find all the docs you want`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
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
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/`,
                name: `markdown-pages`,
            },
        },
        `gatsby-transformer-yaml`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            // Class prefix for <pre> tags containing syntax highlighting;
                            // defaults to 'language-' (eg <pre class="language-js">).
                            // If your site loads Prism into the browser at runtime,
                            // (eg for use with libraries like react-live),
                            // you may use this to prevent Prism from re-processing syntax.
                            // This is an uncommon use-case though;
                            // If you're unsure, it's best to use the default value.
                            classPrefix: `language-`,
                            // This is used to allow setting a language for inline code
                            // (i.e. single backticks) by creating a separator.
                            // This separator is a string and will do no white-space
                            // stripping.
                            // A suggested value for English speakers is the non-ascii
                            // character '›'.
                            inlineCodeMarker: null,
                            // This lets you set up language aliases.  For example,
                            // setting this to '{ sh: "bash" }' will let you use
                            // the language "sh" which will highlight using the
                            // bash highlighter.
                            aliases: {},
                            // This toggles the display of line numbers alongside the code.
                            // To use it, add the following line in src/layouts/index.js
                            // right after importing the prism color scheme:
                            //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
                            // Defaults to false.
                            showLineNumbers: false,
                        },
                    },
                    `gatsby-remark-autolink-headers`,
                ],
            },
        },
        {
            resolve: `gatsby-source-ghost`,
            options: {
                apiUrl: `https://docs-2.ghost.io`,
                clientId: `ghost-frontend`,
                clientSecret: `${process.env.GH_CLIENT_SECRET}`,
            },
        },
        // {
        //     resolve: `gatsby-plugin-postcss`,
        //     options: {
        //         postCssPlugins: [
        //             autoprefixer({ browsers: [`last 2 versions`] }),
        //             easyImport(),
        //             cssVariables(),
        //             colorModFunction(),
        //             customProperties({ preserve: false }),
        //             postcssCustomMedia(),
        //             // cssNano({ zindex: false }),
        //         ],
        //     },
        // },
        {
            resolve: `gatsby-plugin-react-svg`,
            options: {
                rule: {
                    include: /icons/,
                },
            },
        },
    ],
}
