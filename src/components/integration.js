import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const Integration = (props) => {
    const post = props.post
    const url = `/integrations/${post.slug}/`

    return (
        <Link className="gh-integration-card flex-grow-0 flex flex-column justify-center items-center w30 h30 ma5 pa3 tc link darkgrey bg-white shadow-2 br5" to={url}>
            <div className="flex justify-center items-center h10 w13 mt1 mb2">
                <img className="w-100 h-100" style={{ objectFit: `contain` }} src={post.feature_image} alt={post.title} />
            </div>
            <div className="f8">{post.title}</div>
        </Link>
    )
}

Integration.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Integration
