const allGhostPosts = function allGhostPosts(tag) {
    if (!tag) {
        throw new Error(`Please provide a tag property`)
    }

    return (`
          {
            allGhostPost(
                sort: {order: ASC, fields: published_at},
                filter: {tags: {elemMatch: {slug: {eq: "${tag}"}}},
                slug: {ne: "data-schema"}}
            ) {
              edges {
                node {
                  slug
                  title
                  url
                  published_at
                  tags {
                      slug
                  }
                }
              }
            }
          }
        `)
}

const allMarkdownPosts = function allMarkdownposts() {
    return (`
        {
            allMarkdownRemark(
                sort: {order: ASC, fields: [frontmatter___date]},
                filter: {fields: {slug: {ne: "/data-schema/"}}}
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
        `)
}

module.exports = {
    allGhostPosts: allGhostPosts,
    allMarkdownPosts: allMarkdownPosts,
}
