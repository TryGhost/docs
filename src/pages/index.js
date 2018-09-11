import Layout from '../components/layout'
import React from 'react'

import { Link } from 'gatsby'

const IndexPage = () => (
    <Layout>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/setup/">Getting Started</Link><br />
        <Link to="/concepts/">Core Concepts</Link><br />
        <Link to="/tutorials/">Tutorials</Link><br />
        <Link to="/api/">API</Link><br />
        <Link to="/faq/">FAQ</Link><br />
    </Layout>
)

export default IndexPage
