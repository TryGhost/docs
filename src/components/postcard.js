import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

// import Authors from './authors'
import { SpiritStyles } from './spirit-styles'

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
        <article className="bg-white br4 shadow-2 pa10 pt8 pb8 ml5 mr5 mb10 flex flex-column justify-between flex-third relative box-hover-test">
            <Link to={ url } className="tdn">
                <header>
                    { post.featured ? <span className="purple f8 fw5 dib mr2">Featured</span> : null }
                    { tag ? <span className="midgrey f8">{ tag }</span> : null } 
                    <h2 className={ SpiritStyles.h3 + `darkgrey mt2` }>{ post.title }</h2>
                </header>
                { excerpt ? <section className={ SpiritStyles.p + `darkgrey mt2` }>{ excerpt }</section> : null }
            </Link>
            
            <footer className="flex pt2 mt5 content-end">
                {/* <Authors authors={ post.authors } /> */}
                <span className="f8 dib">{ post.publishedAt }</span>
            </footer>
        </article>
    )
}

PostCard.propTypes = {
    post: PropTypes.object.isRequired,
}

export default PostCard
