import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

import Layout from '../components/layouts/default'

const Integration = ({ data }) => {
    const post = data.ghostPost
    return (
        <Layout>
            <div className="mw10 center">
                <Link to="/integrations/">Integrations</Link> / {post.title}
                <h1>{post.title}</h1>
                <section className="post-wrapper" dangerouslySetInnerHTML={{ __html: post.html }} />
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
          plaintext
          html
          publishedAt: published_at(formatString: "DD MMMM, YYYY")
          primaryTag:primary_tag{
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
