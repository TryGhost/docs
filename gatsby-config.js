require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
    siteMetadata: {
        title: `Ghost Docs`,
        siteUrl: `https://docs.ghost.org`,
        description: `Find all the docs you want`
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'gatsby-starter-default',
                short_name: 'starter',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
            }
        },
        'gatsby-plugin-offline',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/`,
                name: 'markdown-pages'
            }
        },
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-ghost`,
            options: {
                apiUrl: `https://docs-2.ghost.io`,
                clientId: `ghost-frontend`,
                clientSecret: `${process.env.GH_CLIENT_SECRET}`
            }
        }
    ]
};
