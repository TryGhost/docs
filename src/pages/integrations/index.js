import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../../components/layouts/default'
import Integration from '../../components/integration'

const IntegrationsPage = ({ data }) => {
    const posts = data.allGhostPost.edges
    return (
        <Layout title="Integrations">
            <div className="center">
                <h1>Integrations</h1>
                <div className="flex pa12 bg-white br4">
                    {posts.map(({ node }) => (
                        <Integration key={node.id} post={node} />
                    ))}
                </div>
            </div>
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
        filter: {primary_tag: {slug: {eq: "integration"}}}
    ) {
      edges {
        node {
          id
          slug
          title
          feature_image
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
