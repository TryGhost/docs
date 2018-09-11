import PropTypes from 'prop-types'
import React from 'react'

const Post = ({ children }) => (
    <div>{children}</div>
)

Post.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Post
