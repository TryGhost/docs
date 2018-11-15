import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { Spirit } from '../spirit-styles'
import PropTypes from 'prop-types'
import { getTagsforPostCollection } from '../../utils/tag-utils'

class FAQTagList extends React.Component {
    render() {
        const posts = this.props.data.allGhostPost.edges
        const tags = getTagsforPostCollection(posts, `faq`)

        tags.unshift({
            name: `All`,
            slug: `all`,
            link: `/faq/`,
        })

        return (
            <>
                <h4 className={ Spirit.h5 + `midgrey` }>FAQ topics</h4>
                <div className="mt4">
                    { tags.map((tag, i) => (
                        <Link key={ i } to={ tag.link } className={ (this.props.location.pathname === tag.link ? `bg-faq-color white fw5` : `bg-whitegrey middarkgrey hover-bg-lightgrey-l2`) + ` dib pa2 pl3 pr3 br3 mb3 mr3 f8  link` }>{ tag.name }</Link>
                    )) }
                </div>
            </>
        )
    }
}

FAQTagList.propTypes = {
    location: PropTypes.object.isRequired,
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
}

const props = props => (
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
export default props
