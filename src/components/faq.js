import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const getExcerpt = (post) => {
    if (post.custom_excerpt) {
        return post.custom_excerpt
    }

    if (post.excerpt) {
        return post.excerpt
    }

    if (post.plaintext) {
        return post.plaintext.substring(0, 200) + '...'
    }

    if (post.body) {
        return post.body.body.substring(0, 200) + '...'
    }

    return post
}

const FAQ = (props) => {
    const post = props.post
    const url = '/faq/${post.slug}'
    const excerpt = getExcerpt(post)

    return (
        <article className="ml4 flex mt3 mb3">
            <Link to={url}>
                <header>
                    <h2>{post.title} &raquo;</h2>
                </header>
                {excerpt ? <section>{excerpt}</section> : null}
            </Link>
        </article>
    )
}

FAQ.propTypes = {
    post: PropTypes.object.isRequired,
}

export default FAQ
