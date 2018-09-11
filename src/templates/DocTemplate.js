import Container from '../components/Container'
import Layout from '../components/layout'
import Link from 'gatsby-link'
import Post from '../components/Post'

import PropTypes from 'prop-types'
import React from 'react'

import { graphql } from 'gatsby'

const DocTemplate = ({ data }) => {
    const post = data.markdownRemark
    return (
        <Layout>
            <Container>
                <Link to="/">&lt; Home</Link>
                <header>
                    <h1>{post.frontmatter.title}</h1>
                </header>

                <Post>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </Post>
            </Container>
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
