import Layout from '../components/layouts/default'
import React from 'react'
import PropTypes from 'prop-types'
import { Spirit } from '../components/spirit-styles'
import Box from '../components/layouts/partials/box'
import Icon from '../components/global/icon'

import bgapi from '../images/api-bg.svg' // eslint-disable-line no-unused-vars
import GoLogo from '../images/go-logo.png' // eslint-disable-line no-unused-vars

const sectionStyles = {
    headingContainer: `col-12 col-4-ns mt5 mt0-l`,
    cardContainer: `col-12 col-4-ns grid-icon-boxes nt1 nt5-l pr4-ns`,
}

class APISection extends React.Component {
    render() {
        return (
            <div className="col-4 flex flex-column">
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
            <Box to={ this.props.to } className="br4 flex flex-column justify-between items-center middarkgrey pa2 pt8 pb5 tdn gh-integration-card" onWhite="false" elevation="2">
                { this.props.icon ? <div className="w10 h10 flex justify-center items-center"><Icon name={ this.props.icon } className="w10 h10 mb4"></Icon></div> : null }
                { this.props.img ? <div className="w10 h10 flex justify-center items-center"><img src={ this.props.img } className="nudge-bottom--4" /></div> : null }
                { this.props.children }
            </Box>
        )
    }
}

Card.propTypes = {
    to: PropTypes.string,
    icon: PropTypes.string,
    img: PropTypes.string,
}

const APIPage = () => (
    <Layout title="API" mainClass="bg-whitegrey-l2" bodyClass="bg-white">
        <section className="bg-api-reference">
            <div className={ Spirit.page.xl + `tc-ns pt-vw7 pt-vw5-ns pb-vw5 white` }>
                <h1 className={ Spirit.sectionHeading + `gh-integration-header-shadow`}>API Reference</h1>
                <p className={ Spirit.sectionSubHeading }>Clients, tools and libraries for working with Ghost</p>
            </div>
        </section>

        <div className={ Spirit.page.xl + `pb-vw4 pb-vw3-ns pt-vw4 pt-vw3-ns grid-12 gutter-20 gutter-40-l` }>
            
            <div className={ sectionStyles.headingContainer + ` order-1` }>
                {/* <span className="dn dib-ns miw10"><Icon name="sdks" className="stroke-midgrey-l2 w6 h6" /></span> */}
                <h2 className={ Spirit.h3 + `m12`}>Frontend SDKs</h2>
                <p className={ Spirit.p + `midgrey-l2` }>Frameworks for building a publication website</p>
            </div>

            <div className={ sectionStyles.headingContainer + ` order-3 order-2-ns` }>
                {/* <span className="dn dib-ns miw10"><Icon name="rest-api" className="stroke-midgrey-l2 w6 h6" /></span> */}
                <h2 className={ Spirit.h3 + `mt1` }>REST API</h2>
                <p className={ Spirit.p + `midgrey-l2` }>A full reference of API Endpoints</p>
            </div>

            <div className={ sectionStyles.headingContainer + ` order-5 order-3-ns` }>
                {/* <span className="dn dib-ns miw10"><Icon name="tools" className="stroke-midgrey-l2 w6 h6" /></span> */}
                <h2 className={ Spirit.h3 + `mt1` }>Tools</h2>
                <p className={ Spirit.p + `midgrey-l2` }>Utilities to help build and manage Ghost</p>
            </div>

            {/* --- */}

            <div className={ sectionStyles.cardContainer + ` order-2 order-4-ns` }>
                <Card to="/api/v2/handlebars-themes/" icon="handlebars-logo">Handlebars</Card>
                <Card to="/" icon="gatsby-logo">Gatsby</Card>
                {/*<Card to="/" icon="hugo-logo">Hugo</Card>*/ }
            </div>

            <div className={ sectionStyles.cardContainer + ` order-4 order-5-ns` }>
                <Card to="/" icon="content-api-logo">Content API</Card>
                <Card to="/" icon="admin-api-logo">Admin API</Card>
                <Card to="/" icon="webhooks-logo">Webhooks</Card>
            </div>

            <div className={ sectionStyles.cardContainer + ` order-6` }>
                <Card to="/" icon="ghost-cli-logo">Ghost-CLI</Card>
                <Card to="/" icon="gscan-logo">Gscan</Card>
            </div>

            {/*
            <APISection>
                <div className={ sectionStyles.headingContainer }>
                    <h2 className={ Spirit.h3 }>Client Libraries</h2>
                    <p className={ Spirit.p + `midgrey-l2` }>Specific libraries for interacting with the Ghost API directly</p>
                </div>
                <div className={ sectionStyles.cardContainer }>
                    <Card to="/" icon="javascript-logo">JavaScript</Card>
                    <Card to="/" icon="ruby-logo">Ruby</Card>
                    <Card to="/" icon="php-logo">PHP</Card>
                    <Card to="/" icon="python-logo">Python</Card>
                    <Card to="/" img={ GoLogo }>Go</Card>
                    <Card to="/" icon="apple-logo">iOS</Card>
                    <Card to="/" icon="android-logo">Android</Card>
                </div>
            </APISection>
            */}

        </div>
    </Layout>
)

export default APIPage
