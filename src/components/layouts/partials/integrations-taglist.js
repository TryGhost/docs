import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { getTagsforPostCollection } from '../../../utils/tag-utils'

class IntegrationsTagList extends React.Component {
    constructor(props) {
        super(props)

        this.handleFilter = this.handleFilter.bind(this)
    }

    handleFilter(e) {
        let tagSlug = /(?:\/*?integrations\/)(\S*)(?:\/{1})/.exec(e.target.href)

        tagSlug = tagSlug && tagSlug.length > 1 ? tagSlug[1] : ``

        this.props.setFilter(tagSlug)
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
                <h3 className="ma0 mb2">Filter by</h3>
                    { tags.map((tag, i) => (
                        <Link
                            key={i}
                            to={tag.link}
                            className={(activeLocation === tag.link ? `blue fw6` : `midgrey`) + ` link pa2 pl0` }
                            onClick={this.handleFilter}
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
    setFilter: PropTypes.func.isRequired,
    searchActive: PropTypes.bool.isRequired,
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
}

const props = props => (
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
export default props
