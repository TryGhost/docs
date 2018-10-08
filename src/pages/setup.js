import Layout from '../components/layouts/default'
import React from 'react'
import Icon from '../components/global/icon'

import { Link } from 'gatsby'
import { Spirit } from '../components/spirit-styles'

const SetupIndexPage = () => (
    <Layout title="API" mainClass="bg-whitegrey-l2 pb-vw3" bodyClass="bg-white">
        <section className="bg-setup">
            <div className={ Spirit.page.xl + `tc-ns pt-vw6 pt-vw4-ns pb-vw4 white` }>
                <h1 className={ Spirit.sectionHeading + `gh-integration-header-shadow` }>Setup</h1>
                <p className={ Spirit.sectionSubHeading }>All the tools to get started with Ghost</p>
            </div>
        </section>

        <div className={ Spirit.page.l }>

            <div className={ `pt-vw7 pt-vw2-ns` }>
                <h2 className={ Spirit.h2 + `col-12` }>What is Ghost?</h2>
                <p className={ Spirit.excerpt + `col-8 mt2 measure` }>Sunt duis ad aliqua aute do ex excepteur enim eiusmod nostrud occaecat dolor nisi. Qui nulla exercitation est minim commodo mollit quis incididunt. Est excepteur sit deserunt quis magna do irure quis. Fugiat id qui aliquip ullamco sunt. </p>
                <p className="col-12 mt5"><Link to="/setup/what-is-ghost/" className={ Spirit.excerpt + `blue link fw5 flex items-center` }>Learn more <Icon name="arrow-right" className="h4 fill-blue nl2" /></Link></p>
            </div>

            <section className="grid gutter-2">
                <h3 className={ Spirit.h4 + `col-12 mt15 mb2` }>I want to setup a site</h3>
                <div className="col-4">
                    <Link to="/setup/ghost-pro/" className="link midgrey">
                        <div className="shadow-2 bg-white br4 pa4 pt20 pb20 tc mb5">
                            <h4 className={ Spirit.h5 + `lightgrey`}>Ghost(Pro)</h4>
                        </div>
                    </Link>
                </div>
                <div className="col-4">
                    <Link to="/install/ubuntu/" className="link midgrey">
                        <div className="shadow-2 bg-white br4 pa4 pt20 pb20 tc mb5">
                            <h4 className={ Spirit.h5 + `lightgrey` }>Ubuntu</h4>
                        </div>
                    </Link>
                </div>
                <div className="col-4">
                    <Link to="/install/docker/" className="link midgrey">
                        <div className="shadow-2 bg-white br4 pa4 pt20 pb20 tc mb5">
                            <h4 className={Spirit.h5 + `lightgrey`}>Docker</h4>
                        </div>
                    </Link>
                </div>
                <div className="col-4">
                    <Link to="/install/local/" className="link midgrey">
                        <div className="shadow-2 bg-white br4 pa4 pt20 pb20 tc mb5">
                            <h4 className={Spirit.h5 + `lightgrey`}>Local Install</h4>
                        </div>
                    </Link>
                </div>
                <div className="col-4">
                    <Link to="/install/source/" className="link midgrey">
                        <div className="shadow-2 bg-white br4 pa4 pt20 pb20 tc mb5">
                            <h4 className={Spirit.h5 + `lightgrey`}>Install from Source</h4>
                        </div>
                    </Link>
                </div>
            </section>

        </div>

    </Layout>
)

export default SetupIndexPage
