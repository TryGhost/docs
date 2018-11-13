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
                    {/* These are the image sizes of the SEO feature images */}
                    <meta property="og:image:width" content="1000" />
                    <meta property="og:image:height" content="523" />
                </Helmet>
            </>
        )
    }
}

ImageMeta.propTypes = {
    image: PropTypes.string,
}

export default ImageMeta
