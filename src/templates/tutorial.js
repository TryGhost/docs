import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layouts/default'
import Authors from '../components/authors'

const Tutorial = ({ data }) => {
    const post = data.ghostPost
    return (
        <Layout>
            <div className="post-full-content">
                <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                <h1 className="title">{post.title}</h1>
                <section className="post-wrapper" dangerouslySetInnerHTML={{ __html: post.html }} />

                <Authors authors={post.authors} />
            </div>
        </Layout>
    )
}

Tutorial.propTypes = {
    data: PropTypes.object.isRequired,
}

export default Tutorial

export const articleQuery = graphql`
    query TutorialQuery($slug: String!) {
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
