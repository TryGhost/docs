import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

class ArticleMetaMD extends React.Component {
    render() {
        const post = this.props.data.markdownRemark
        const fm = post.frontmatter
        const { canonical } = this.props
        const { siteMetadata } = this.props.data.site
        const primaryTag = fm.keywords && fm.keywords.length ? fm.keywords[0] : null

        return (
            <>
                <Helmet>
                    <title>{`${fm.meta_title || fm.title} - Ghost`}</title>
                    <meta name="description" content={ fm.meta_description || post.excerpt } />
                    <link rel="canonical" href={ canonical } />

                    <meta property="og:site_name" content={ siteMetadata.title } />
                    <meta name="og:type" content="article" />
                    <meta name="og:title" content={ fm.meta_title || fm.title } />
                    <meta name="og:description" content={ fm.meta_description || post.excerpt } />
                    <meta property="og:url" content={ canonical } />
                    {/* <meta property="og:image" content="TODO: feature image" /> */}
                    <meta property="article:published_time" content={ fm.date } />
                    {/* <meta property="article:modified_time" content="TODO: Real Data - updated_at" /> */}
                    {primaryTag ? <meta property="article:tag" content={ primaryTag } /> : null}
                    <meta property="article:author" content="https://www.facebook.com/ghost" />

                    <meta name="twitter:title" content={ fm.meta_title || fm.title } />
                    <meta name="twitter:description" content={ fm.meta_description || post.excerpt } />
                    <meta name="twitter:url" content={ canonical } />
                    {/* <meta name="twitter:card" content="summary_large_image" /> */}
                    {/* <meta name="twitter:image" content="TODO: feature image" /> */}
                    <meta name="twitter.label1" content="Reading time" />
                    <meta name="twitter:data1" content={ `${post.timeToRead} min read` } />
                    {primaryTag ? <meta name="twitter:label2" content="Filed under" /> : null}
                    {primaryTag ? <meta name="twitter:data2" content={ primaryTag } /> : null}
                    <meta name="twitter:site" content="@tryghost" />
                    <meta name="twitter:creator" content="@tryghost" />
                </Helmet>
            </>
        )
    }
}

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
