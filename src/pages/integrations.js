import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layouts/default'
import Integration from '../components/integration'
import { Spirit } from '../components/spirit-styles'
import IntegrationsHeader from '../components/layouts/partials/integrations-header'

const IntegrationsPage = ({ data }) => {
    const posts = data.allGhostPost.edges
    // TODO: structured data
    return (
        <Layout title="Integrations" headerDividerStyle="shadow" header={ <IntegrationsHeader /> }>
            <div className={ Spirit.page.xl }>
                <div className="flex br4">
                    <div className="gh-integration-sidebar flex-shrink-0 w50 mr5">
                        <div className="flex flex-column mb6">
                            <h3 className="ma0 mb2">Sort by</h3>
                            <a className="link pa2 pl0 blue fw6" href="#">Most popular</a>
                            <a className="link pa2 pl0 midgrey" href="#">A – Z</a>
                        </div>
                        <div className="flex flex-column mb6">
                            <h3 className="ma0 mb2">Filter by</h3>
                            <a className="link pa2 pl0 blue fw6" href="#">All integrations</a>
                            <a className="link pa2 pl0 midgrey" href="#">Automation</a>
                            <a className="link pa2 pl0 midgrey" href="#">Analytics</a>
                            <a className="link pa2 pl0 midgrey" href="#">Editor Cards</a>
                            <a className="link pa2 pl0 midgrey" href="#">Communication</a>
                            <a className="link pa2 pl0 midgrey" href="#">Marketing</a>
                            <a className="link pa2 pl0 midgrey" href="#">Support</a>
                            <a className="link pa2 pl0 midgrey" href="#">Storage</a>
                            <a className="link pa2 pl0 midgrey" href="#">Utilities</a>
                        </div>
                    </div>
                    <div className="gh-integrations w-100">
                        {posts.map(({ node }) => (
                            <Integration key={node.id} post={node} />
                        ))}
                    </div>
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
        filter: {tags: {elemMatch: {slug: {eq: "hash-integration"}}}}
    ) {
      edges {
        node {
          ...GhostPostListFields
        }
      }
    }
  }
`
