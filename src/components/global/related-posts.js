import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

class RelatedPosts extends React.Component {
    render() {
        const { relatedPosts } = this.props

        return (
            <ul className="pa0 ma0 mb8 list">
                {relatedPosts.map(({ node }, i) => (
                    <li className="mb4 f8" key={i}>
                        <Link to={ node.url } className="link blue hover-underline-blue lh-title" >{node.title}</Link>
                    </li>
                ))}
            </ul>
        )
    }
}

RelatedPosts.propTypes = {
    relatedPosts: PropTypes.arrayOf(
        PropTypes.shape({
            node: PropTypes.shape({
                title: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired,
                feature_image: PropTypes.string,
            }).isRequired,
        })).isRequired,
}

export default RelatedPosts
