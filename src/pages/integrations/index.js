import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../../components/layouts/default'
import Integration from '../../components/integration'

const IntegrationsPage = ({ data }) => {
    const posts = data.allGhostPost.edges
    return (
        <Layout>
            <h1>Integrations</h1>

            {posts.map(({ node }) => (
                <Integration key={node.id} post={node} />
            ))}
        </Layout>
    )
}

IntegrationsPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default IntegrationsPage

export const pageQuery = graphql`
  query GhostIntegrationsQuery {
    allGhostPost(
        sort: { order: DESC, fields: [published_at] },
        limit: 50,
        filter: {primary_tag: {slug: {eq: "tutorial"}}}
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
