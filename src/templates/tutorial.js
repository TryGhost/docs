import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layouts/default'
import Authors from '../components/authors'
import { SpiritStyles } from '../components/spirit-styles';

const Tutorial = ({ data }) => {
    const post = data.ghostPost
    return (
        <Layout title="Home" headerDividerStyle="hairline" bodyClass="bg-white">
            <div className="center mw-m pt20">
                <time dateTime={ post.publishedAt } className="db mb2 midgrey">{ post.publishedAt }</time>
                <h1 className={ SpiritStyles.headline }>{ post.title }</h1>
                <section className="post-content" dangerouslySetInnerHTML={ { __html: post.html } } />
                <Authors authors={ post.authors } />
            </div>
        </Layout>
    )
}

Tutorial.propTypes = {
    data: PropTypes.object,
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
