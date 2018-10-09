import Layout from '../components/layouts/default'
import React from 'react'
import PropTypes from 'prop-types'
import { Spirit } from '../components/spirit-styles'
import Box from '../components/layouts/partials/box'
import Icon from '../components/global/icon'

import bgapi from '../images/api-bg.svg' // eslint-disable-line no-unused-vars

import GoLogo from '../images/go-logo.png' // eslint-disable-line no-unused-vars

const sectionStyles = {
    container: `grid-12 mt-vw4 mt-vw4-ns`,
    headingContainer: `col-12 col-4-ns mr10-ns`,
    cardContainer: `col-12 col-8-ns mt-vw4 mt0-ns grid-icon-boxes`,
}

class APISection extends React.Component {
    render() {
        const style = (this.props.first === true ? `grid-12` : sectionStyles.container)

        return (
            <div className={ style }>
                { this.props.children }
            </div>
        )
    }
}

APISection.propTypes = {
    first: PropTypes.bool,
}

class Card extends React.Component {
    render() {
        return (
            <Box to={ this.props.to || null } href={ this.props.href } className="br4 flex flex-column justify-between items-center middarkgrey pa2 pt8 pb5 tdn" onWhite="false" elevation="2">
                { this.props.icon ? <div className="w10 h10 flex justify-center items-center"><Icon name={ this.props.icon } className={ `w10 h10 mb4` + (!this.props.to && !this.props.href ? ` fill-lightgrey o-50` : ``) }></Icon></div> : null }
                { this.props.img ? <div className="w10 h10 flex justify-center items-center"><img src={ this.props.img } className="nudge-bottom--4" /></div> : null }
                <span className={ (!this.props.to && !this.props.href ? `o-50` : ``)}>{ this.props.children }</span>
            </Box>
        )
    }
}

Card.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.string,
    img: PropTypes.string,
    className: PropTypes.string,
}

// TODO: structured data
const APIPage = () => (
    <Layout title="API" mainClass="bg-whitegrey-l2" bodyClass="bg-white">
        <section className="bg-api-reference">
            <div className={ Spirit.page.xl + `tc-ns pt-vw7 pt-vw4-ns pb-vw4 white` }>
                <h1 className={ Spirit.sectionHeading + `gh-integration-header-shadow`}>API Reference</h1>
                <p className={ Spirit.sectionSubHeading }>Clients, tools and libraries for working with Ghost</p>
            </div>
        </section>

        <div className={ Spirit.page.l + `pb-vw4 pb-vw3-ns pt-vw4 pt-vw3-ns` }>
            <APISection first={ true }>
                <div className={ sectionStyles.headingContainer }>
                    <h2 className={ Spirit.h3 }>Frontend SDKs</h2>
                    <p className={ Spirit.small + `midgrey-l2 mt2` }>Frameworks for working with the Ghost API to build a publication website</p>
                </div>
                <div className={ sectionStyles.cardContainer }>
                    <Card to="/api/v2/handlebars-themes/" icon="handlebars-logo">Handlebars</Card>
                    <Card to="/api/v2/gatsby/" icon="gatsby-logo">Gatsby</Card>
                    {/* <Card icon="hugo-logo" className="o-50">Hugo</Card> */}
                </div>
            </APISection>

            <APISection>
                <div className={ sectionStyles.headingContainer }>
                    <h2 className={ Spirit.h3 }>REST API</h2>
                    <p className={ Spirit.small + `midgrey-l2 mt2` }>A full reference of API Endpoints</p>
                </div>
                <div className={ sectionStyles.cardContainer }>
                    <Card to="/api/v2/content/" icon="content-api-logo">Content API</Card>
                    <Card to="/api/v2/admin/" icon="admin-api-logo">Admin API</Card>
                    <Card to="/api/v2/webhooks/" icon="webhooks-logo">Webhooks</Card>
                </div>
            </APISection>

            <APISection>
                <div className={ sectionStyles.headingContainer }>
                    <h2 className={ Spirit.h3 }>Tools</h2>
                    <p className={ Spirit.small + `midgrey-l2 mt2` }>Utilities to help build and manage Ghost</p>
                </div>
                <div className={ sectionStyles.cardContainer }>
                    <Card to="/api/v2/ghost-cli/" icon="ghost-cli-logo">Ghost-CLI</Card>
                    <Card href="https://gscan.ghost.org" icon="gscan-logo">GScan</Card>
                </div>
            </APISection>

            <APISection>
                <div className={ sectionStyles.headingContainer }>
                    <h2 className={ Spirit.h3 + `mt2`}>Client Libraries</h2>
                    <p className={ Spirit.small + `midgrey-l2 mt2` }>Specific libraries for interacting with the Ghost API directly</p>
                    <h4 className="f-supersmall dib ma0 pa0 bg-green pa1 br-pill pl3 pr3 tc white mt2 nudge-top--2">Coming soon</h4>
                </div>
                <div className={ sectionStyles.cardContainer }>
                    <Card icon="javascript-logo-inv">JavaScript</Card>
                    <Card icon="ruby-logo-fill">Ruby</Card>
                    <Card icon="php-logo">PHP</Card>
                    <Card icon="python-logo">Python</Card>
                    {/* <Card to="/" img={ GoLogo }>Go</Card> */ }
                    <Card icon="apple-logo">iOS</Card>
                    <Card icon="android-logo">Android</Card>
                </div>
            </APISection>
        </div>
    </Layout>
)

export default APIPage
