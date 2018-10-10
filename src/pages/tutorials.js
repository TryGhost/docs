import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layouts/default'
import PostCard from '../components/postcard'
import { Spirit } from '../components/spirit-styles'
import MetaData from '../components/layouts/partials/meta-data'
// import SectionHeading from '../components/layouts/partials/section-heading'

class TutorialsPage extends React.Component {
    render() {
        // TODO: Replace with real title and description for FAQPage
        const title = `Tutorials`
        const description = ``

        const posts = this.props.data.allGhostPost.edges

        return (
            <>
                <MetaData
                    data={this.props.data}
                    location={this.props.location}
                    type="website"
                    title={title || this.props.data.site.siteMetadata.title}
                    description={description || this.props.data.site.siteMetadata.description}
                />
                <Layout title="Tutorials" headerDividerStyle="shadow">
                    <div className="bg-tutorials">
                        <div className={ Spirit.page.xl + `pt-vw7 pt-vw1-ns pb-vw1 white` }>
                            <h1 className={ Spirit.h4 + `gh-integration-header-shadow` }>Tutorials</h1>
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

TutorialsPage.propTypes = {
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

export default TutorialsPage

export const pageQuery = graphql`
  query GhostTutorialsQuery {
    site {
        ...SiteMetaFields
    }
    allGhostPost(
        sort: { order: DESC, fields: [published_at] },
        limit: 50,
        filter: {tags: {elemMatch: {slug: {eq: "hash-tutorial"}}}}
    ) {
      edges {
        node {
          ...GhostPostListFields
        }
      }
    }
  }
`
