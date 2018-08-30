import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/setup/">Getting Started</Link>
    <Link to="/concepts/">Core Concepts</Link>
    <Link to="/tutorials/">Tutorials</Link>
    <Link to="/api/">API</Link>
    <Link to="/faq/">FAQ</Link>
  </Layout>
)

export default IndexPage
