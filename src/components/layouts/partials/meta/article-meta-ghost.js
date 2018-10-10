import React from 'react'
import Helmet from "react-helmet"
import PropTypes from 'prop-types'
import _ from 'lodash'

import getPostExcerpt from '../../../../utils/post-excerpt'

class ArticleMetaGhost extends React.Component {
    render() {
        const { ghostPost } = this.props.data
        const { canonical } = this.props
        const { siteMetadata } = this.props.data.site
        const excerpt = getPostExcerpt(ghostPost)
        const publicTags = _.filter(ghostPost.tags, { visibility: `public` })
        const primaryTag = ghostPost.primaryTag || publicTags.length ? publicTags[0] : null

        return (
            <>
                <Helmet>
                    <title>{`${ghostPost.meta_title || ghostPost.title} - Ghost`}</title>
                    <meta name="description" content={ ghostPost.meta_description || excerpt } />
                    <link rel="canonical" href={ canonical } />

                    <meta property="og:site_name" content={ siteMetadata.title } />
                    <meta name="og:type" content="article" />
                    <meta name="og:title"
                        content={
                            ghostPost.og_title ||
                            ghostPost.title ||
                            ghostPost.meta_title
                        }
                    />
                    <meta name="og:description"
                        content={
                            ghostPost.og_description ||
                            excerpt ||
                            ghostPost.meta_description
                        }
                    />
                    <meta property="og:url" content={ canonical } />
                    {/* <meta property="og:image" content="TODO: feature image" /> */}
                    <meta property="article:published_time" content={ ghostPost.published_at } />
                    <meta property="article:modified_time" content={ghostPost.updated_at } />
                    { primaryTag ? <meta property="article:tag" content={ primaryTag.name } /> : null }
                    <meta property="article:author" content="https://www.facebook.com/ghost" />

                    <meta name="twitter:title"
                        content={
                            ghostPost.twitter_title ||
                            ghostPost.title ||
                            ghostPost.meta_title
                        }
                    />
                    <meta name="twitter:description"
                        content={
                            ghostPost.twitter_description ||
                            excerpt ||
                            ghostPost.meta_description
                        }
                    />
                    <meta name="twitter:url" content={ canonical } />
                    {/* <meta name="twitter:card" content="summary_large_image" /> */}
                    {/* <meta name="twitter:image" content="TODO: feature image" /> */}
                    {/* <meta name="twitter.label1" content="Reading time" /> */}
                    {/* <meta name="twitter:data1" content="TODO: Reading time helper" /> */}
                    { primaryTag ? <meta name="twitter:label2" content="Filed under" /> : null }
                    { primaryTag ? <meta name="twitter:data2" content={ primaryTag.name } /> : null }
                    <meta name="twitter:site" content="@tryghost" />
                    <meta name="twitter:creator" content="@tryghost" />
                </Helmet>
            </>
        )
    }
}

ArticleMetaGhost.propTypes = {
    data: PropTypes.shape({
        ghostPost: PropTypes.object.isRequired,
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                siteUrl: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
    canonical: PropTypes.string.isRequired,
}

export default ArticleMetaGhost
