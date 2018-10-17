import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'

import Layout from '../components/layouts/default'
import FAQ from '../components/faq'
import { Spirit } from '../components/spirit-styles'
import MetaData from '../components/layouts/partials/meta-data'
import FAQTagList from '../components/layouts/partials/faq-taglist'

class FAQTags extends React.Component {
    render() {
        const posts = this.props.data.allGhostPost.edges
        const { tagName, tagLink } = this.props.pageContext

        // TODO: Replace with real title and description for FAQTags
        const title = `FAQ - ${tagName} - ${this.props.data.site.siteMetadata.title}`
        const description = ``
        const imageUrl = ``

        return (
            <>
                <MetaData
                    data={ this.props.data }
                    location={ this.props.location }
                    type="series"
                    title={ title || this.props.data.site.siteMetadata.title }
                    description={ description || this.props.data.site.siteMetadata.description }
                    image={ imageUrl }
                />
                <Layout title="FAQ" headerDividerStyle="shadow">
                    <div className="bg-faq bb b--whitegrey">
                        <div className={ Spirit.page.xl + `pt-vw7 pt-vw1-ns pb-vw1` }>
                            <h1 className={ Spirit.h4 + `white` }>
                                <Link to="/faq/" className={ `link dim white fw3` }>Frequently Asked Questions</Link>
                                <span className="white titleslash-white pl4 ml4 relative">
                                    <Link to={ tagLink } className="link dim white">{ tagName }</Link>
                                </span>
                            </h1>
                        </div>
                    </div>
                    <div className={ Spirit.page.xl + `grid-12` }>
                        <div className="bg-white shadow-2 br4 mt10 pa15 pt10 pb12 col-8">
                            {/* <h4 className={ Spirit.h2 + `col-12 pb2 bb b--whitegrey mb5` }>{ tagName }</h4> */}
                            { posts.map(({ node }) => (
                                <FAQ key={ node.id } post={ node } />
                            )) }
                        </div>
                        <div className="col-4 pa15 pt10 mt11">
                            <FAQTagList location={ this.props.location } />
                        </div>
                    </div>
                </Layout>
            </>
        )
    }
}

FAQTags.propTypes = {
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
        tagLink: PropTypes.string.isRequired,
    }).isRequired,
}

export default FAQTags

export const tagsQuery = graphql`
    query($tagSlug: String!) {
        site {
            ...SiteMetaFields
        }
        allGhostPost(
            sort: { order: DESC, fields: [published_at] },
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
