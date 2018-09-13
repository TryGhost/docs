import React from 'react'
import PropTypes from 'prop-types'
// import Link from 'gatsby-link'

const Authors = (props) => {
    const { authors } = props
    return (
        <ul>{authors.map(author => (
            <li key={author.name}>
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
