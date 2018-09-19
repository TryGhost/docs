import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../../components/layouts/default'
import PostCard from '../../components/postcard'

const TutorialsPage = ({ data }) => {
    const posts = data.allGhostPost.edges
    return (
      <Layout title="Tutorials" headerDividerStyle="shadow">
            <div className="center">
                <h1>Tutorials</h1>
                {posts.map(({ node }) => (
                    <PostCard key={node.id} post={node} />
                ))}
            </div>
        </Layout>
    )
}

TutorialsPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default TutorialsPage

export const pageQuery = graphql`
  query GhostTutorialsQuery {
    allGhostPost(
        sort: { order: DESC, fields: [published_at] },
        limit: 50,
        filter: {tags: {elemMatch: {slug: {eq: "hash-tutorial"}}}}
    ) {
      edges {
        node {
          id
          slug
          title
          custom_excerpt
          plaintext
          publishedAt: published_at(formatString: "DD MMMM, YYYY"),
          tags {
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
