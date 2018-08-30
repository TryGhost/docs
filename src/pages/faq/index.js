import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Container from '../../components/Container';
import PostCard from '../../components/PostCard';

const Main = styled.main`
    position: relative;
    flex-grow: 1;
`

const PostFeed = styled.div`
    display: flex;
    position: relative;
    flex-wrap: wrap;
    margin: 0 -20px;
    padding: 40px 0 0;
`

export default ({ data }) => {
    const posts = data.allGhostPost.edges;
    return (
        <Container>
            <header>
                <h1>Gatsby + Ghost Demo</h1>
            </header>
            <Main>
                <PostFeed>
                    {posts.map(({ node }) => (
                        <PostCard key={node.id} post={node} />
                    ))}
                </PostFeed>
            </Main>
        </Container>
    );
};

export const pageQuery = graphql`
  query GhostPostsQuery {
    allGhostPost(sort: { order: DESC, fields: [published_at] }, limit: 50) {
      edges {
        node {
          slug
          title
          custom_excerpt
          plaintext
          publishedAt: published_at(formatString: "DD MMMM, YYYY"),
          primaryTag: primary_tag {
            name
            slug
          }
          authors {
            name slug
          }
        }
      }
    }
  }
`;
