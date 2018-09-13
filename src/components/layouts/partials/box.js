import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components"

// Importing predefined combos of Spirit CSS classes for reuse
import { LinkStyles, 
         BoxStyles } from "../../spirit/styles.js"

import Logo from "components/global/logo"

const Box = () => (
    <Container>
        <h1>Hello</h1>
        <Paragraph></Paragraph>
        <MoreLink to={this.props.link}>Click </MoreLink>
    </Container>
)

// Using styled-components to have pretty component markup + to make sure all 
// CSS modifications scoped to the component (see: https://next.gatsbyjs.org/docs/styled-components/)

// Example 1: Using Spirit/Brand class as className
const Container = styled.header.attrs({
    className: " pa10"
})`
    margin: 100px;
`

export default Header