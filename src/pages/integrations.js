import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { IntegrationsContent } from '../components/integrations'
import { MetaData, getMetaImageUrls } from '../components/common/meta'

const IntegrationsPage = ({ data, location }) => {
    // Add meta title and description for this page here to overwrite the site meta data as set in the config
    const title = `Ghost Integrations – Connect your favourite Tools & Apps to your site`
    const description = `Keep your stack aligned and integrate your most used tools & apps with your Ghost site: automation, analytics, marketing, support and much more! 👉`
    const imageUrl = getMetaImageUrls(`integrations`)

    const posts = data.allGhostPost.edges

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="website"
                title={title || data.site.siteMetadata.title}
                description={description || data.site.siteMetadata.description}
                image={imageUrl}
            />
            <IntegrationsContent
                posts={posts}
                location={location}
            />
        </>
    )
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
