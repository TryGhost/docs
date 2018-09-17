import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../../components/layouts/default'
import FAQ from '../../components/faq'

const FAQPage = ({ data }) => {
    const posts = data.allGhostPost.edges
    return (
        <Layout title="FAQ">
            <div className="mw10 center">
                <h1>FAQ</h1>
                {posts.map(({ node }) => (
                    <FAQ key={node.id} post={node} />
                ))}
            </div>
        </Layout>
    )
}

FAQPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default FAQPage

export const pageQuery = graphql`
  query GhostFAQQuery {
    allGhostPost(
        sort: { order: DESC, fields: [published_at] },
        limit: 50,
        filter: {primary_tag: {slug: {eq: "faq"}}}
    ) {
      edges {
        node {
          id
          slug
          title
          custom_excerpt
          plaintext
          publishedAt: published_at(formatString: "DD MMMM, YYYY"),
          primaryTag: primary_tag {
            name
            slug
          }
          authors {
            name slug
          }
        }
      }
    }
  }
`
