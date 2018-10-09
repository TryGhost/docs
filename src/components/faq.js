import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import getPostExcerpt from '../utils/post-excerpt'

const FAQ = (props) => {
    const post = props.post
    const url = `/faq/${post.slug}/`
    const excerpt = getPostExcerpt(post)

    return (
        <article className="flex flex-column items-start col-6">
            <Link className="f5 pa2 pl0 pt0 link blue fw5" to={url}>{post.title} &raquo;</Link>
            {excerpt ? <p className="ma0 f8 lh-copy measure-wide">{excerpt}</p> : null}
        </article>
    )
}

FAQ.propTypes = {
    post: PropTypes.object.isRequired,
}

export default FAQ
