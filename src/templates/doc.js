import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layouts/default'

const DocTemplate = ({ data }) => {
    const post = data.markdownRemark
    return (
        <Layout title={ post.frontmatter.title }>
            <div className="post-full-content">
                <h1 className="title">{post.frontmatter.title}</h1>
                <section className="post-wrapper" dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    )
}

DocTemplate.propTypes = {
    data: PropTypes.object.isRequired,
}

export default DocTemplate

export const articleQuery = graphql`
    query MDDocsQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
            }
            html
        }
    }
`
