import Authors from './authors'
import Link from 'gatsby-link'

import PropTypes from 'prop-types'
import React from 'react'

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
        return post.body.body.substring(0, 200)
    }

    return post
}

const makeAuthorObject = (author) => {
    return {
        name: author,
        slug: author.split(` `)[0].toLowerCase(),
    }
}

const Post = (props) => {
    const post = props.post
    const tag = post.primaryTag ? post.primaryTag.name : (post.tags ? post.tags[0].name : `Untagged`)
    const url = `/tutorials/${post.slug}`
    const excerpt = getExcerpt(post)

    return (
        <article className="mt7 mb7">
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

Post.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Post
