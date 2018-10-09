import React from 'react'
import Helmet from "react-helmet"
import PropTypes from 'prop-types'

import getPostExcerpt from '../../../utils/post-excerpt'

class GhostHead extends React.Component {
    render() {
        const { ghostPost } = this.props.data
        const { siteMetadata } = this.props.data.site
        const excerpt = getPostExcerpt(ghostPost)

        return (
            <>
                <Helmet>
                    <title>{ghostPost.title}</title>
                    <meta name="description" content={excerpt} />
                    <link rel="canonical" href={siteMetadata.siteUrl} />

                    <meta name="og:type" content="article" />
                    <meta name="og:title" content={ghostPost.og_title || ghostPost.title} />
                    <meta name="og:description"
                        content={
                            ghostPost.og_description ||
                            excerpt ||
                            ghostPost.meta_description
                        }
                    />
                    <meta property="og:url" content={siteMetadata.siteUrl} />
                    <meta property="article:published_time" content={ ghostPost.publishedAt } />
                    <meta property="article:modified_time" content={ ghostPost.updatedAt } />
                    <meta property="article:tag" content={ ghostPost.primary_tag } />
                    <meta property="article:author" content="https://www.facebook.com/ghost" />

                    <meta name="twitter:title" content={ghostPost.title} />
                    <meta name="twitter:description" content={ghostPost.excerpt} />
                    <meta name="twitter:url" content={siteMetadata.siteUrl} />
                    <meta name="twitter.label1" content="Reading time" />
                    <meta name="twitter:data1" content="TODO: Reading time helper" />
                    <meta name="twitter:label2" content="Filed under" />
                    <meta name="twitter:data2" content={ ghostPost.primary_tag } />
                    <meta name="twitter:creator" content="@tryghost" />
                </Helmet>
            </>
        )
    }
}

GhostHead.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                siteUrl: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
        ghostPost: PropTypes.object.isRequired,
    }).isRequired,
}

export default GhostHead
