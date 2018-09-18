import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layouts/default'
import Authors from '../components/authors'

const Tutorial = ({ data }) => {
    const post = data.ghostPost
    return (
        <Layout>
            <div className="center content-max-width">
                <time dateTime={post.publishedAt} className="db mb10">{post.publishedAt}</time>
                <h1 className="f-headline fw3 bn ma0 mb10">{post.title}</h1>
                
                <section className="post-full-content" dangerouslySetInnerHTML={{ __html: post.html }} />

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
