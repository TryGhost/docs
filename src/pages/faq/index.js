import Container from '../../components/Container'
import PostCard from '../../components/PostCard'

import React from 'react'
import { graphql } from 'gatsby'

export default ({ data }) => {
    const posts = data.allGhostPost.edges
    return (
        <Container>
            <header>
                <h1>Gatsby + Ghost Demo</h1>
            </header>
            <main>
                <div>
                    {posts.map(({ node }) => (
                        <PostCard key={node.id} post={node} />
                    ))}
                </div>
            </main>
        </Container>
    )
}

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
