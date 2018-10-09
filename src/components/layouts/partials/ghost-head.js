import React from 'react'
import Helmet from "react-helmet"
import PropTypes from 'prop-types'
import _ from 'lodash'
import path from 'path'

import getPostExcerpt from '../../../utils/post-excerpt'

class GhostMetaData extends React.Component {
    render() {
        const { ghostPost } = this.props.data
        const { siteMetadata } = this.props.data.site
        const excerpt = getPostExcerpt(ghostPost)
        const publicTags = _.filter(ghostPost.tags, { visibility: `public` })
        const primaryTag = ghostPost.primaryTag || publicTags.length ? publicTags[0] : null
        const canonical = path.join(siteMetadata.siteUrl, this.props.location.pathname, `/`)

        return (
            <>
                <Helmet>
                    <title>{ ghostPost.title }</title>
                    <meta name="description" content={ ghostPost.meta_description || excerpt } />
                    <link rel="canonical" href={ canonical } />

                    <meta name="og:type" content="article" />
                    <meta name="og:title"
                        content={
                            ghostPost.og_title ||
                            ghostPost.titleb ||
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
                    <meta property="og:url" content={canonical} />
                    <meta property="article:published_time" content={ ghostPost.publishedAt } />
                    <meta property="article:modified_time" content={ ghostPost.updatedAt } />
                    { primaryTag ? <meta property="article:tag" content={primaryTag.name} /> : null }
                    <meta property="article:author" content="https://www.facebook.com/ghost" />

                    <meta name="twitter:title"
                        content={
                            ghostPost.twitter_title ||
                            ghostPost.titleb ||
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
                    <meta name="twitter:url" content={canonical} />
                    <meta name="twitter.label1" content="Reading time" />
                    <meta name="twitter:data1" content="TODO: Reading time helper" />
                    { primaryTag ? <meta name="twitter:label2" content="Filed under" /> : null }
                    { primaryTag ? <meta name="twitter:data2" content={primaryTag.name} /> : null }
                    <meta name="twitter:creator" content="@tryghost" />
                </Helmet>
            </>
        )
    }
}

GhostMetaData.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                siteUrl: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
        ghostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
}

export default GhostMetaData
