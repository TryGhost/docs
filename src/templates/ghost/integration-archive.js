import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { IntegrationsContent } from '../../components/integrations'
import { MetaData, getMetaImageUrls } from '../../components/common/meta'

const IntegrationsTags = ({ data, location, pageContext }) => {
    const posts = data.allGhostPost.edges
    const { tagName, tagDescription, tagImage, tagMetaTitle, tagMetaDescription, section } = pageContext

    // Add meta title and description or this page here to overwrite the site meta data as set in the config
    const title = tagMetaTitle || `Integrations - ${tagName} - Ghost`
    const description = tagMetaDescription || tagDescription || ``
    const imageUrl = tagImage || getMetaImageUrls(section)

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="series"
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

IntegrationsTags.propTypes = {
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
    pageContext: PropTypes.shape({
        section: PropTypes.string.isRequired,
        tagName: PropTypes.string.isRequired,
        tagDescription: PropTypes.string,
        tagMetaDescription: PropTypes.string,
        tagMetaTitle: PropTypes.string,
        tagImage: PropTypes.string,
    }).isRequired,
}

export default IntegrationsTags

export const tagsQuery = graphql`
    query($tagSlug: String!) {
        site {
            ...SiteMetaFields
        }
        allGhostPost(
            sort: { order: ASC, fields: [published_at] },
            limit: 100,
            filter: {tags: {elemMatch: {slug: {eq: $tagSlug}}}}
        ) {
            edges {
                node {
                    ...GhostPostListFields
                }
            }
        }
    }
`
