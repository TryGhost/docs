import React from 'react'
import Helmet from "react-helmet"
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layouts/default'
import { Spirit } from '../components/spirit-styles'
import NavSidebar from '../components/global/navigation-sidebar'
import TOC from '../components/layouts/partials/toc'

const DocTemplate = ({ data }) => {
    const post = data.markdownRemark

    return (
        <>
            <Helmet>
                <title>{post.frontmatter.title}</title>
                <meta name="description" content={post.excerpt} />
                <link rel="canonical" href="TODO: Real Data - URL" />

                <meta name="og:type" content="article" />
                <meta name="og:title" content={post.frontmatter.title} />
                <meta name="og:description" content={post.excerpt} />
                <meta property="og:url" content="TODO: Real Data - URL" />
                <meta property="article:published_time" content="TODO: Real Data - published_at" />
                <meta property="article:modified_time" content="TODO: Real Data - updated_at" />
                <meta property="article:tag" content="TODO: Real Data - primary_tag" />
                <meta property="article:author" content="https://www.facebook.com/ghost" />

                <meta name="twitter:title" content={post.frontmatter.title} />
                <meta name="twitter:description" content={post.excerpt} />
                <meta name="twitter:url" content="TODO: Real Data - URL" />
                <meta name="twitter.label1" content="Reading time" />
                <meta name="twitter:data1" content={`${post.timeToRead} min read`} />
                <meta name="twitter:label2" content="Filed under" />
                <meta name="twitter:data2" content="TODO: Real Data - primary_tag" />
                <meta name="twitter:creator" content="@tryghost" />
            </Helmet>
            <Layout>

                <div className={Spirit.page.xl + `flex flex-start mt12`}>
                    <NavSidebar />
                    <div className="flex-auto">
                        <section className="flex-auto flex bg-white br4 shadow-1 pa15 pt12">
                            <div className="order-2">
                                <TOC headingsOffset="-200" />
                            </div>
                            <article className="order-1">
                                <span className="mb8 f8">Setup / Ghost(Pro)</span>
                                <h1 className={Spirit.h1}>{post.frontmatter.title}</h1>
                                <section className="post-content" dangerouslySetInnerHTML={{
                                    __html: post.html,
                                }} />
                            </article>
                        </section>
                    </div>
                </div>
            </Layout>
        </>
    )
}

DocTemplate.propTypes = {
    data: PropTypes.object.isRequired,
}

export default DocTemplate

export const articleQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      excerpt
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
      }
      tableOfContents
    }
  }
`
