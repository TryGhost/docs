import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'

import { Layout } from '../../components/common/layout'
import { PostCard } from '../../components/tutorials'
import { Spirit } from '../../styles/spirit-styles'
import { MetaData, getMetaImageUrls } from '../../components/common/meta'

class TutorialsTags extends React.Component {
    render() {
        const posts = this.props.data.allGhostPost.edges
        const { tagURL, tagName, tagDescription, tagImage, tagMetaTitle, tagMetaDescription, section } = this.props.pageContext

        const title = tagMetaTitle || `Tutorials - ${tagName} - Ghost`
        const description = tagMetaDescription || tagDescription || ``
        const imageUrl = tagImage || getMetaImageUrls(section)

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
                <Layout title="Tutorials" headerDividerStyle="shadow">
                    <div className="bg-tutorials">
                        <div className={ Spirit.page.xl + `pt-vw7 pt-vw1-ns pb-vw1 white` }>
                            <h1 className={Spirit.h4 + `gh-integration-header-shadow pl10`}>
                                <Link to="/tutorials/" className={`link dim white fw3`}>Tutorials</Link>
                                <span className="white titleslash-white pl4 ml4 relative">
                                    <Link to={tagURL} className="link dim white">{tagName}</Link>
                                </span>
                            </h1>
                        </div>
                    </div>
                    <div className={ Spirit.page.xl + `mt-vw5 mt-vw2-ns` }>
                        <section className="grid-12 gutter-32">
                            {posts.map(({ node }) => (
                                <PostCard key={node.id} post={node} className="col-4" />
                            ))}
                        </section>
                    </div>
                </Layout>
            </>
        )
    }
}

TutorialsTags.propTypes = {
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
        tagURL: PropTypes.string.isRequired,
        tagDescription: PropTypes.string,
        tagMetaDescription: PropTypes.string,
        tagMetaTitle: PropTypes.string,
        tagImage: PropTypes.string,
    }).isRequired,
}

export default TutorialsTags

export const tagsQuery = graphql`
    query($tagSlug: String!) {
        site {
            ...SiteMetaFields
        }
        allGhostPost(
            sort: { order: DESC, fields: [published_at] },
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
