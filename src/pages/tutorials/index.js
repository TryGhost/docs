import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../../components/layouts/default'
import PostCard from '../../components/postcard'
import { SpiritStyles } from '../../components/spirit-styles'
import SectionHeading from '../../components/layouts/partials/section-heading'

const TutorialsPage = ({ data }) => {
    const posts = data.allGhostPost.edges
    return (
        <Layout title="Tutorials" headerDividerStyle="shadow">
            <div className={ SpiritStyles.page.xl }>
                <SectionHeading title="Tutorials" subtitle="Here comes your subtitle" type="blog" />

                <section className="flex space-between nl5 nr5 flex-wrap">
                    {posts.map(({ node }) => (
                        <PostCard key={node.id} post={node} />
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
