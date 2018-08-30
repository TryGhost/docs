let activeEnv = process.env.NODE_ENV || 'development';

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
    siteMetadata: {
        title: 'Ghost Docs'
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
                apiUrl: `https://ghosthq.ghost.io`,
                clientId: `ghost-frontend`,
                clientSecret: `c78a9c8d1ef6`
            }
        }
    ]
};
