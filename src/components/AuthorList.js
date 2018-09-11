import Link from 'gatsby-link'
import React from 'react'

const AuthorList = props => <ul>{props.authors.map(author => (
    <li key={author.name}>
        <Link to="/author/{author.slug}/">
            {author.name}
        </Link>
    </li>
))}</ul>

export default AuthorList
