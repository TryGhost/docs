import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import IntegrationsContent from '../components/integrations-content'
import { MetaData } from '../components/meta'
import getMetaImageUrls from '../utils/getMetaImageUrls'

class IntegrationsPage extends React.Component {
    render() {
        // TODO: Replace with real title and description for IntegrationsPage
        const title = `Integrations`
        const description = `Your favourite apps and tools, integrated with Ghost. Connect tools for automation, analytics, marketing, support and much more.`
        const imageUrl = getMetaImageUrls(`integrations`)

        const posts = this.props.data.allGhostPost.edges

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
                <IntegrationsContent
                    posts={posts}
                    location={this.props.location}
                />
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
        allGhostPost: PropTypes.object.isRequired,
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
    allGhostPost(
        sort: { order: ASC, fields: [published_at] },
        limit: 100,
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
