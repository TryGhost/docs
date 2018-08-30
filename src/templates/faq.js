import React from "react";
import Link from "gatsby-link";
import Container from '../components/Container';
import { graphql } from 'gatsby';

import Post from '../components/Post';

import AuthorList from '../components/AuthorList';

export default ({data}) => {
    const post = data.ghostPost;
    console.log(post);
    return (
        <Container>
            <Link to="/faq/">&lt; Home</Link>
              <header>
                <section>
                    <time datetime={post.publishedAt}>{post.publishedAt}</time>
                    {post.primaryTag ? <div><span>/</span> <Link to="/tag/">{post.primaryTag.name}</Link></div>: null }
                </section>
                <h1>{post.title}</h1>
            </header>


            <Post>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
             </Post>

            <AuthorList authors={post.authors}/>
        </Container>
    );
};

export const articleQuery = graphql`
    query PostQuery($slug: String!) {
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
