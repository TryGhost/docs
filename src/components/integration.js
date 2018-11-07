import React from 'react'
import PropTypes from 'prop-types'
import Box from './layouts/partials/box'

const Integration = (props) => {
    const { post, hit } = props
    const url = post ? `/integrations/${post.slug}/` : hit.url
    const image = post ? post.feature_image : hit.image
    const title = post ? post.title : hit.title

    return (
        <Box to={ url } className="flex flex-column justify-center items-center w-100 h30 pa3 tc tdn darkgrey bg-white shadow-2 br4" elevation="2">
            <div className="flex justify-center items-center h10 w13 mt1">
                <img className="w-100 h-100" style={{ objectFit: `contain` }} src={image} alt={title} />
            </div>
            <div className="f8 mt3">{title}</div>
        </Box>
    )
}

Integration.propTypes = {
    post: PropTypes.object,
    hit: PropTypes.object,
}

export default Integration
