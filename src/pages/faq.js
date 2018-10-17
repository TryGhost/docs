import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layouts/default'
import FAQ from '../components/faq'
import { Spirit } from '../components/spirit-styles'
import MetaData from '../components/layouts/partials/meta-data'

class FAQPage extends React.Component {
    render() {
        // TODO: Replace with real title and description for FAQPage
        const title = `FAQ - Ghost Docs`
        const description = `Answers to our most popular questions: billing, hosting, troubleshooting and more.`
        const imageUrl = `https://unsplash.com/photos/RPT3AjdXlZc`

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
                            <h1 className={ Spirit.h4 + `white`}>Frequently Asked Questions</h1>
                        </div>
                    </div>
                    <div className={ Spirit.page.xl + `grid-12`}>
                        <div className="bg-white shadow-2 br4 mt10 pa15 pt10 pb12 col-8">
                            { posts.map(({ node }) => (
                                <FAQ key={ node.id } post={ node } />
                            )) }
                        </div>
                        <div className="col-4 pa15 pt10 mt10">
                            {/* <h4 className={ Spirit.h4 + `mb4` }>Filter</h4> */}
                            {/* <Link to="/faq/" className="dib ba bg-midlightgrey white pa1 pl2 pr2 br3 mr2 mb2">General</Link>
                            <span className="dib ba bg-midlightgrey white pa1 pl2 pr2 br3 mr2 mb2">Errors</span>
                            <span className="dib ba bg-midlightgrey white pa1 pl2 pr2 br3 mr2 mb2">Ghost(Pro)</span>
                            <span className="dib ba bg-midlightgrey white pa1 pl2 pr2 br3 mr2 mb2">Self-hosted</span>
                            <span className="dib ba bg-midlightgrey white pa1 pl2 pr2 br3 mr2 mb2">Themes</span> */}
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
