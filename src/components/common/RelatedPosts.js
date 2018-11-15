import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

class RelatedPosts extends React.Component {
    render() {
        const { relatedPosts, showImages } = this.props

        return (
            <ul className="pa0 ma0 mb8 list">
                {relatedPosts.map(({ node }, i) => (
                    <li className="ma0" key={i}>
                        <Link to={node.url} className="flex items-center link darkgrey hover-blue pa2 pl0" >
                            {showImages && node.feature_image ?
                                <>
                                    <div className="flex justify-center items-center h6 w8 mr2">
                                        <img className="w-100 h-100" style={{ objectFit: `contain` }} src={`https://res.cloudinary.com/tryghost/image/fetch/w_60,h_50,c_fit/` + node.feature_image} alt={node.title} />
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

RelatedPosts.defaultProps = {
    showImages: false,
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
    showImages: PropTypes.bool,
}

export default RelatedPosts
