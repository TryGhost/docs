import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layouts/default'
import PostCard from '../components/postcard'
import { Spirit } from '../components/spirit-styles'
// import SectionHeading from '../components/layouts/partials/section-heading'

const TutorialsPage = ({ data }) => {
    const posts = data.allGhostPost.edges
    return (
        <Layout title="Tutorials" headerDividerStyle="shadow">
            <div className="bg-tutorials">
                <div className={ Spirit.page.xl + `pt-vw7 pt-vw2-ns pb-vw2 white` }>
                    <h1 className={ Spirit.h3 + `gh-integration-header-shadow` }>Tutorials</h1>
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
    )
}

TutorialsPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default TutorialsPage

export const pageQuery = graphql`
  query GhostTutorialsQuery {
    allGhostPost(
        sort: { order: DESC, fields: [published_at] },
        limit: 50,
        filter: {tags: {elemMatch: {slug: {eq: "hash-tutorial"}}}}
    ) {
      edges {
        node {
          id
          slug
          title
          custom_excerpt
          plaintext
          featured
          publishedAt: published_at(formatString: "DD MMMM, YYYY"),
          tags {
            name
            slug
          }
          authors {
            name slug
          }
        }
      }
    }
  }
`
