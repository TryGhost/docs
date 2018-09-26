import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layouts/default'
import SectionHeading from '../components/layouts/partials/section-heading'
import { Spirit } from '../components/spirit-styles'
import Box from '../components/layouts/partials/box';

const IndexPage = () => (
    <Layout title="Home" headerDividerStyle="shadow">

        <div className="bg-whitegrey pb10">

            <div className="pa-vw4 tc">
                <h1 className="ma0 pa0 f-headline middarkgrey">Ghost Documentation</h1>
                <input id="search" className="input-reset form-text pa4 pl5 pr5 mt6 w-100 mw-s f4 br-pill ba b--transparent bg-white shadow-3" type="text" placeholder="Search documentation..." name="query" autoComplete="off" />
            </div>

            <section className={ Spirit.page.xl + `grid-12 gutter-28`}>
                <Box className="col-4 pa10 flex flex-column justify-between tdn" to="/setup/" radius="5">
                    <div className="">
                        <span className="db lightgrey">ICON</span>
                        <h2 className={ Spirit.h4 + `mt4 darkgrey-l2` }>Getting started</h2>
                        <p className={ Spirit.p + `mt2 darkgrey-l2` }>Setting up a Ghost site on a server or locally.</p>
                    </div>
                    <Link to="/setup/" className="dib mt5 blue link fw5 f5">Learn more</Link>
                </Box>
                <Box className="col-4 pa10 flex flex-column justify-between tdn" to="/concepts/introduction/" radius="5">
                    <div className="">
                        <span className="db lightgrey">ICON</span>
                        <h2 className={ Spirit.h4 + `mt4 darkgrey-l2` }>Core Concepts</h2>
                        <p className={ Spirit.p + `mt2 darkgrey-l2` }>Understand the fundamentals of Ghost development.</p>
                    </div>
                    <Link to="/setup/" className="dib mt5 purple link fw5 f5">Learn more</Link>
                </Box>
                <Box className="col-4 pa10 flex flex-column justify-between tdn" to="/tutorials/" radius="5">
                    <div className="">
                        <span className="db lightgrey">ICON</span>
                        <h2 className={ Spirit.h4 + `mt4 darkgrey-l2` }>Tutorials</h2>
                        <p className={ Spirit.p + `mt2 darkgrey-l2` }>Browse tutorials for most common setup and development use-cases </p>
                    </div>
                    <Link to="/setup/" className="dib mt5 green link fw5 f5">Learn more</Link>
                </Box>
            </section>

        </div>
        
        <div className={ Spirit.page.l }>
            <section className="grid gutter-2">
                <h3 className={ Spirit.h4 + `col-12 mt15 mb2` }>More Resources</h3>
                <div className="col-6">
                    <Link to="/api/" className="link midgrey"><div className="shadow-2 bg-white br4 pa4 pt20 pb20 tc box-hover-test">
                        <h4 className={ Spirit.h5 + `lightgrey` }>API Documentation</h4>
                    </div></Link>
                </div>
                <div className="col-6">
                    <Link to="/concepts/introduction/" className="link midgrey"><div className="shadow-2 bg-white br4 pa4 pt20 pb20 tc box-hover-test">
                        <h4 className={ Spirit.h5 + `lightgrey` }>FAQ</h4>
                    </div></Link>
                </div>
            </section>
        </div>

    </Layout>
)

export default IndexPage
