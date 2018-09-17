import Layout from '../../components/layouts/default'
import React from 'react'

import { Link } from 'gatsby'

const SetupIndexPage = () => (
    <Layout title="Setup">
        <div className="mw10 center">
            <h1><Link to="/setup/what-is-ghost/">What is Ghost?</Link></h1>
            <section>
                <h1>I want to setup a site</h1>
                <div>
                    <Link to="/setup/ghost-pro/">Ghost(Pro)</Link>
                </div>
                <div>
                    <Link to="/setup/ubuntu/">1-click Images</Link>
                </div>
                <div>
                    <Link to="/setup/ubuntu/">Install from Ghost CLI</Link>
                </div>
            </section>
            <section>
                <h1>Community Packages</h1>
                <div>
                    <Link to="/setup/docker/">Docker</Link>
                </div>
            </section>
            <section>
                <h1>Locally</h1>
                <div>
                    <Link to="/setup/local-install/just-trying">Trying out</Link>
                </div>
                <div>
                    <Link to="/setup/local-install/theme-development">Theme development</Link>
                </div>
                <div>
                    <Link to="/setup/install-from-source/">Contribution</Link>
                </div>
            </section>
        </div>
    </Layout>
)

export default SetupIndexPage
