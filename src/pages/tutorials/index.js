import React from 'react';
import { graphql } from 'gatsby';

import Container from '../../components/Container';
import PostCard from '../../components/PostCard';

export default ({ data }) => {
    const posts = data.allGhostPost.edges;
    return (
        <Container>
            <header>
                <h1>Gatsby + Ghost Demo</h1>
            </header>
            <div>
                <div>
                    {posts.map(({ node }) => (
                        <PostCard key={node.id} post={node} />
                    ))}
                </div>
            </div>
        </Container>
    );
};

export const pageQuery = graphql`
  query GhostTutorialsQuery {
    allGhostPost(
        sort: { order: DESC, fields: [published_at] },
        limit: 50,
        filter: {primary_tag: {slug: {eq: "ghost-pro"}}}
    ) {
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
