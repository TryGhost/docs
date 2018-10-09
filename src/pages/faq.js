import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layouts/default'
import FAQ from '../components/faq'
import { Spirit } from '../components/spirit-styles'

const FAQPage = ({ data }) => {
    const posts = data.allGhostPost.edges
    return (
        <Layout title="FAQ" headerDividerStyle="shadow" bodyClass="bg-white">
            <div className="gh-bg-home bb b--whitegrey">
                <div className={ Spirit.page.xl + `pt-vw7 pt-vw1-ns pb-vw1` }>
                    <h1 className={ Spirit.h4 + ``}>Frequently Asked Questions</h1>
                </div>
            </div>
            <div className={ Spirit.page.xl + `mt-vw6 mt-vw2-ns`}>
                <div className="grid-12 gutter-40">
                    {posts.map(({ node }) => (
                        <FAQ key={node.id} post={node} />
                    ))}
                </div>
            </div>
        </Layout>
    )
}

FAQPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default FAQPage

export const pageQuery = graphql`
  query GhostFAQQuery {
    allGhostPost(
        sort: { order: DESC, fields: [published_at] },
        limit: 10,
        filter: {tags: {elemMatch: {slug: {eq: "hash-faq"}}}}
    ) {
      edges {
        node {
          ...GhostPostListFields
        }
      }
    }
  }
`
