import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../../components/layouts/default'
import Integration from '../../components/integration'
import { SpiritStyles } from '../../components/spirit-styles'

const IntegrationsPage = ({ data }) => {
    const posts = data.allGhostPost.edges
    return (
        <Layout title="Integrations" headerDividerStyle="shadow">
            <div className={ SpiritStyles.page.xl }>
                <div className="pa-vw4 tc">
                    <h1 className="ma0 pa0 f-headline">Ghost Integrations</h1>
                    <p className="ma0 mt2 f4 midgrey">All your favourite apps and tools, integrated with Ghost</p>
                    <input id="search" className="input-reset form-text pa4 pl5 pr5 mt8 w-100 mw-s f6 br4 ba b--transparent bg-white shadow-3" type="text" placeholder="Search integrations..." name="query" autoComplete="off" />
                </div>
                <div className="flex pa12 bg-white br4">
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
                    <div className="flex flex-wrap nt5">
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
        limit: 70,
        filter: {tags: {elemMatch: {slug: {eq: "hash-integration"}}}}
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
          tags {
            name
            slug
          }
          authors {
            name
            slug
          }
        }
      }
    }
  }
`
