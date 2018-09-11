import AuthorList from './AuthorList'
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

const PostCard = (props) => {
    const post = props.post
    const tag = post.primaryTag ? post.primaryTag.name : (post.tags ? post.tags[0].name : `Untagged`)
    // TODO: remove, once we have templates for each
    const url = post.primaryTag.slug === `faq` ? `/faq/${post.slug}` : `/tutorials/${post.slug}`
    const excerpt = getExcerpt(post)
    const authors = post.authors[0].name ? post.authors : post.authors.map(author => makeAuthorObject(author))

    return (
        <article className="ml4 flex">
            <div>
                <Link to={url}>
                    <header>
                        {tag ? <span>{tag}</span> : null}
                        <h2>{post.title}</h2>
                    </header>
                    {excerpt ? <section>{excerpt}</section> : null}
                </Link>
                <footer>
                    {post.authors ? <AuthorList authors={authors} /> : null}
                    <span>{post.publishedAt}</span>
                </footer>
            </div>
        </article>
    )
}

PostCard.propTypes = {
    post: PropTypes.object.isRequired,
}

export default PostCard
