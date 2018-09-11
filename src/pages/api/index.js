import Layout from '../../components/layout'
import React from 'react'

import { Link } from 'gatsby'

const APIPage = () => (
    <Layout>
        <Link to="/">Home</Link><br />
        <h1>Ghost API</h1>
        <section>
            <h2>Frontend SDK</h2>
            <div>
                <div>
                    <Link to="/api/v2/handlebars-themes/overview/">Handlebars Themes</Link><br />
                </div>
                <div>
                    <Link to="/api/v0.11/migrate-to-1/">Migrate to 2.0</Link>
                </div>
            </div>
        </section>
        <section>
            <h2>Client Libraries</h2>
            <div>
                <div>
                    <Link to="/api/v2/handlebars-themes/overview/">Handlebars Themes</Link><br />
                </div>
                <div>
                    <Link to="/api/v0.11/migrate-to-1/">Migrate to 2.0</Link>
                </div>
            </div>
        </section>
        <section>
            <div>
                <div>
                    <Link to="/api/v2/handlebars-themes/overview/">Handlebars Themes</Link><br />
                </div>
                <div>
                    <Link to="/api/v0.11/migrate-to-1/">Migrate to 2.0</Link>
                </div>
            </div>
        </section>
    </Layout>
)

export default APIPage
