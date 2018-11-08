import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import IntegrationsContent from '../components/integrations-content'
import MetaData from '../components/layouts/partials/meta-data'

class IntegrationsTags extends React.Component {
    render() {
        const posts = this.props.data.allGhostPost.edges
        const { tagName, tagDescription, tagImage, tagMetaTitle, tagMetaDescription } = this.props.pageContext

        const title = tagMetaTitle || `Integrations - ${tagName} - Ghost`
        const description = tagMetaDescription || tagDescription || ``
        const imageUrl = tagImage || ``

        return (
            <>
                <MetaData
                    data={this.props.data}
                    location={this.props.location}
                    type="series"
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
        tagName: PropTypes.string.isRequired,
        // tagURL: PropTypes.string.isRequired,
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
            limit: 10,
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
