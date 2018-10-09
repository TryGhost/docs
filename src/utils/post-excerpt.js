import PropTypes from 'prop-types'

const getPostExcerpt = (post) => {
    if (post.custom_excerpt) {
        return post.custom_excerpt
    }

    if (post.excerpt) {
        return post.excerpt
    }

    if (post.plaintext) {
        return post.plaintext.substring(0, 200) + `...`
    }

    if (post.body) {
        return post.body.body.substring(0, 200) + `...`
    }

    return post
}

getPostExcerpt.proptypes = {
    post: PropTypes.object.isRequired,
}

export default getPostExcerpt
