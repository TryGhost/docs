import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

import Layout from '../components/layouts/default'

import integrationIcon from '../images/integration-icon.png'
import { Spirit } from '../components/spirit-styles'

const Integration = ({ data }) => {
    const post = data.ghostPost
    return (
        <Layout>
            <div className="pa-vw4 tc">
                <h1 className="ma0 pa0 f-headline">{post.title} + Ghost</h1>
                <p className="ma0 mt2 f4 midgrey">How to use Ghost and {post.title} together</p>
                <div className="flex items-center justify-center mt5">
                    <div className="flex-shrink-0 flex justify-center items-center h30 w30 pa10 bg-white br-100 shadow-3 nl2 nr2">
                        <img className="mw100" src={post.feature_image} alt={post.title} />
                    </div>
                    <div className="flex-shrink-0 flex justify-center items-center h30 w30 pa11 bg-white br-100 shadow-3 nl2 nr2">
                        <img className="mw100" src={integrationIcon} alt="Ghost" />
                    </div>
                </div>
            </div>
            <div className={ Spirit.page.l + `flex` }>
                <div className="w-100 pa15 pt13 bg-white br4 shadow-1">
                    <div className="mb5 f8">
                        <Link className="link midgrey" to="/integrations/">Integrations</Link>
                        <span className="mr1 ml1 f8 midgrey">/</span>
                        <span className="darkgrey fw5">{post.title}</span>
                    </div>
                    <section className="post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
            </div>
        </Layout>
    )
}

Integration.propTypes = {
    data: PropTypes.object.isRequired,
}

export default Integration

export const articleQuery = graphql`
    query IntegrationQuery($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
          title
          custom_excerpt
          feature_image
          plaintext
          html
          publishedAt: published_at(formatString: "DD MMMM, YYYY")
          tags {
            name
            slug
          }
          authors {
             name
             slug

          }
        }
    }
`
