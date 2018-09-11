import Layout from '../../components/layout'
import React from 'react'

import { Link } from 'gatsby'

const SetupIndexPage = () => (
    <Layout>
        <h1>Hi people</h1>
        <p>Welcome to your new Setup site.</p>
        <p>Now go build something great.</p>
        <Link to="/">Home</Link><br />
        <Link to="/setup/what-is-ghost/">What is Ghost?</Link>
    </Layout>
)

export default SetupIndexPage
