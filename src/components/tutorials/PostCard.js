import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '../common'
import { Spirit } from '../../styles/spirit-styles'
import { getPostExcerpt } from '../../utils/getPostExcerpt'
import { removeInternalTags } from '../../utils/tag-utils'

const PostCard = ({ post, className, section }) => {
    const url = `/${section}/${post.slug}/`
    const excerpt = getPostExcerpt(post)
    const tags = removeInternalTags(post.tags)

    return (
        <Box
            to={url}
            className={`${className} pa10 pa8 flex flex-column justify-between flex-third relative tutorial-post-card tdn`}
            elevation="1"
        >
            <div>
                <header>
                    <h2 className={`${Spirit.h3} darkgrey nt2`}>{post.title}</h2>
                </header>
                {excerpt ? <section className={`${Spirit.p} midgrey mt4`}>{excerpt}</section> : null}
            </div>
            <footer className="pt2 mt6 flex justify-between items-center">
                <div className="flex items-center">
                    {post.featured ? <span className="bg-tutorial-color pa1 f-supersmall fw5 dib measure-0-2 mr2 white br2 pl3 pr3">Featured</span> : null}
                    {tags ? tags.map((tag, i) => <span key={i} className="bg-midgrey dib word-nowrap pt1 pb1 pl2 pr2 white br2 f-supersmall">{tag.name}</span>) : null}
                </div>
            </footer>
        </Box>
    )
}

PostCard.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
    }).isRequired,
    className: PropTypes.string,
    section: PropTypes.string.isRequired,
}

export default PostCard
