import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Icon from '../components/global/icon'

import Layout from '../components/layouts/default'
import { Spirit } from '../components/spirit-styles'
import Box from '../components/layouts/partials/box'
import MetaData from '../components/layouts/partials/meta-data'

// import bghome from '../images/home-bg.svg' // eslint-disable-line no-unused-vars

import homeIllustration from '../images/home-illustration.svg' // eslint-disable-line no-unused-vars

function FAQQuestion(props) {
    return (
        <>
            <Link to={ props.to } className="middarkgrey link dim flex justify-start items-start">
                {/* <span className="dib br-pill ba b---blue blue f-supersmall fw6 flex justify-center items-center nudge-top--3 mr2 flex-shrink-0" style={{
                    width: `14px`,
                    height: `14px`,
                }}>?</span>  */}
                <span className="dib">{ props.children }</span>
            </Link>
        </>
    )
}

const mainBoxStyles = {
    box: `col-12 col-4-ns pa5 pa10-l pt6-l flex flex-column justify-between tdn`,
    title: Spirit.h4 + `mt0 mt2-ns darkgrey-l2`,
}

const apiBoxStyles = {
    box: `col-12 col-4-ns pa5 flex flex-column flex-row-l items-start justify-start tdn nt0 nt3-ns`,
}

class IndexPage extends React.Component {
    render() {
        return (
            <>
                <MetaData
                    data={ this.props.data }
                    location={ this.props.location }
                    type="website"
                    // TODO: Replace with real title and description for IncexPage
                    title={ this.props.data.site.siteMetadata.title }
                    description={ this.props.data.site.siteMetadata.description }
                />
                <Layout title="Home" headerDividerStyle="shadow" bodyClass="bg-white" mainClass="bg-whitegrey-l2 pb-vw6 pb-vw3-ns">
                    <div className="gh-bg-home pb-vw5 pb-vw3-ns bb b--whitegrey">

                        <div className="pa5 pt8 pb8 pa-vw3-ns tc">
                            {/* <span className="db lightgrey"><img src={ homeIllustration } alt="bg" /></span> */}
                            <h1 className="ma0 pa0 f2 f-headline-l middarkgrey mt4">Ghost Documentation</h1>
                            <div className="pa4 pl5 pr5 mt6 w-100 mw-s f4 br-pill bg-white shadow-3 center flex items-center justify-between">
                                <Icon name="search" className="fill-lightgrey-d2 h6" />
                                <label htmlFor="homesearch" className="clip">Search</label>
                                <input id="homesearch" name="homesearch" className="input-reset form-text ba b--transparent flex-auto ml2 whitney" type="text" placeholder="Search documentation..." autoComplete="off" />
                            </div>
                        </div>

                        <section className={ Spirit.page.xl + `grid-12 gutter-row-20 gutter-36-ns`}>
                            <Box className={ mainBoxStyles.box } to="/concepts/introduction/" radius="5">
                                <div className="flex flex-row flex-column-ns">
                                    <span className="db lightgrey mr4"><Icon name="blocks" className="h8 h14-l" /></span>
                                    <div>
                                        <h2 className={ mainBoxStyles.title }>Core Concepts</h2>
                                        <p className={ Spirit.p + `mt2 darkgrey-l2` }>Understand the fundamentals of Ghost development.</p>
                                        <span className="dib mt5 purple link fw5 f5 flex items-center">
                                    Learn more <Icon name="arrow-right" className="w3 h3 ml2 fill-purple" />
                                        </span>
                                    </div>
                                </div>
                            </Box>
                            <Box className={ mainBoxStyles.box } to="/setup/" radius="5">
                                <div className="flex flex-row flex-column-ns">
                                    <span className="db lightgrey mr4"><Icon name="rocket" className="h9 h14-l" /></span>
                                    <div>
                                        <h2 className={ mainBoxStyles.title }>Setup Guide</h2>
                                        <p className={ Spirit.p + `mt2 darkgrey-l2` }>Setting up a Ghost site on a server or locally.</p>
                                        <span className="dib mt5 blue link fw5 f5 flex items-center">
                                    Learn more <Icon name="arrow-right" className="w3 h3 ml2 fill-blue" />
                                        </span>
                                    </div>
                                </div>
                            </Box>
                            <Box className={ mainBoxStyles.box } to="/tutorials/" radius="5">
                                <div className="flex flex-row flex-column-ns">
                                    <span className="db lightgrey mr4"><Icon name="typing" className="h8 h14-l" /></span>
                                    <div>
                                        <h2 className={ mainBoxStyles.title }>Tutorials</h2>
                                        <p className={ Spirit.p + `mt2 darkgrey-l2` }>Browse tutorials for most common setup and development use-cases </p>
                                        <span className="dib mt5 green link fw5 f5 flex items-center">
                                    Learn more <Icon name="arrow-right" className="w3 h3 ml2 fill-green" />
                                        </span>
                                    </div>
                                </div>
                            </Box>
                        </section>
                    </div>

                    <div className="bg-whitegrey-l2 pt-vw4 pt-vw3-ns pb-vw2">
                        <section className={ Spirit.page.xl + `grid-12 gutter-row-20 gutter-36-ns` }>

                            <div className="col-12">
                                <Link to="/api/" className={ Spirit.h3 + `link middarkgrey dim` }>API</Link>
                                <p className={ Spirit.p + `mt2` }>
                            Clients, tools and libraries for working with Ghost
                                </p>
                            </div>

                            <Box className={ apiBoxStyles.box } onWhite="false" elevation="1" to="/api/">
                                <span className="dib mr4 mt1 miw10 tc"><Icon name="sdks" className="stroke-midgrey-l2" /></span>
                                <div>
                                    <h4 className={ Spirit.h5 + `middarkgrey mt2 mt0-l` }>Frontend SDKs</h4>
                                    <p className={ Spirit.small + `midgrey mt2` }>Frameworks for working with the Ghost API to build a publication website</p>
                                </div>
                            </Box>
                            {/*
                    <Box className={ apiBoxStyles.box } onWhite="false" elevation="1" to="/api/">
                        <span className="dib mr4 mt1 miw10 tc"><Icon name="client-lib" className="stroke-lightgrey-d2" /></span>
                        <div>
                            <h4 className={ Spirit.h5 + `middarkgrey` }>Client Libraries</h4>
                            <p className={ Spirit.small + `midgrey mt2` }>Specific libraries for interacting with the Ghost API directly</p>
                        </div>
                    </Box>
                    */}
                            <Box className={ apiBoxStyles.box } onWhite="false" elevation="1" to="/api/">
                                <span className="dib mr4 mt1 miw10 tc"><Icon name="rest-api" className="stroke-midgrey-l2" /></span>
                                <div>
                                    <h4 className={ Spirit.h5 + `middarkgrey mt2 mt0-l` }>Rest API</h4>
                                    <p className={ Spirit.small + `midgrey mt2` }>A full reference of API Endpoints</p>
                                </div>
                            </Box>
                            <Box className={ apiBoxStyles.box } onWhite="false" elevation="1" to="/api/">
                                <span className="dib mr4 mt1 miw10 tc"><Icon name="tools" className="stroke-midgrey-l2" /></span>
                                <div>
                                    <h4 className={ Spirit.h5 + `middarkgrey mt2 mt0-l` }>Tools</h4>
                                    <p className={ Spirit.small + `midgrey mt2` }>Utilities to help build and manage Ghost</p>
                                </div>
                            </Box>

                            <div className="col-12 col-8-ns mt4 mt8-ns">
                                <Link to="/integrations/" className={ Spirit.h3 + `link middarkgrey dim` }>Integrations</Link>
                                <p className={ Spirit.p + `mt2` }>
                            All your favourite apps and tools, integrated with Ghost. <Link to="/integrations/" className="blue link dim">Browse all integrations...</Link>
                                </p>
                                <div className="grid-icon-boxes mt4 mt6-l">
                                    <Box to="/integrations/" className="br4 flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn gh-integration-card" onWhite="false" elevation="2">
                                        <img className="w10 mb3" src="https://docs-2.ghost.io/content/images/2018/09/feedly.png" alt="Feedly" />
                                Feedly
                                    </Box>
                                    <Box to="/integrations/" className="br4 flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn gh-integration-card" onWhite="false" elevation="2">
                                        <img className="w10 mb3" src="https://docs-2.ghost.io/content/images/2018/09/zapier.png" alt="Zapier" />
                                Zapier
                                    </Box>
                                    <Box to="/integrations/" className="br4 flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn gh-integration-card" onWhite="false" elevation="2">
                                        <img className="w10 mb3" src="https://docs-2.ghost.io/content/images/2018/09/slack.png" alt="Slack" />
                                Slack
                                    </Box>
                                    <Box to="/integrations/" className="br4 flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn gh-integration-card" onWhite="false" elevation="2">
                                        <img className="w10 mb3" src="https://docs-2.ghost.io/content/images/2018/09/Tumblr_Logos_2018.03.06_iOS-Icon-Blue.png" alt="Tumblr" />
                                Tumblr
                                    </Box>
                                    <Box to="/integrations/" className="br4 flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn gh-integration-card" onWhite="false" elevation="2">
                                        <img className="w10 mb3" src="https://docs-2.ghost.io/content/images/2018/09/medium.png" alt="Medium" />
                                Medium
                                    </Box>
                                    <Box to="/integrations/" className="br4 flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn gh-integration-card" onWhite="false" elevation="2">
                                        <img className="w10 mb3" src="https://docs-2.ghost.io/content/images/2018/09/discourse.png" alt="Discourse" />
                                Discourse
                                    </Box>
                                    <Box to="/integrations/" className="br4 flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn gh-integration-card" onWhite="false" elevation="2">
                                        <img className="w10 mb3" src="https://docs-2.ghost.io/content/images/2018/09/Goldie_Sabaeus_RGB.svg" alt="Discourse" />
                                SurveyMonkey
                                    </Box>
                                    <Box to="/integrations/" className="br4 flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn gh-integration-card" onWhite="false" elevation="2">
                                        <img className="w10 mb3" src="https://docs-2.ghost.io/content/images/2018/09/rss.png" alt="Discourse" />
                                Custom RSS
                                    </Box>
                                    <Box to="/integrations/" className="br4 flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn gh-integration-card" onWhite="false" elevation="2">
                                        <Icon name="more" className="w8 nudge-top--6" />
                                See More
                                    </Box>
                                </div>
                            </div>

                            <div className="col-12 col-4-ns mt4 mt8-ns">
                                <Link to="/faq/" className={ Spirit.h3 + `link middarkgrey dim` }>FAQ</Link>
                                <ul className="list pa0 ma0 mt2 f6 flex-auto flex flex-column">
                                    <li className="mb3 lh-1-65"><FAQQuestion to="/faq/">Can I use Ghost(Pro) in a subdirectory ?</FAQQuestion></li>
                                    <li className="mb3 lh-1-65"><FAQQuestion to="/faq/">How can I track site views?</FAQQuestion></li>
                                    <li className="mb3 lh-1-65"><FAQQuestion to="/faq/">How do I reactivate my Ghost(Pro) account?</FAQQuestion></li>
                                    <li className="mb3 lh-1-65"><FAQQuestion to="/faq/">How do I upgrade/downgrade my subscription?</FAQQuestion></li>
                                    <li className="mb5 lh-1-65"><FAQQuestion to="/faq/">How do I change my Ghost.org account email</FAQQuestion></li>
                                    <li className="lh-1-65"><Link to="/faq/" className="dib blue link fw5 f7 dim">
                                        <span className="flex items-center">More FAQ <Icon name="arrow-right" className="w3 h3 ml1 fill-blue nudge-bottom--1" /></span>
                                    </Link></li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </Layout>
            </>
        )
    }
}

IndexPage.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                siteUrl: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
}

export default IndexPage

export const articleQuery = graphql`
    query {
        site {
            ...SiteMetaFields
        }
    }
`
