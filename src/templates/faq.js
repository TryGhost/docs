import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'

import Layout from '../components/layouts/default'

const FAQ = ({ data }) => {
    const post = data.ghostPost
    return (
        <Layout>
            <div className="mw-xl center">
                <Link to="/faq/">FAQ</Link> / {post.title} — Updated: <time dateTime={post.updatedAt}>{post.updatedAt}</time>
                <h1 className="title">{post.title}</h1>
                <section className="post-wrapper" dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    )
}

FAQ.propTypes = {
    data: PropTypes.object.isRequired,
}

export default FAQ

export const articleQuery = graphql`
    query FAQQuery($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
          title
          custom_excerpt
          plaintext
          html
          updatedAt: updated_at(formatString: "MMMM, YYYY")
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
