import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const Integration = (props) => {
    const { post } = props
    const { hit } = props
    const url = post ? `/integrations/${post.slug}/` : hit.url
    const image = post ? post.feature_image : hit.image
    const title = post ? post.title : hit.title

    return (
        <Link className="gh-integration-card flex flex-column justify-center items-center w-100 h30 pa3 tc link darkgrey bg-white shadow-2 br5" to={url}>
            <div className="flex justify-center items-center h10 w13 mt1 mb3">
                <img className="w-100 h-100" style={{ objectFit: `contain` }} src={image} alt={title} />
            </div>
            <div className="f8">{title}</div>
        </Link>
    )
}

Integration.propTypes = {
    post: PropTypes.object,
    hit: PropTypes.object,
}

export default Integration
