import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Content = styled.div`
    position: relative;
    margin: 0 auto;
    padding: 70px 100px 0;
    min-height: 230px;
    font-family: Georgia,serif;
    font-size: 2.2rem;
    line-height: 1.6em;
    background: #fff;
`

const Post = props => {
    return <Content>{props.children}</Content>
}

export default Post;
