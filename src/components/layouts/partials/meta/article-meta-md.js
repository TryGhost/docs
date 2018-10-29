import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import _ from 'lodash'

import ImageMeta from './image-meta'

class ArticleMetaMD extends React.Component {
    render() {
        const post = this.props.data.markdownRemark
        const fm = post.frontmatter
        // Convert the frontmatter date into ISO String but, and use a fixed
        // date, if no date is set. The published date should not change once set.
        const isoDate = fm.date ? new Date(fm.date).toISOString() : new Date(`2018-10-15`).toISOString()
        const { canonical } = this.props
        const { siteMetadata } = this.props.data.site
        const primaryTag = fm.keywords && fm.keywords.length ? fm.keywords[0] : null

        return (
            <>
                <Helmet>
                    <title>{fm.meta_title || fm.title}</title>
                    <meta name="description" content={ fm.meta_description || post.excerpt } />
                    <link rel="canonical" href={ canonical } />

                    <meta property="og:site_name" content={ siteMetadata.title } />
                    <meta name="og:type" content="article" />
                    <meta name="og:title" content={ fm.meta_title || fm.title } />
                    <meta name="og:description" content={ fm.meta_description || post.excerpt } />
                    <meta property="og:url" content={ canonical } />
                    <meta property="article:published_time" content={ isoDate } />
                    {fm.keywords.map((keyword, i) => (<meta property="article:tag" content={keyword} key={i} />))}
                    <meta property="article:author" content="https://www.facebook.com/ghost/" />

                    <meta name="twitter:title" content={ fm.meta_title || fm.title } />
                    <meta name="twitter:description" content={ fm.meta_description || post.excerpt } />
                    <meta name="twitter:url" content={ canonical } />
                    <meta name="twitter.label1" content="Reading time" />
                    <meta name="twitter:data1" content={ `${post.timeToRead} min read` } />
                    {primaryTag ? <meta name="twitter:label2" content="Filed under" /> : null}
                    {primaryTag ? <meta name="twitter:data2" content={ primaryTag } /> : null}
                    <meta name="twitter:site" content="@tryghost" />
                    <meta name="twitter:creator" content="@tryghost" />
                    <script type="application/ld+json">{`
                        {
                            "@context": "https://schema.org/",
                            "@type": "Article",
                            "author": {
                                "@type": "Person",
                                "name": "Ghost",
                                "sameAs": [
                                    "https://ghost.org/",
                                    "https://www.facebook.com/ghost/",
                                    "https://twitter.com/tryghost/"
                                ]
                            },
                            ${fm.keywords.length ? `"keywords": "${_.join(fm.keywords, `, `)}",` : ``}
                            "headline": "${fm.meta_title || fm.title}",
                            "url": "${canonical}",
                            "datePublished": "${isoDate}",
                            ${fm.image ? `"fm.image": "${fm.image}",` : ``}
                            "description": "${fm.meta_description || post.excerpt}",
                            "mainEntityOfPage": {
                                "@type": "WebPage",
                                "@id": "${siteMetadata.siteUrl}"
                            }
                        }
                    `}</script>
                </Helmet>
                <ImageMeta image={fm.image} />
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

ArticleMetaMD.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object.isRequired,
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

export default ArticleMetaMD
