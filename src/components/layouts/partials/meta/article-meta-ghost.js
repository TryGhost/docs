import React from 'react'
import Helmet from "react-helmet"
import PropTypes from 'prop-types'
import _ from 'lodash'

import getPostExcerpt from '../../../../utils/post-excerpt'
import ImageMeta from './image-meta'

function getAuthorProperties(primaryAuthor, fetchAuthorData) {
    let authorProfiles = []

    if (fetchAuthorData) {
        authorProfiles.push(
            primaryAuthor.website ? primaryAuthor.website : null,
            primaryAuthor.twitter ? `https://twitter.com/${_.trimStart(primaryAuthor.twitter, `@`)}/` : null,
            primaryAuthor.facebook ? `https://www.facebook.com/${primaryAuthor.facebook}/` : null
        )
    } else {
        authorProfiles.push(
            `https://ghost.org/`,
            `https://twitter.com/ghost/`,
            `https://www.facebook.com/ghost/`
        )
    }

    authorProfiles = _.compact(authorProfiles)

    return {
        name: fetchAuthorData ? primaryAuthor.name : `Ghost`,
        sameAsArray: authorProfiles.length ? `["${_.join(authorProfiles, `", "`)}"]` : null,
        image: fetchAuthorData ? primaryAuthor.profile_image : null,
    }
}

class ArticleMetaGhost extends React.Component {
    render() {
        const { ghostPost } = this.props.data
        const { canonical, fetchAuthorData, title } = this.props
        const { siteMetadata } = this.props.data.site

        const excerpt = getPostExcerpt(ghostPost)
        const publicTags = _.map(_.filter(ghostPost.tags, { visibility: `public` }), `name`)
        const primaryTag = _.get(ghostPost.primaryTag, `name`, publicTags[0])

        const author = getAuthorProperties(ghostPost.primary_author, fetchAuthorData)

        return (
            <>
                <Helmet>
                    <title>{ghostPost.meta_title || title || ghostPost.title}</title>
                    <meta name="description" content={ ghostPost.meta_description || excerpt } />
                    <link rel="canonical" href={ canonical } />

                    <meta property="og:site_name" content={ siteMetadata.title } />
                    <meta name="og:type" content="article" />
                    <meta name="og:title"
                        content={
                            ghostPost.og_title ||
                            title ||
                            ghostPost.meta_title ||
                            ghostPost.title
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
                    <meta property="article:author" content="https://www.facebook.com/ghost/" />

                    <meta name="twitter:title"
                        content={
                            ghostPost.twitter_title ||
                            title ||
                            ghostPost.meta_title ||
                            ghostPost.title
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
                    <meta name="twitter:data1" content={author.name} />
                    { primaryTag ? <meta name="twitter:label2" content="Filed under" /> : null }
                    { primaryTag ? <meta name="twitter:data2" content={ primaryTag } /> : null }
                    <meta name="twitter:site" content="@tryghost" />
                    <meta name="twitter:creator" content="@tryghost" />
                    <script type="application/ld+json">{`
                        {
                            "@context": "https://schema.org/",
                            "@type": "Article",
                            "author": {
                                "@type": "Person",
                                "name": "${author.name}",
                                ${author.image ? author.sameAsArray ? `"image": "${author.image}",` : `"image": "${author.image}"` : ``}
                                ${author.sameAsArray ? `"sameAs": ${author.sameAsArray}` : ``}
                            },
                            ${publicTags.length ? `"keywords": "${_.join(publicTags, `, `)}",` : ``}
                            "headline": "${ghostPost.meta_title || title || ghostPost.title}",
                            "url": "${canonical}",
                            "datePublished": "${ghostPost.published_at}",
                            "dateModified": "${ghostPost.updated_at}",
                            ${ghostPost.feature_image ? `"image": "${ghostPost.feature_image}",` : ``}
                            "description": "${ghostPost.meta_description || excerpt}",
                            "mainEntityOfPage": {
                                "@type": "WebPage",
                                "@id": "${siteMetadata.siteUrl}"
                            }
                        }
                    `}</script>
                </Helmet>
                <ImageMeta image={ghostPost.feature_image} />
            </>
        )
    }
}

// "publisher": {
//     "@type": "Organization",
//         "name": "Ghost",
//             "logo": {
//         "@type": "ImageObject",
//             "url": "https://blog.ghost.org/favicon.png",
//                 "width": 60,
//                     "height": 60
//     }
// },

ArticleMetaGhost.defaultProps = {
    fetchAuthorData: false,
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
    fetchAuthorData: PropTypes.bool,
    title: PropTypes.string,
}

export default ArticleMetaGhost
