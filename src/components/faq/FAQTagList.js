import React from 'react'
import PropTypes from 'prop-types'
import { Link, StaticQuery, graphql } from 'gatsby'

import { Spirit } from '../../styles/spirit-styles'
import { getTagsforPostCollection } from '../../utils/getTagsforPostCollection'

const FAQTagList = ({ data, location }) => {
    const tags = getTagsforPostCollection(data.allGhostPost.edges, `faq`)

    // Add a default tag for "All" at first place, which
    // links back to the general faq page
    tags.unshift({
        name: `All`,
        slug: `all`,
        link: `/faq/`,
    })

    return (
            <>
                <h4 className={`${Spirit.h5} midgrey` }>FAQ topics</h4>
                <div className="mt4">
                    {tags.map((tag, i) => {
                        const dynamicClass = location.pathname === tag.link ? `bg-faq-color white fw5` : `bg-whitegrey middarkgrey hover-bg-lightgrey-l2`

                        return (
                            <Link
                                to={tag.link}
                                className={`${dynamicClass} dib pa2 pl3 pr3 br3 mb3 mr3 f8 link`}
                                key={i}
                                data-cy={`${tag.slug}-filter`}
                            >
                                {tag.name}
                            </Link>
                        )
                    })}
                </div>
            </>
    )
}

FAQTagList.propTypes = {
    location: PropTypes.object.isRequired,
    data: PropTypes.shape({
        allGhostPost: PropTypes.shape({
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    post: PropTypes.shape({
                        tag: PropTypes.arrayOf(
                            PropTypes.shape({
                                name: PropTypes.string,
                                slug: PropTypes.string,
                            })
                        ),
                    }),
                }).isRequired,
            ).isRequired,
        }).isRequired,
    }).isRequired,
}

const FAQTagsQuery = props => (
    <StaticQuery
        query={graphql`
            query GhostFAQTagsQuery {
                allGhostPost(
                    sort: { order: ASC, fields: [published_at] },
                    limit: 100,
                    filter: {tags: {elemMatch: {slug: {eq: "hash-faq"}}}}
                ) {
                edges {
                    node {
                    ...GhostTagListFields
                    }
                }
                }
            }
        `}
        render={data => <FAQTagList data={data} {...props} />}
    />
)
export default FAQTagsQuery
