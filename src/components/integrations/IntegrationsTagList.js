import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { getTagsforPostCollection } from '../../utils/tag-utils'

class IntegrationsTagList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const activeLocation = this.props.searchActive ? `/integrations/` : this.props.location.pathname
        const posts = this.props.data.allGhostPost.edges
        const tags = getTagsforPostCollection(posts, `integrations`)

        tags.unshift({
            name: `All Integrations`,
            slug: `all-integrations`,
            link: `/integrations/`,
        })

        return (
            <>
                <h3 className="ma0 mb2" data-cy="filter">Filter by</h3>
                    { tags.map((tag, i) => (
                        <Link
                            key={i}
                            to={tag.link}
                            className={(activeLocation === tag.link ? `blue fw6` : `midgrey`) + ` link pa2 pl0` }
                            data-cy={`${tag.slug}-filter`}
                        >
                            { tag.name }
                        </Link>
                    )) }

            </>
        )
    }
}

IntegrationsTagList.propTypes = {
    location: PropTypes.object.isRequired,
    searchActive: PropTypes.bool.isRequired,
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
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
