import React from 'react'
import PropTypes from 'prop-types'
import path from 'path'

import ArticleMetaGhost from './meta/article-meta-ghost'
import ArticleMetaMD from './meta/article-meta-md'
import WebsiteMeta from './meta/website-meta'

class MetaData extends React.Component {
    render() {
        const { ghostPost } = this.props.data || {}
        const { markdownRemark } = this.props.data || {}
        const { siteMetadata } = this.props.data.site
        const { type, title, description, image, fetchAuthorData } = this.props
        const canonical = path.join(siteMetadata.siteUrl, this.props.location.pathname, `/`)

        if (type === `article`) {
            if (ghostPost) {
                return (
                    <ArticleMetaGhost data={this.props.data} canonical={canonical} fetchAuthorData={fetchAuthorData} />
                )
            } else if (markdownRemark) {
                return (
                    <ArticleMetaMD data={this.props.data} canonical={canonical} />
                )
            }
        } else if (type === `website` || type === `series`) {
            return (
                <WebsiteMeta
                    data={ this.props.data }
                    canonical={ canonical }
                    title={ title }
                    description={ description }
                    image={ image }
                    type={ type }
                />
            )
        }

        return null
    }
}

MetaData.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                siteUrl: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
        ghostPost: PropTypes.object,
        markdownRemark: PropTypes.object,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    fetchAuthorData: PropTypes.bool,
}

export default MetaData
