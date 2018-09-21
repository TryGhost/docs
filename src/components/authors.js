import React from 'react'
import PropTypes from 'prop-types'
// import Link from 'gatsby-link'

const Authors = (props) => {
    const { authors } = props
    return (
        <ul className="list pa0 ma0">{authors.map(author => (
            <li key={author.name} className="midgrey f8">
                {/* <Link to="/author/{author.slug}/"> */}
                {author.name}
                {/* </Link> */}
            </li>
        ))}</ul>
    )
}

Authors.propTypes = {
    authors: PropTypes.array.isRequired,
}

export default Authors
