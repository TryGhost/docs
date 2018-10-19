import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layouts/default'
import { Spirit } from '../components/spirit-styles'
import MetaData from '../components/layouts/partials/meta-data'

class IntegrationsPage extends React.Component {
    render() {
        const posts = this.props.data.allGhostPost.edges
        console.log(`TCL: IntegrationsPage -> render -> posts`, posts)
        const { tagName, tagLink } = this.props.pageContext

        // TODO: Replace with real title and description for FAQPage
        const title = `Tutorials - ${tagName} - ${this.props.data.site.siteMetadata.title}`
        const description = ``
        const imageUrl = ``

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
                <Layout title="Integrations" headerDividerStyle="shadow" >
                    <div className="bg-integrations-header-image">
                        <div className={Spirit.page.xl + `pt-vw7 pt-vw1-ns pb-vw1`}>
                            <div className="pa-vw4 tc">
                                <h1 className={Spirit.h4 + `gh-integration-header-shadow pl10`}>
                                    <Link to="/integrations/" className={`link dim white fw3`}>Ghost Integrations</Link>
                                    <span className="white titleslash-white pl4 ml4 relative">
                                        <Link to={tagLink} className="link dim white">{tagName}</Link>
                                    </span>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className={Spirit.page.xl + `pt10`}>
                        <div className="flex br4">
                            <div className="gh-integrations w-100">
                                {posts.map(({ node }) => (
                                        <>
                                            {/* TODO: make an integrations card? */}
                                            <Link
                                                className="gh-integration-card flex flex-column justify-center items-center w-100 h30 pa3 tc link darkgrey bg-white shadow-2 br5"
                                                to={`/integrations/${node.slug}`}
                                                key={node.id}
                                            >
                                                <div className="flex justify-center items-center h10 w13 mt1 mb3">
                                                    <img className="w-100 h-100" style={{ objectFit: `contain` }} src={node.feature_image} alt={node.title} />
                                                </div>
                                                <div className="f8">{node.title}</div>
                                            </Link>
                                        </>
                                ))}
                            </div>
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

export default IntegrationsPage

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
