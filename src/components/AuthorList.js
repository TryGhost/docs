import React from 'react';
import Link from 'gatsby-link';

const AuthorList = props => {
    return <ul>{props.authors.map(author => (
        <li key={author.name}>
            <Link to='/author/{author.slug}/'>
            {author.name}
            </Link>
        </li>
    ))}</ul>;
}

export default AuthorList;
