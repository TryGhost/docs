import React from 'react'
import { Link } from 'gatsby'
import Icon from '../components/global/icon'

import Layout from '../components/layouts/default'
import { Spirit } from '../components/spirit-styles'
import Box from '../components/layouts/partials/box'

// images/home-bg-svg needs to be imported so that it can be used in custom.css
import bghome from '../images/home-bg.svg' // eslint-disable-line no-unused-vars

import homeIllustration from '../images/home-illustration.svg'

const IndexPage = () => (
    <Layout title="Home" headerDividerStyle="shadow" bodyClass="bg-white" mainClass="bg-whitegrey-l2 pb-vw3">

        <div className="gh-bg-home pb-vw3 bb b--whitegrey">

            <div className="pa-vw3 tc">
                <span className="db lightgrey"><img src={ homeIllustration } /></span>
                <h1 className="ma0 pa0 f-headline middarkgrey mt4">Ghost Documentation</h1>
                <div className="pa4 pl5 pr5 mt6 w-100 mw-s f4 br-pill bg-white shadow-3 center flex items-center justify-between">
                    <Icon name="search" className="fill-lightgrey-d2 h6" />
                    <input id="search" className="input-reset form-text ba b--transparent flex-auto ml2" type="text" placeholder="Search documentation..." name="query" autoComplete="off" />
                    {/* <button className="bn bg-blue white flex items-center br-pill br--right pa4 nt4 nb4 nr5 pl7 pr7">Search</button> */}
                </div>
            </div>

            <section className={ Spirit.page.xl + `grid-12 gutter-36`}>
                <Box className="col-4 pa10 flex flex-column justify-between tdn" to="/setup/" radius="5">
                    <div className="">
                        <span className="db lightgrey"><Icon name="rocket" /></span>
                        <h2 className={ Spirit.h4 + `mt2 darkgrey-l2` }>Getting started</h2>
                        <p className={ Spirit.p + `mt2 darkgrey-l2` }>Setting up a Ghost site on a server or locally.</p>
                    </div>
                    <span className="dib mt5 blue link fw5 f5 flex items-center">
                        Learn more
                        <Icon name="arrow-right" className="w3 h3 ml2 fill-blue" />
                    </span>
                </Box>
                <Box className="col-4 pa10 flex flex-column justify-between tdn" to="/concepts/introduction/" radius="5">
                    <div className="">
                        <span className="db lightgrey"><Icon name="blocks" /></span>
                        <h2 className={ Spirit.h4 + `mt2 darkgrey-l2` }>Core Concepts</h2>
                        <p className={ Spirit.p + `mt2 darkgrey-l2` }>Understand the fundamentals of Ghost development.</p>
                    </div>
                    <span className="dib mt5 purple link fw5 f5 flex items-center">
                        Learn more
                        <Icon name="arrow-right" className="w3 h3 ml2 fill-purple" />
                    </span>
                </Box>
                <Box className="col-4 pa10 flex flex-column justify-between tdn" to="/tutorials/" radius="5">
                    <div className="">
                        <span className="db lightgrey"><Icon name="typing" /></span>
                        <h2 className={ Spirit.h4 + `mt2 darkgrey-l2` }>Tutorials</h2>
                        <p className={ Spirit.p + `mt2 darkgrey-l2` }>Browse tutorials for most common setup and development use-cases </p>
                    </div>
                    <span className="dib mt5 green link fw5 f5 flex items-center">
                        Learn more
                        <Icon name="arrow-right" className="w3 h3 ml2 fill-green" />
                    </span>
                </Box>
            </section>
        </div>

        <div className="bg-whitegrey-l2 pt-vw3">
            <section className={ Spirit.page.xl + `grid-12 gutter-36` }>
                <div className="col-8 grid-12 gutter-36">
                    <div className="col-12 nb4">
                        <Link to="/api/" className={ Spirit.h3 + `link middarkgrey dim` }>API</Link>
                    </div>
                    <div className="col-12 grid-12 gutter-36 gh-home-api-container">
                        <Box className="col-6 pa5 flex items-start justify-start tdn" onWhite="false" elevation="1" to="/api/">
                            <span className="dib mr4 mt1 miw10 tc"><Icon name="sdks" className="stroke-lightgrey-d2" /></span>
                            <div>
                                <h4 className={ Spirit.h5 + `middarkgrey` }>Frontend SDKs</h4>
                                <p className={ Spirit.small + `midgrey mt2` }>Frameworks for working with the Ghost API to build a publication website</p>
                            </div>
                        </Box>
                        <Box className="col-6 pa5 flex items-start justify-start tdn" onWhite="false" elevation="1" to="/api/">
                            <span className="dib mr4 mt1 miw10 tc"><Icon name="client-lib" className="stroke-lightgrey-d2" /></span>
                            <div>
                                <h4 className={ Spirit.h5 + `middarkgrey` }>Client Libraries</h4>
                                <p className={ Spirit.small + `midgrey mt2` }>Specific libraries for interacting with the Ghost API directly</p>
                            </div>
                        </Box>
                        <Box className="col-6 pa5 flex items-start justify-start tdn" onWhite="false" elevation="1" to="/api/">
                            <span className="dib mr4 mt1 miw10 tc"><Icon name="rest-api" className="stroke-lightgrey-d2" /></span>
                            <div>
                                <h4 className={ Spirit.h5 + `middarkgrey` }>Rest API</h4>
                                <p className={ Spirit.small + `midgrey mt2` }>A full reference of API Endpoints</p>
                            </div>
                        </Box>
                        <Box className="col-6 pa5 flex items-start justify-start tdn" onWhite="false" elevation="1" to="/api/">
                            <span className="dib mr4 mt1 miw10 tc"><Icon name="tools" className="stroke-lightgrey-d2" /></span>
                            <div>
                                <h4 className={ Spirit.h5 + `middarkgrey` }>Tools</h4>
                                <p className={ Spirit.small + `midgrey mt2` }>Utilities to help build and manage Ghost</p>
                            </div>
                        </Box>
                    </div>
                    {/* <div className="col-8">
                        <Link to="/api/" className="dib midlightgrey-d1 pa2 pl5 pr5 br3 ba b--midlightgrey-l2 link fw5 f6 dim">API Home</Link>
                    </div> */}
                </div>
                <div className="col-4 flex flex-column justify-between">
                    <div>
                        <Link to="/faq/" className={ Spirit.h3 + `link middarkgrey dim` }>FAQ</Link>
                    </div>
                    <ul className="list pa0 ma0 mt6 f5 flex-auto flex flex-column">
                        <li className="mb4 lh-1-65"><Link to="/faq/" className="blue link dim">Can I use Ghost(Pro) in a subdirectory?</Link></li>
                        <li className="mb4 lh-1-65"><Link to="/faq/" className="blue link dim">How can I track site views?</Link></li>
                        <li className="mb4 lh-1-65"><Link to="/faq/" className="blue link dim">How do I reactivate my Ghost(Pro) account?</Link></li>
                        <li className="mb4 lh-1-65"><Link to="/faq/" className="blue link dim">How do I upgrade/downgrade my subscription?</Link></li>
                        <li className="mb7 lh-1-65"><Link to="/faq/" className="blue link dim">How do I change my Ghost.org account email</Link></li>
                        <li className="mb4 lh-1-65"><Link to="/faq/" className="dib blue pa1 pl4 pr3 br3 ba b--blue-l2 link fw5 f7 dim">
                            <span className="flex items-center">More FAQ <Icon name="arrow-right" className="w3 h3 ml1 fill-blue nudge-bottom--1" /></span>
                        </Link></li>
                    </ul>
                </div>
                <div className="col-12 nb4 mt-vw3">
                    <Link to="/integrations/" className={ Spirit.h3 + `link middarkgrey dim` }>Integrations</Link>
                    <p className={ Spirit.p + `mt2` }>
                        All your favourite apps and tools, integrated with Ghost. <Link to="/integrations/" className="blue link dim">Browse all integrations...</Link>
                    </p>
                </div>
                <div className="col-12 grid-auto gutter-36 mt1">
                    <Box to="/integrations/" className="col-2 br4 flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn gh-integration-card" onWhite="false" elevation="2">
                        <img className="w10 mb3" src="https://docs-2.ghost.io/content/images/2018/09/feedly.png" alt="Feedly" />
                        Feedly
                    </Box>
                    <Box to="/integrations/" className="col-2 br4 flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn gh-integration-card" onWhite="false" elevation="2">
                        <img className="w10 mb3" src="https://docs-2.ghost.io/content/images/2018/09/zapier.png" alt="Zapier" />
                        Zapier
                    </Box>
                    <Box to="/integrations/" className="col-2 br4 flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn gh-integration-card" onWhite="false" elevation="2">
                        <img className="w10 mb3" src="https://docs-2.ghost.io/content/images/2018/09/slack.png" alt="Slack" />
                        Slack
                    </Box>
                    <Box to="/integrations/" className="col-2 br4 flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn gh-integration-card" onWhite="false" elevation="2">
                        <img className="w10 mb3" src="https://docs-2.ghost.io/content/images/2018/09/Tumblr_Logos_2018.03.06_iOS-Icon-Blue.png" alt="Tumblr" />
                        Tumblr
                    </Box>
                    <Box to="/integrations/" className="col-2 br4 flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn gh-integration-card" onWhite="false" elevation="2">
                        <img className="w10 mb3" src="https://docs-2.ghost.io/content/images/2018/09/medium.png" alt="Medium" />
                        Medium
                    </Box>
                    <Box to="/integrations/" className="col-2 br4 flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn gh-integration-card" onWhite="false" elevation="2">
                        <img className="w10 mb3" src="https://docs-2.ghost.io/content/images/2018/09/discourse.png" alt="Discourse" />
                        Discourse
                    </Box>
                    <Box to="/integrations/" className="col-2 br4 flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn gh-integration-card" onWhite="false" elevation="2">
                        <Icon name="more" className="w8 nudge-top--6" />
                        More
                    </Box>
                </div>
            </section>
        </div>

    </Layout>
)

export default IndexPage
