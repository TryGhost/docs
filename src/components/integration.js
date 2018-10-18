import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const Integration = ({ post }) => (
    <Link className="gh-integration-card flex flex-column justify-center items-center w-100 h30 pa3 tc link darkgrey bg-white shadow-2 br5" to={post.url}>
        <div className="flex justify-center items-center h10 w13 mt1 mb3">
            <img className="w-100 h-100" style={{ objectFit: `contain` }} src={post.image} alt={post.title} />
        </div>
        <div className="f8">{post.title}</div>
    </Link>
)

Integration.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Integration
