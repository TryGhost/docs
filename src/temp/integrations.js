import React from 'react'
import PropTypes from 'prop-types'
// import { graphql } from 'gatsby'

import Layout from '../components/layouts/default'
import { IntegrationIndex, IntegrationFilterMenu, IntegrationResults } from '../components/integration-search'
import { Spirit } from '../components/spirit-styles'
import IntegrationsHeader from '../components/layouts/partials/integrations-header'
import MetaData from '../components/layouts/partials/meta-data'

const filterInternalTags = items => items
    .filter(item => item.label.charAt(0) !== `#`)
    .sort((a, b) => {
        if (a.label < b.label) {
            return -1
        }
        if (a.label > b.label) {
            return 1
        }
        return 0
    })

class IntegrationsPage extends React.Component {
    render() {
        // Add meta title and descriptionf or this page here to overwrite the site meta data as set in our config
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
                <Layout title="Integrations" headerDividerStyle="shadow" header={<IntegrationsHeader />}>
                    <IntegrationIndex>
                        <div className={ Spirit.page.xl + `pt10` }>
                            <div className="flex br4">

                                <div className="gh-integration-sidebar flex-shrink-0 w50 mr5">
                                    {/* We don't yet have any data to filter on
                                        <div className="flex flex-column mb6">
                                        <h3 className="ma0 mb2">Sort by</h3>
                                        <a className="link pa2 pl0 blue fw6" href="#">Most popular</a>
                                        <a className="link pa2 pl0 midgrey" href="#">A – Z</a>
                                    </div> */}
                                    <div className="flex flex-column mb6">
                                        <h3 className="ma0 mb2">Filter by</h3>
                                        <IntegrationFilterMenu
                                            attribute="tags.name"
                                            transformItems={filterInternalTags}
                                        />
                                    </div>
                                </div>
                                <IntegrationResults />
                            </div>
                        </div>
                    </IntegrationIndex>
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

// TODO: uncomment to Bring back integrations
// export const pageQuery = graphql`
//   query GhostIntegrationsQuery {
//     site {
//         ...SiteMetaFields
//     }
//   }
// `
