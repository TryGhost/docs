import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Outer = styled.div`
    position: relative;
    padding: 0 4vw;
`

const Container = props => {
    return <Outer>{props.children}</Outer>;
}

export default Container;
