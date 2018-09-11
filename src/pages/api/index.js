import Layout from '../../components/layout'
import React from 'react'

import { Link } from 'gatsby'

const APIIndexPage = () => (
    <Layout>
        <h1>Hi people</h1>
        <p>Welcome to your new Setup site.</p>
        <p>Now go build something great.</p>
        <Link to="/">Home</Link><br />
        <Link to="/api/v2/handlebars-themes/overview/">Handlebars Themes</Link><br />
        <Link to="/api/v0.11/migrate-to-1/">Migrate to 2.0</Link>
    </Layout>
)

export default APIIndexPage
