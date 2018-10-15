import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

// import Authors from './authors'
import { Spirit } from './spirit-styles'
import getPostExcerpt from '../utils/post-excerpt'
import Box from '../components/layouts/partials/box'

const PostCard = ({ post, className }) => {
    // const tag = post.primaryTag ? post.primaryTag.name : (post.tags ? post.tags[0].name : `Untagged`)
    const url = `/tutorials/${post.slug}/`
    const excerpt = getPostExcerpt(post)

    return (
        <Box to={ url } className={ className + ` pa10 pa8 flex flex-column justify-between flex-third relative box-hover-test faq-post-card-min-height tdn` }>
            <div>
                <header>
                    {/* <span className="midgrey f8">{ tag }</span> */}
                    <h2 className={ Spirit.h3 + `darkgrey` + (post.featured ? ` mt0` : ` mt0`) }>{ post.title }</h2>
                </header>
                { excerpt ? <section className={ Spirit.p + `middarkgrey mt4` }>{ excerpt }</section> : null }
            </div>

            <footer className="flex pt2 mt6 content-end">
                {/* <Authors authors={ post.authors } /> */}
                {/* <span className="f8 dib measure-0-2 lightgrey">{ post.published_at_pretty }</span> */}
                { post.featured ? <span className="bg-tutorial-color pa1 f8 fw5 dib measure-0-2 mr2 white br2 pl3 pr3">Featured</span> : null }
                { post.tags ? post.tags.map((item, i) => {
                    if (item.name.match(/^#/)) {
                        return null
                    } else {
                        return <span key={ i } className="bg-midgrey dib word-nowrap pt1 pb1 pl2 pr2 white br2 f8">{ item.name }</span> 
                    }
                }) : null }
            </footer>
        </Box>
    )
}

PostCard.propTypes = {
    post: PropTypes.object.isRequired,
    className: PropTypes.string,
}

export default PostCard
