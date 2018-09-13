import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const Integration = (props) => {
    const post = props.post
    const url = `/integrations/${post.slug}`

    return (
        <article className="ml4 flex">
            <Link to={url}>{post.title}</Link>
        </article>
    )
}

Integration.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Integration
