import React from 'react'
import PropTypes from 'prop-types'
import { Link, StaticQuery, graphql } from 'gatsby'

import { getTagsforPostCollection } from '../../utils/getTagsforPostCollection'

const IntegrationsTagList = ({ location, searchActive, data }) => {
    // When the search is active, we set the "All integrations" link as active and
    // overwrite the real active link as long as the search is active
    const activeLocation = searchActive ? `/integrations/` : location.pathname
    const tags = getTagsforPostCollection(data.allGhostPost.edges, `integrations`)

    // Add a default tag for "All Integrations" at first place, which
    // links back to the general integrations page
    tags.unshift({
        name: `All Integrations`,
        slug: `all-integrations`,
        link: `/integrations/`,
    })

    return (
        <>
            <h3 className="ma0 mb2" data-cy="filter">Filter by</h3>
            {tags.map((tag, i) => {
                const dynamicClass = activeLocation === tag.link ? `blue fw6` : `midgrey`

                return (
                    <Link
                        to={tag.link}
                        className={`${dynamicClass} link pa2 pl0`}
                        key={i}
                        data-cy={`${tag.slug}-filter`}
                    >
                        {tag.name}
                    </Link>
                )
            })}
        </>
    )
}

IntegrationsTagList.propTypes = {
    location: PropTypes.object.isRequired,
    searchActive: PropTypes.bool.isRequired,
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

const IntegrationTagsQuery = props => (
    <StaticQuery
        query={graphql`
            query GhostIntegrationsTagsQuery {
                allGhostPost(
                    sort: { order: ASC, fields: [published_at] },
                    limit: 100,
                    filter: {tags: {elemMatch: {slug: {eq: "hash-integration"}}}}
                ) {
                edges {
                    node {
                    ...GhostTagListFields
                    }
                }
                }
            }
        `}
        render={data => <IntegrationsTagList data={data} {...props} />}
    />
)
export default IntegrationTagsQuery
