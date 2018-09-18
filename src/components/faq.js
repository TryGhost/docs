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
        return post.plaintext.substring(0, 200) + `...`
    }

    if (post.body) {
        return post.body.body.substring(0, 200) + `...`
    }

    return post
}

const FAQ = (props) => {
    const post = props.post
    const url = `/faq/${post.slug}/`
    const excerpt = getExcerpt(post)

    return (
        <article className="flex flex-column items-start pt7 pb7 bt b--whitegrey">
            <Link className="pa2 pl0 pt0 link blue fw5" to={url}>{post.title} &raquo;</Link>
            <p className="ma0 f8 lh-copy">{excerpt ? <section>{excerpt}</section> : null}</p>
        </article>
    )
}

FAQ.propTypes = {
    post: PropTypes.object.isRequired,
}

export default FAQ
