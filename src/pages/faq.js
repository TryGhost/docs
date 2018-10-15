import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layouts/default'
import FAQ from '../components/faq'
import { Spirit } from '../components/spirit-styles'
import MetaData from '../components/layouts/partials/meta-data'
import Box from '../components/layouts/partials/box'

class FAQPage extends React.Component {
    render() {
        // TODO: Replace with real title and description for FAQPage
        const title = `FAQ - Frequently Asked Questions`
        const description = ``
        const imageUrl = `https://unsplash.it/400/300/?random?BoldMage`

        const posts = this.props.data.allGhostPost.edges

        return (
            <>
                <MetaData
                    data={ this.props.data }
                    location={ this.props.location }
                    type="website"
                    title={ title || this.props.data.site.siteMetadata.title }
                    description={ description || this.props.data.site.siteMetadata.description }
                    image={ imageUrl }
                />
                <Layout title="FAQ" headerDividerStyle="shadow">
                    <div className="bg-faq bb b--whitegrey">
                        <div className={ Spirit.page.xl + `pt-vw7 pt-vw1-ns pb-vw1` }>
                            <h1 className={ Spirit.h4 + `pl10 white`}>Frequently Asked Questions</h1>
                        </div>
                    </div>
                    <div className={ Spirit.page.xl }>
                        <div className="br4 br--bottom shadow-1 bg-white pa10 center">
                            <div className="mw-content pl15 pr15 center">
                                <h4 className={ Spirit.h2 + `col-12 pb2 bb b--whitegrey mb5` }>Ghost(Pro)</h4>
                                { posts.map(({ node }) => (
                                    <FAQ key={ node.id } post={ node } />
                                )) }
                            </div>
                            <div className="mw-content pl15 pr15 center mt20">
                                <h4 className={ Spirit.h2 + `col-12 pb2 bb b--whitegrey mb5` }>Errors</h4>
                                { posts.map(({ node }) => (
                                    <FAQ key={ node.id } post={ node } />
                                )) }
                            </div>
                        </div>
                    </div>
                </Layout>
            </>
        )
    }
}

FAQPage.propTypes = {
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

export default FAQPage

export const pageQuery = graphql`
  query GhostFAQQuery {
    site {
        ...SiteMetaFields
    }
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
