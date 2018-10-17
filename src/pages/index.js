import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Icon from '../components/global/icon'
import Layout from '../components/layouts/default'
import { Spirit } from '../components/spirit-styles'
import Box from '../components/layouts/partials/box'
import MetaData from '../components/layouts/partials/meta-data'
import Search from '../components/search'

// import bghome from '../images/home-bg.svg' // eslint-disable-line no-unused-vars

import homeIllustration from '../images/home-illustration.svg' // eslint-disable-line no-unused-vars

class MainBox extends React.Component {
    render() {
        return (
            <Box className="col-12 col-4-ns pa5 pa10-l pt6-l flex flex-column tdn content-stretch" to={ this.props.to } radius="5">
                <Icon name={ this.props.icon } className="w10 h10 w12-ns h12-ns stroke-w--1-5 mr2 mb2" />
                <div className="flex flex-column justify-between flex-auto">
                    <div>
                        <h2 className={ Spirit.h4 + `mt0 mt2-ns darkgrey flex-shrink-1` }>{ this.props.title }</h2>
                        <p className={ Spirit.p + `mt2 midgrey` }>{ this.props.children }</p>
                    </div>
                    <span className={`${this.props.color} dib mt5 link fw5 f5 flex items-center`}>
                        Learn more <Icon name="arrow-right" className={`w3 h3 ml2 fill-${this.props.color}`} />
                    </span>
                </div>
            </Box>
        )
    }
}

class APIBox extends React.Component {
    render() {
        return (
            <Box className="col-12 col-6-ns pa5 flex flex-column flex-row-l items-start justify-start tdn nt0 nt3-ns api-box-min-height" onWhite="false" elevation="2" to={ this.props.to }>
                <span className="dib mr4 mt1 miw10 tc"><Icon name={ this.props.icon } className="stroke-midgrey-l2" /></span>
                <div>
                    <h4 className={ Spirit.h5 + `middarkgrey mt2 mt0-l` }>{ this.props.title }</h4>
                    <p className={ Spirit.small + `midgrey mt2` }>{ this.props.children }</p>
                </div>
            </Box>
        )
    }
}

function FAQQuestion(props) {
    return (
        <>
            <Link to={ props.to } className="midgrey hover-blue link dib pt1 pb1 flex justify-start items-start">
                {/* <span className="dib br-pill ba b---blue blue f-supersmall fw6 flex justify-center items-center nudge-top--3 mr2 flex-shrink-0" style={{
                    width: `14px`,
                    height: `14px`,
                }}>?</span>  */}
                <span className="dib">{ props.children }</span>
            </Link>
        </>
    )
}

