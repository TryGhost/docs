import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layouts/default'
import Integration from '../components/integration'
import { Spirit } from '../components/spirit-styles'
import IntegrationsHeader from '../components/layouts/partials/integrations-header'
import MetaData from '../components/layouts/partials/meta-data'
import { Index, connectHits } from 'react-instantsearch-dom'

const CustomHits = connectHits(({ hits }) => (
    <div className="gh-integrations w-100">
        {hits.map(hit => <Integration key={hit.objectID} post={hit} />)}
    </div>
))

class IntegrationsPage extends React.Component {
    render() {
        // TODO: Replace with real title and description for IntegrationsPage
        const title = `Integrations`
        const description = `Your favourite apps and tools, integrated with Ghost. Connect tools for automation, analytics, marketing, support and much more.`
        const imageUrl = `https://unsplash.com/photos/RPT3AjdXlZc`

        return (
            <>
                <MetaData
                    data={this.props.data}
                    location={this.props.location}
                    type="website"
                    title={title || this.props.data.site.siteMetadata.title}
                    description={description || this.props.data.site.siteMetadata.description}
                    image={imageUrl}
                />
                <Layout title="Integrations" headerDividerStyle="shadow" header={ <IntegrationsHeader /> }>
                    <div className={ Spirit.page.xl + `pt10` }>
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
                            <Index indexName="integration">
                                <CustomHits />
                            </Index>
                        </div>
                    </div>
                </Layout>
            </>
        )
    }
}

IntegrationsPage.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                siteUrl: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
}

export default IntegrationsPage

export const pageQuery = graphql`
  query GhostIntegrationsQuery {
    site {
        ...SiteMetaFields
    }
  }
`
