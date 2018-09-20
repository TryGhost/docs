import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layouts/default'
import SectionHeading from '../components/layouts/partials/section-heading';
import { SpiritStyles } from '../components/spirit-styles';

const IndexPage = () => (
    <Layout title="Home" headerDividerStyle="shadow">

        <SectionHeading title="Ghost Documentation" subtitle="All the docs to work with Ghost">
            <input id="search" className="input-reset form-text pa4 pl5 pr5 mt8 w-100 mw-s f4 br-pill ba b--transparent bg-white shadow-3" type="text" placeholder="Search documentation..." name="query" autoComplete="off" />
        </SectionHeading>
        
        <div className="center mw-l">
            <section className="grid gutter-2">
                <h3 className={ SpiritStyles.h3 + `col-12 mb4 midgrey` }>Setup</h3>
                <div className="col-4">
                    <Link to="/setup/" className="link midgrey"><div className="shadow-1 bg-white br4 pa4 pt20 pb20 tc">
                        <h4 className={ SpiritStyles.h4 }>Getting Started</h4>
                    </div></Link>
                </div>
                <div className="col-4">
                    <Link to="/concepts/introduction/" className="link midgrey"><div className="shadow-1 bg-white br4 pa4 pt20 pb20 tc">
                        <h4 className={ SpiritStyles.h4 }>Core Concepts</h4>
                    </div></Link>
                </div>
                <div className="col-4">
                    <Link to="/tutorials/" className="link midgrey"><div className="shadow-1 bg-white br4 pa4 pt20 pb20 tc">
                        <h4 className={ SpiritStyles.h4 }>Tutorials</h4>
                    </div></Link>
                </div>
            </section>

            <section className="grid gutter-2">
                <h3 className={ SpiritStyles.h3 + `col-12 mt15 mb4 midgrey` }>More Resources</h3>
                <div className="col-6">
                    <Link to="/setup/" className="link midgrey"><div className="shadow-1 bg-white br4 pa4 pt20 pb20 tc">
                        <h4 className={ SpiritStyles.h4 }>API Documentation</h4>
                    </div></Link>
                </div>
                <div className="col-6">
                    <Link to="/concepts/introduction/" className="link midgrey"><div className="shadow-1 bg-white br4 pa4 pt20 pb20 tc">
                        <h4 className={ SpiritStyles.h4 }>FAQ</h4>
                    </div></Link>
                </div>
            </section>
        </div>

    </Layout>
)

export default IndexPage
