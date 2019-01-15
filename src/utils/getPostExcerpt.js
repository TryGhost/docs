import PropTypes from 'prop-types'

// TODO: this should really be a helper using Ghost SDK
export const getPostExcerpt = (post) => {
    if (post.excerpt) {
        return post.excerpt
    }

    if (post.plaintext) {
        return `${post.plaintext.substring(0, 200)}...`
    }

    if (post.body) {
        return `${post.body.body.substring(0, 200)}...`
    }

    return null
}

getPostExcerpt.proptypes = {
    post: PropTypes.shape({
        excerpt: PropTypes.string,
        plaintext: PropTypes.string,
        body: PropTypes.string.isRequired,
    }).isRequired,
}

export default getPostExcerpt
