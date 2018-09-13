import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layouts/default'

const IndexPage = () => (
    <Layout>
        <section>
            <div>
                <input placeholder="Search"></input>
            </div>
        </section>
        <section>
            <div>
                <Link to="/setup/">Getting Started</Link><br />
            </div>
            <div>
                <Link to="/concepts/introduction/">Core Concepts</Link><br />
            </div>
            <div>
                <Link to="/tutorials/">Tutorials</Link><br />
            </div>
        </section>
        <section>
            <h2>More Resources</h2>
            <div>
                <Link to="/api/">API</Link><br />
            </div>
            <div>
                <Link to="/faq/">FAQ</Link><br />
            </div>
        </section>
    </Layout>
)

export default IndexPage
