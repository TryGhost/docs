import { graphql } from 'gatsby'

export const siteMetaFields = graphql`
    fragment SiteMetaFields on Site {
        siteMetadata {
            siteUrl
            title
            description
        }
    }
`

export const markdownFields = graphql`
    fragment MarkdownFields on MarkdownRemark {
        frontmatter {
            title
            date
            date_pretty: date(formatString: "DD MMMM, YYYY")
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
        timeToRead
        excerpt
        fileAbsolutePath
    }
`

// Used for single pages
export const ghostPostFields = graphql`
    fragment GhostPostFields on GhostPost {
        # Main fields
        title
        slug
        featured
        feature_image

        # Dates formatted
        created_at_pretty: created_at(formatString: "DD MMMM, YYYY")
        published_at_pretty: published_at(formatString: "DD MMMM, YYYY")
        updated_at_pretty: updated_at(formatString: "DD MMMM, YYYY")

        # Dates unformatted
        created_at
        published_at
        updated_at

        # SEO
        excerpt
        meta_title
        meta_description
        og_description
        og_image
        og_title
        twitter_description
        twitter_image
        twitter_title

        # Authors
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
        uuid
        page
        codeinjection_foot
        codeinjection_head
        comment_id
    }
`

// Used for index pages
export const ghostPostListFields = graphql`
    fragment GhostPostListFields on GhostPost {
        id
        slug
        title
        excerpt
        feature_image
        plaintext
        featured

        # Dates formatted
        created_at_pretty: created_at(formatString: "DD MMMM, YYYY")
        published_at_pretty: published_at(formatString: "DD MMMM, YYYY")
        updated_at_pretty: updated_at(formatString: "DD MMMM, YYYY")

        # Dates unformatted
        created_at
        published_at
        updated_at

        tags {
          name
          slug
          visibility
        }
        authors {
          name
          slug
        }
    }
`

// Used for tags archive pages
export const ghostTagListFields = graphql`
    fragment GhostTagListFields on GhostPost {
        tags {
          name
          slug
          visibility
        }
    }
`
