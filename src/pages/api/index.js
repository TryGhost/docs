import Layout from '../../components/layouts/default'
import React from 'react'

import { Link } from 'gatsby'

const APIPage = () => (
    <Layout title="API">
        <div className="mw10 center">
            <h1>Ghost API</h1>
            <section>
                <h2>Frontend SDK</h2>
                <div>
                    <div>
                        <Link to="/api/v2/handlebars-themes/">Handlebars Themes</Link><br />
                    </div>
                    <div>
                        <Link to="/api/v2/hugo/">Hugo</Link><br />
                    </div>
                    <div>
                        <Link to="/api/v2/gatsby/">Gatsby</Link><br />
                    </div>
                </div>
            </section>
            <section>
                <h2>Client Libraries</h2>
                <div>
                    <div>
                        <Link to="/api/v2/javascript/">Javascript</Link><br />
                    </div>
                </div>
            </section>
        </div>
    </Layout>
)

export default APIPage
