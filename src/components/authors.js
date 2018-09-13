import React from 'react'
import Link from 'gatsby-link'

const AuthorList = props => <>{props.authors.map(author => (
    <Link to="/author/{author.slug}/">{author.name}</Link>
))}</>

export default AuthorList
