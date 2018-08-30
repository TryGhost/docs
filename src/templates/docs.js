import React from "react";
import Link from "gatsby-link";
import Container from '../components/Container';
import { graphql } from 'gatsby';

import Post from '../components/Post';

import AuthorList from '../components/AuthorList';

export default ({data}) => {
    const post = data.markdownRemark;
    return (
        <Container>
            <Link to="/">&lt; Home</Link>
              <header>
                <h1>{post.frontmatter.title}</h1>
            </header>


            <Post>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
             </Post>
        </Container>
    );
};

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
