import Layout from '../../components/layout'
import Link from 'gatsby-link'
import PostCard from '../../components/PostCard'
import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

const FAQPage = ({ data }) => {
    const posts = data.allGhostPost.edges
    return (
        <Layout>
            <Link to="/">&lt; Home</Link>
            <section>
                <h1>FAQ</h1>
                <div>
                    <div>
                        {posts.map(({ node }) => (
                            <PostCard key={node.id} post={node} />
                        ))}
                    </div>
                </div>
            </section>
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
