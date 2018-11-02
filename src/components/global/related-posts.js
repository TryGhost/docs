import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

class RelatedPosts extends React.Component {
    render() {
        const { relatedPosts } = this.props

        return (
            <ul className="pa0 ma0 mb8 list">
                {relatedPosts.map(({ node }, i) => (
                    <li className="ma0" key={i}>
                        <Link to={node.url} className="flex items-center link darkgrey hover-blue pa2 pl0" >
                            <div className="flex justify-center items-center h6 w8 mr2">
                                <img className="w-100 h-100" style={{ objectFit: `contain` }} src={node.feature_image} alt={node.title} />
                            </div>
                            <div className="f7">{node.title}</div>
                        </Link>
                    </li>
                ))}
            </ul>
        )
    }
}

RelatedPosts.propTypes = {
    relatedPosts: PropTypes.array.isRequired,
}

export default RelatedPosts
