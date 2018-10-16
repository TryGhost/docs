import React from 'react'
import PropTypes from 'prop-types'

// import Authors from './authors'
import { Spirit } from './spirit-styles'
import getPostExcerpt from '../utils/post-excerpt'
import Box from '../components/layouts/partials/box'
import Icon from '../components/global/icon'

const PostCard = ({ post, className }) => {
    // const tag = post.primaryTag ? post.primaryTag.name : (post.tags ? post.tags[0].name : `Untagged`)
    const url = `/tutorials/${post.slug}/`
    const excerpt = getPostExcerpt(post)

    console.log(JSON.stringify(post))

    return (
        <Box to={ url } elevation="2" className={ className + ` pa10 pa8 flex flex-column justify-between flex-third relative box-hover-test tutorial-post-card tdn` }>
            <div>
                <header>
                    {/* <Icon name="typing" className="tutorial-feature-image w7 h-auto" /> */}
                    {/* { post.feature_image ? <img src={ post.feature_image } className="tutorial-feature-image" /> : <Icon name="typing" className="w7 h-auto tutorial-feature-image" /> } */}
                    <h2 className={ Spirit.h3 + `darkgrey mt2` }>{ post.title }</h2>
                </header>
                { excerpt ? <section className={ Spirit.p + `midgrey mt4` }>{ excerpt }</section> : null }
            </div>

            <footer className="pt2 mt6 flex justify-between items-center">
                {/* <Authors authors={ post.authors } /> */}
                <div className="flex items-center">
                    { post.featured ? <span className="bg-tutorial-color pa1 f-supersmall fw5 dib measure-0-2 mr2 white br2 pl3 pr3">Featured</span> : null }
                    { post.tags ? post.tags.map((item, i) => {
                        if (item.name.match(/^#/)) {
                            return null
                        } else {
                            return <span key={ i } className="bg-midgrey dib word-nowrap pt1 pb1 pl2 pr2 white br2 f-supersmall">{ item.name }</span> 
                        }
                    }) : null }
                </div>
                {/* <div className="f-supersmall dib measure-0-2 midgrey">{ post.published_at_pretty }</div> */}
            </footer>
        </Box>
    )
}

PostCard.propTypes = {
    post: PropTypes.object.isRequired,
    className: PropTypes.string,
}

export default PostCard
