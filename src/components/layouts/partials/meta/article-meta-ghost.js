import React from 'react'
import Helmet from "react-helmet"
import PropTypes from 'prop-types'
import _ from 'lodash'

import getPostExcerpt from '../../../../utils/post-excerpt'
import ImageMeta from './image-meta'

class ArticleMetaGhost extends React.Component {
    render() {
        const { ghostPost } = this.props.data
        const { canonical } = this.props
        const { siteMetadata } = this.props.data.site

        let authorProfiles = []
        const excerpt = getPostExcerpt(ghostPost)
        const publicTags = _.map(_.filter(ghostPost.tags, { visibility: `public` }), `name`)
        const primaryTag = _.get(ghostPost.primaryTag, `name`, publicTags[0])

        authorProfiles.push(
            ghostPost.primary_author.website,
            ghostPost.primary_author.twitter ? `https://twitter.com/${_.trimStart(ghostPost.primary_author.twitter, `@`)}/` : null,
            ghostPost.primary_author.facebook ? `https://www.facebook.com/${ghostPost.primary_author.facebook}/` : null
        )

        authorProfiles = _.compact(authorProfiles)

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
                    <meta property="article:published_time" content={ ghostPost.published_at } />
                    <meta property="article:modified_time" content={ghostPost.updated_at } />
                    {publicTags.map((keyword, i) => (<meta property="article:tag" content={keyword} key={i} />))}
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
                    {/* <meta name="twitter.label1" content="Reading time" /> */}
                    {/* <meta name="twitter:data1" content="TODO: Reading time helper and replace existing `label1` data" /> */}
                    <meta name="twitter:label1" content="Written by" />
                    <meta name="twitter:data1" content={ghostPost.primary_author.name} />
                    { primaryTag ? <meta name="twitter:label2" content="Filed under" /> : null }
                    { primaryTag ? <meta name="twitter:data2" content={ primaryTag } /> : null }
                    <meta name="twitter:site" content="@tryghost" />
                    <meta name="twitter:creator" content="@tryghost" />
                    <script type="application/ld+json">{`
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "publisher": {
                            "@type": "Organization",
                            "name":  "${siteMetadata.title}",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://blog.ghost.org/favicon.png",
                                "width": 60,
                                "height": 60,
                            }
                        },
                        "author": {
                            "@type": "Person",
                            "name": "${ghostPost.primary_author.name}",
                            ${ghostPost.primary_author.profile_image ? `"image": "${ghostPost.primary_author.profile_image}",` : ``}
                            ${authorProfiles.length ? `"sameAs": [${_.join(authorProfiles, `, `)}]` : ``}
                        },
                        ${publicTags.length ? `"keywords": "${_.join(publicTags, `, `)}",` : ``}
                        "headline": "${ghostPost.meta_title || ghostPost.title}",
                        "url": "${canonical}",
                        "datePublished": "${ghostPost.published_at}",
                        "dateModified": "${ghostPost.updated_at}",
                        ${ghostPost.feature_image ? `"image": "${ghostPost.feature_image}",` : ``}
                        "description": "${ghostPost.meta_description || excerpt}",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "${siteMetadata.siteUrl}"
                        }
                    `}</script>
                </Helmet>
                <ImageMeta image={ghostPost.feature_image} />
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
