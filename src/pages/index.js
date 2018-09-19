import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layouts/default'

const IndexPage = () => (
    <Layout title="Home">
        <div className="mw-xl center">
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

            <section>
                <h2>Docs Design System Demo</h2>
                <div>
                    <Link to="/design/custom-header/">Custom Headers</Link><br />
                </div>
                <div>
                    <Link to="/design/boxes">Boxes</Link><br />
                </div>
            </section>
        </div>
    </Layout>
)

export default IndexPage
