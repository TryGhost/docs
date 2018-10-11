import React from 'react'
import Helmet from "react-helmet"
import PropTypes from 'prop-types'

import ImageMeta from './image-meta'

class WebsiteMeta extends React.Component {
    render() {
        const { siteMetadata } = this.props.data.site
        const { canonical, title, description, image } = this.props

        return (
            <>
                <Helmet>
                    <title>{ `${title} - Ghost` }</title>
                    <meta name="description" content={ description } />
                    <link rel="canonical" href={ canonical } />
                    <meta property="og:site_name" content={ siteMetadata.title } />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={ title } />
                    <meta property="og:description" content={ description } />
                    <meta property="og:url" content={canonical} />
                    <meta property="article:publisher" content="https://www.facebook.com/ghost" />
                    <meta name="twitter:title" content={ title } />
                    <meta name="twitter:description" content={ description } />
                    <meta name="twitter:url" content={canonical} />
                    <meta name="twitter:site" content="@tryghost" />
                </Helmet>
                <ImageMeta image={image} />
            </>
        )
    }
}

WebsiteMeta.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                siteUrl: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
    canonical: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
}

export default WebsiteMeta
