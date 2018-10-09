import { graphql } from 'gatsby'

export const markdownFields = graphql`
  fragment MarkdownFields on MarkdownRemark {
    frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        path
        meta_title
        meta_description
        image
        next {
            url
            title
            description
        }
        sidebar
        toc
        keywords
    }
    html
    fields {
        slug
    }
  }
`

export const ghostPostFields = graphql`
  fragment GhostPostFields on GhostPost {
    # Main fields
    title
    slug
    featured
    feature_image

    # Dates
    createdAt: created_at(formatString: "DD MMMM, YYYY")
    publishedAt: published_at(formatString: "DD MMMM, YYYY")
    updatedAt: updated_at(formatString: "DD MMMM, YYYY")

    # SEO
    custom_excerpt
    meta_title
    meta_description
    og_description
    og_image
    og_title
    twitter_description
    twitter_image
    twitter_title

    # Authors
    author
    authors {
        name
        slug
        bio
        # email
        profile_image
        twitter
        facebook
        website
    }
    primary_author {
        name
        slug
        bio
        # email
        profile_image
        twitter
        facebook
        website
    }

    # Tags
    primary_tag {
        name
        slug
        description
        feature_image
        meta_description
        meta_title
        visibility
    }
    tags {
        name
        slug
        description
        feature_image
        meta_description
        meta_title
        visibility
    }

    # Content
    plaintext
    html

    # Additional fields
    custom_template
    url
    visibility
    locale
    uuid
    status
    page
    codeinjection_foot
    codeinjection_head
    comment_id
  }
`
