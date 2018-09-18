import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const Integration = (props) => {
    const post = props.post
    const url = `/integrations/${post.slug}/`

    return (
        <article className="ml4 flex">
            <Link className="flex flex-column w8 pa6 tc link darkgrey" to={url}>
                <img className="mb3" src={post.feature_image} alt={post.title} />
                <div>{post.title}</div>
            </Link>
        </article>
    )
}

Integration.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Integration
