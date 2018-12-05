import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Spirit } from '../styles/spirit-styles'
import { Layout } from '../components/common/layout'
import { TutorialCard } from '../components/tutorials'
import { MetaData, getMetaImageUrls } from '../components/common/meta'

const TutorialsPage = ({ data, location }) => {
    // Add meta title and description for this page here to overwrite the site meta data as set in the config
    const title = `Ghost Tutorials - Practical guides for custom publications`
    const description = `Customise your Ghost publication to suit your needs with full tutorial guides for a variety of use-cases. Config, themes, dynamic routing and more 👉`
    const imageUrl = getMetaImageUrls(`tutorials`)

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
            <Layout headerDividerStyle="shadow">
                <div className="bg-tutorials">
                    <div className={`${Spirit.page.xl} pt-vw7 pt-vw1-ns pb-vw1 white`}>
                        <h1 className={`${Spirit.h4} gh-integration-header-shadow`}>Tutorials</h1>
                    </div>
                </div>
                <div className={`${Spirit.page.xl} mt-vw5 mt-vw2-ns`}>
                    <section className="grid-12 gutter-row-20 gutter-20-ns gutter-36-l">
                        {posts.map(({ node }) => (
                            <TutorialCard key={node.id} post={node} className="col-12 col-6-ns col-4-l" section="tutorials" />
                        ))}
                    </section>
                </div>
            </Layout>
        </>
    )
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
