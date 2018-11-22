import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '../common'

const IntegrationBox = ({ post, hit, section }) => {
    const url = post ? `/${section}/${post.slug}/` : hit.url
    const title = post ? post.title : hit.title
    const image = post ? post.feature_image : hit.image
    const optimisedImg = `https://res.cloudinary.com/tryghost/image/fetch/w_120,h_100,c_fit/${image}`

    return (
        <Box
            to={url}
            className="flex flex-column justify-center items-center w-100 h30 pa3 tc tdn darkgrey bg-white shadow-2"
            elevation="2"
            radius="4"
        >
            <div className="flex justify-center items-center h10 w13 mt1">
                <img className="w-100 h-100" style={{ objectFit: `contain` }} src={optimisedImg} alt={title} />
            </div>
            <div className="f8 mt3">{title}</div>
        </Box>
    )
}

IntegrationBox.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string,
        feature_image: PropTypes.string,
        slug: PropTypes.string,
    }),
    hit: PropTypes.shape({
        url: PropTypes.string,
        title: PropTypes.string,
        image: PropTypes.string,
    }),
    section: PropTypes.string.isRequired,
}

export default IntegrationBox
