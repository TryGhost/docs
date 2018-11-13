import React from 'react'
import Helmet from "react-helmet"
import PropTypes from 'prop-types'

class ImageMeta extends React.Component {
    render() {
        const { image } = this.props

        if (!image) {
            return null
        }

        return (
            <>
                <Helmet>
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:image" content={image} />
                    <meta property="og:image" content={image} />
                    {/* TODO: fetch image sizes
                    <meta property="og:image:width" content="2000" />
                    <meta property="og:image:height" content="666" /> */}
                </Helmet>
            </>
        )
    }
}

ImageMeta.propTypes = {
    image: PropTypes.string,
}

export default ImageMeta
