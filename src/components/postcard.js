import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

// import Authors from './authors'
import { Spirit } from './spirit-styles'
import getPostExcerpt from '../utils/post-excerpt'

const PostCard = ({ post, className }) => {
    const tag = post.primaryTag ? post.primaryTag.name : (post.tags ? post.tags[0].name : `Untagged`)
    const url = `/tutorials/${post.slug}/`
    const excerpt = getPostExcerpt(post)

    return (
        <article className={ className + ` bg-white br4 shadow-2 pa10 pa8 flex flex-column justify-between flex-third relative box-hover-test` }>
            <Link to={ url } className="tdn">
                <header>
                    { post.featured ? <span className="bg-green-l2 pa1 f-supersmall fw5 dib measure-0-2 mr2 white br-pill pl2 pr2 nl2">Featured</span> : null }
                    <span className="midgrey f8">{ tag }</span>
                    <h2 className={ Spirit.h3 + `middarkgrey-d1` + (post.featured ? ` mt2` : ` mt4`) }>{ post.title }</h2>
                </header>
                { excerpt ? <section className={ Spirit.p + `middarkgrey-l2 mt4` }>{ excerpt }</section> : null }
            </Link>

            <footer className="flex pt2 mt6 content-end">
                {/* <Authors authors={ post.authors } /> */}
                <span className="f8 dib measure-0-2 lightgrey">{ post.publishedAt }</span>
            </footer>
        </article>
    )
}

PostCard.propTypes = {
    post: PropTypes.object.isRequired,
    className: PropTypes.string,
}

export default PostCard
