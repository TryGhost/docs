import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const List = styled.ul`
    display: flex;
    flex-wrap: wrap-reverse;
    margin: 0;
    padding: 0;
    list-style: none;
}
`

const Tag = styled.li`
    position: relative;
    flex-shrink: 0;
    margin: 0;
    padding: 0;
    
    &:not(:last-child)::after {
      content: ', '
    }

    
`

const AuthorList = props => {
    return <List>{props.authors.map(author => (
        <Tag key={author.name}>
            <Link to='/author/{author.slug}/'>
            {author.name}
            </Link>
        </Tag>
    ))}</List>;
}

export default AuthorList;
