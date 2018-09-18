import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const Integration = (props) => {
    const post = props.post
    const url = `/integrations/${post.slug}/`

    return (
        <article className="flex items-start">
            <Link className="flex flex-column items-center pa6 tc link darkgrey" to={url}>
                <img className="w11 mb3" src={post.feature_image} alt={post.title} />
                <div>{post.title}</div>
            </Link>
        </article>
    )
}

Integration.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Integration
