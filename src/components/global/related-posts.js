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
                        <Link to={node.url} className="flex items-center link blue hover-underline-blue lh-title" >
                            {node.feature_image ?
                                <>
                                    <div className="flex justify-center items-center h10 w13 mt1 mb3">
                                        <img className="w-100 h-100" style={{ objectFit: `contain` }} src={node.feature_image} alt={node.title} />
                                    </div>
                                </> :
                                null
                            }
                            <div className="f8">{node.title}</div>
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
