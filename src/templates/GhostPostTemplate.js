import AuthorList from '../components/AuthorList'
import Container from '../components/Container'
import Link from 'gatsby-link'
import Post from '../components/Post'

import PropTypes from 'prop-types'
import React from 'react'

import { graphql } from 'gatsby'

const GhostPostTemplate = ({ data }) => {
    const post = data.ghostPost
    return (
        <Container>
            <Link to="/">&lt; Home</Link>
            <header>
                <section>
                    <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                    {post.primaryTag ? <div><span>/</span> <Link to="/tag/">{post.primaryTag.name}</Link></div> : null }
                </section>
                <h1>{post.title}</h1>
            </header>

            <Post>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </Post>

            <AuthorList authors={post.authors}/>
        </Container>
    )
}

GhostPostTemplate.propTypes = {
    data: PropTypes.object.isRequired,
}

export default GhostPostTemplate

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
