import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Authors from './authors'

const getExcerpt = (post) => {
    if (post.custom_excerpt) {
        return post.custom_excerpt
    }

    if (post.excerpt) {
        return post.excerpt
    }

    if (post.plaintext) {
        return post.plaintext.substring(0, 200)
    }

    if (post.body) {
        return post.body.substring(0, 200)
    }

    return post
}

const PostCard = ({ post }) => {
    const tag = post.primaryTag ? post.primaryTag.name : (post.tags ? post.tags[0].name : `Untagged`)
    const url = `/tutorials/${post.slug}/`
    const excerpt = getExcerpt(post)

    return (
        <article className="post-card mt7 mb7">
            <Link to={url}>
                <header>
                    {tag ? <span>{tag}</span> : null}
                    <h2>{post.title}</h2>
                </header>
                {excerpt ? <section>{excerpt}</section> : null}
            </Link>
            <footer>
                <Authors authors={post.authors} />
                <span>{post.publishedAt}</span>
            </footer>
        </article>
    )
}

PostCard.propTypes = {
    post: PropTypes.object.isRequired,
}

export default PostCard
