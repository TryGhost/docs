import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layouts/default'

const DocTemplate = ({ data }) => {
    const post = data.markdownRemark
    return (
        <Layout title={ post.frontmatter.title }>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
