import React from 'react'
import Helmet from "react-helmet"
import PropTypes from 'prop-types'

class ImageMeta extends React.Component {
    render() {
        const { image } = this.props
        console.log(`TCL: ImageMeta -> render -> image`, image)

        if (!image) {
            return null
        }

        return (
            <>
                <Helmet>
                    <meta property="og:image" content={ image } />
                    <meta property="og:image:width" content="2000" />
                    <meta property="og:image:height" content="666" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:image" content={ image } />
                </Helmet>
            </>
        )
    }
}

ImageMeta.propTypes = {
    image: PropTypes.string,
}

class WebsiteMeta extends React.Component {
    render() {
        const { siteMetadata } = this.props.data.site
        const { canonical } = this.props
        const { title } = this.props
        const { description } = this.props
        const { image } = this.props

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