class IndexPage extends React.Component {
    render() {
        // TODO: Replace with real title and description for IndexPage
        const title = `Ghost Docs`
        const description = `Ghost - Open-source publishing platform documentation 👉 Install guides, tutorials, API docs and FAQs.`
        const imageUrl = `https://unsplash.com/photos/RPT3AjdXlZc`

        return (
            <>
                <MetaData
                    data={ this.props.data }
                    location={ this.props.location }
                    type="website"
                    title={ title || this.props.data.site.siteMetadata.title }
                    description={ description || this.props.data.site.siteMetadata.description }
                    image={imageUrl}
                />
                <Layout title="Home" headerDividerStyle="shadow" bodyClass="bg-white" mainClass="bg-whitegrey-l2 pb-vw6 pb-vw3-ns">
                    <div className="gh-bg-home pb-vw5 pb-vw3-ns bb b--whitegrey">

                        <div className="pa5 pt8 pb8 pa-vw3-ns tc">
                            {/* <span className="db lightgrey"><img src={ homeIllustration } alt="bg" /></span> */}
                            <h1 className="ma0 pa0 f2 f-headline-l middarkgrey mt4">Ghost Documentation</h1>
                            <div className="pa4 pl5 pr5 mt6 w-100 mw-s f4 br-pill bg-white shadow-3 center flex items-center justify-between">
                                <Icon name="search" className="fill-lightgrey-d2 h6" />
                                <label htmlFor="homesearch" className="clip">Search</label>
                                <Search />
                            </div>
                        </div>

                        <section className={ Spirit.page.xl + `grid-12 gutter-row-20 gutter-36-ns`}>

                            <MainBox
                                to="/concepts/introduction/"
                                title="Core Concepts"
                                icon="blocks"
                                color="purple">
                                Understand the fundamentals of Ghost development.
                            </MainBox>

                            <MainBox
                                to="/setup/"
                                title="Setup Guide"
                                icon="rocket"
                                color="blue">
                                Setting up a Ghost site on a server or locally.
                            </MainBox>

                            <MainBox
                                to="/tutorials/"
                                title="Tutorials"
                                icon="typing"
                                color="green">
                                Browse tutorials for most common setup and development use-cases.
                            </MainBox>

                        </section>
                    </div>

                    <div className="bg-whitegrey-l2 pt-vw4 pt-vw3-ns pb-vw2">
                        <div className={ Spirit.page.xl + `grid-12 gutter-row-20 gutter-36-ns` }>

                            <section className="col-12 col-8-ns grid-12 gutter-row-20 gutter-row-36-ns gutter-36-ns">
                                <div className="col-12">
                                    <Link to="/api/" className={ Spirit.h3 + `link darkgrey dim` }>API</Link>
                                    <p className={ Spirit.p + `mt2 midgrey` }>
                                        Clients, tools and libraries for working with Ghost
                                    </p>
                                </div>
                                <APIBox
                                    to="/api/"
                                    title="Frontend SDKs"
                                    icon="sdks">
                                    Frameworks for working with the Ghost API to build a publication website
                                </APIBox>
                                <APIBox
                                    to="/api/"
                                    title="Rest API"
                                    icon="rest-api">
                                    A full reference of API Endpoints
                                </APIBox>
                                <APIBox
                                    to="/api/"
                                    title="Tools"
                                    icon="tools">
                                    Utilities to help build and manage Ghost
                                </APIBox>
                            </section>

                            <section className="col-12 col-4-ns mt-vw3 mt0-ns">
                                <Link to="/faq/" className={ Spirit.h3 + `link middarkgrey dim` }>FAQ</Link>
                                <ul className="list pa0 ma0 mt2 f6 flex-auto flex flex-column">
                                    <li className="mb1 lh-1-65"><FAQQuestion to="/faq/">Can I use Ghost(Pro) in a subdirectory ?</FAQQuestion></li>
                                    <li className="mb1 lh-1-65"><FAQQuestion to="/faq/">How can I track site views?</FAQQuestion></li>
                                    <li className="mb1 lh-1-65"><FAQQuestion to="/faq/">How do I reactivate my Ghost(Pro) account?</FAQQuestion></li>
                                    <li className="mb1 lh-1-65"><FAQQuestion to="/faq/">How do I upgrade/downgrade my subscription?</FAQQuestion></li>
                                    <li className="mb4 mb6-ns lh-1-65"><FAQQuestion to="/faq/">How do I change my Ghost.org account email</FAQQuestion></li>
                                    <li className="lh-1-65"><Link to="/faq/" className="dib blue link fw5 f7 dim">
                                        <span className="flex items-center">More FAQ <Icon name="arrow-right" className="w3 h3 ml1 fill-blue nudge-bottom--1" /></span>
                                    </Link></li>
                                </ul>
                            </section>

                            <section className="col-12 mt-vw3 mt-vw3-ns">
                                <Link to="/integrations/" className={ Spirit.h3 + `link darkgrey dim` }>Integrations</Link>
                                <p className={ Spirit.p + `mt2 midgrey flex flex-column flex-row-ns justify-between items-center-ns` }>
                                    All your favourite apps and tools, integrated with Ghost. <Link to="/integrations/" className="blue link dim din pt1 pb1 nb1 mt2 mt0-ns"><span className="flex items-center">Browse all integrations <Icon name="arrow-right" className="w3 h3 ml1 fill-blue nudge-bottom--1" /></span></Link>
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
                                    <Box to="/integrations/" className="flex br4 flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn gh-integration-card" onWhite="false" elevation="2">
                                        <img className="w10 mb3" src="https://docs-2.ghost.io/content/images/2018/09/Goldie_Sabaeus_RGB.svg" alt="Discourse" />
                                        SurveyMonkey
                                    </Box>
                                    <Box to="/integrations/" className="br4 flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn gh-integration-card" onWhite="false" elevation="2">
                                        <Icon name="more" className="w8 nudge-top--6" />
                                        See More
                                    </Box>
                                </div>
                            </section>

                        </div>
                    </div>
                </Layout>
            </>
        )
    }
}

MainBox.propTypes = {
    to: PropTypes.string,
    title: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.string,
    children: PropTypes.any,
}

APIBox.propTypes = {
    to: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string,
    children: PropTypes.any,
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

export const pageQuery = graphql`
    query {
        site {
            ...SiteMetaFields
        }
    }
`
