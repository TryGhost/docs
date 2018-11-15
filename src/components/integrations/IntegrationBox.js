import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '../global'

const IntegrationBox = (props) => {
    const { post, hit } = props
    const url = post ? `/integrations/${post.slug}/` : hit.url
    const title = post ? post.title : hit.title
    const image = post ? post.feature_image : hit.image
    const optimisedImg = `https://res.cloudinary.com/tryghost/image/fetch/w_120,h_100,c_fit/${image}`

    return (
        <Box to={ url } className="flex flex-column justify-center items-center w-100 h30 pa3 tc tdn darkgrey bg-white shadow-2 br4" elevation="2">
            <div className="flex justify-center items-center h10 w13 mt1">
                <img className="w-100 h-100" style={{ objectFit: `contain` }} src={optimisedImg} alt={title} />
            </div>
            <div className="f8 mt3">{title}</div>
        </Box>
    )
}

IntegrationBox.propTypes = {
    post: PropTypes.object,
    hit: PropTypes.object,
}

export default IntegrationBox
