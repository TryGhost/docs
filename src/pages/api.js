import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Spirit } from '../styles/spirit-styles'
import { Icon, Box } from '../components/common'
import { Layout } from '../components/common/layout'
import { MetaData, getMetaImageUrls } from '../components/common/meta'

const Card = ({ to, href, icon, img, iconClass, children }) => (
    <Box
        to={to || null}
        href={href}
        className="br4 flex flex-column justify-between items-center middarkgrey pa2 pt8 pb5 tdn"
        elevation={!href && !to ? `1` : `2`}
    >
        {icon ? <div className="w10 h10 flex justify-center items-center"><Icon name={icon} className={`w10 h10 mb4 ${iconClass}`}></Icon></div> : null}
        {img ? <div className="w10 h10 flex justify-center items-center"><img src={img} className="nudge-bottom--4" /></div> : null}
        <span className={(!to && !href ? `o-50` : ``)}>{children}</span>
    </Box>
)

Card.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.string,
    img: PropTypes.string,
    iconClass: PropTypes.string,
    children: PropTypes.node.isRequired,
}

const APIPage = ({ data, location }) => {
    // Add meta title and description or this page here to overwrite the site meta data as set in the config
    const title = `API Reference - Ghost`
    const description = `Comprehensive documentation of API clients, tools and libraries for working with Ghost.`
    const imageUrl = getMetaImageUrls()

    const sectionStyles = {
        headingContainer: `col-12 col-4-ns mr10-ns`,
        cardContainer: `col-12 col-8-ns mt-vw4 mt0-ns grid-icon-boxes`,
    }

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="website"
                title={title}
                description={description}
                image={imageUrl}
            />
            <Layout mainClass="bg-whitegrey-l2" bodyClass="bg-white">
                <section className="bg-api-reference">
                    <div className={`${Spirit.page.xl} tc-ns pt-vw6 pt-vw5-ns pb-vw5 white`}>
                        <h1 className={`${Spirit.sectionHeading} gh-integration-header-shadow`}>API Reference</h1>
                        <p className={Spirit.sectionSubHeading}>Clients, tools and libraries for working with Ghost</p>
                    </div>
                </section>

                <div className={`${Spirit.page.l} pb-vw4 pb-vw3-ns pt-vw4 pt-vw3-ns`}>
                    <div className="grid-12">
                        <div className={sectionStyles.headingContainer}>
                            <h2 id="frontend-sdk" className={`${Spirit.h3} pt20 nt20`}>Frontend SDKs</h2>
                            <p className={`${Spirit.small} midgrey-l2 mt2`}>Frameworks for working with the Ghost API to build a publication website</p>
                        </div>
                        <div className={sectionStyles.cardContainer}>
                            <Card to="/api/handlebars-themes/" icon="handlebars-logo">Handlebars</Card>
                            <Card to="/api/gatsby/" icon="gatsby-logo">Gatsby</Card>
                        </div>
                    </div>

                    <div className="grid-12 mt-vw4 mt20-ns">
                        <div className={sectionStyles.headingContainer}>
                            <h2 id="rest-api" className={`${Spirit.h3} pt20 nt20`}>REST API</h2>
                            <p className={`${Spirit.small} midgrey-l2 mt2`}>A full reference of API Endpoints</p>
                        </div>
                        <div className={sectionStyles.cardContainer}>
                            <Card to="/api/content/" icon="content-api-logo">Content API</Card>
                            <Card to="/api/admin/" icon="admin-api-logo">Admin API</Card>
                            <Card to="/api/webhooks/" icon="webhooks-logo">Webhooks</Card>
                        </div>
                    </div>

                    <div className="grid-12 mt-vw4 mt20-ns">
                        <div className={sectionStyles.headingContainer}>
                            <h2 id="tools" className={`${Spirit.h3} pt20 nt20`}>Tools</h2>
                            <p className={`${Spirit.small} midgrey-l2 mt2`}>Utilities to help build and manage Ghost</p>
                        </div>
                        <div className={sectionStyles.cardContainer}>
                            <Card to="/api/ghost-cli/" icon="ghost-cli-logo">Ghost-CLI</Card>
                            <Card to="/api/migration/" icon="migration-logo">Migration</Card>
                            <Card href="https://gscan.ghost.org" icon="gscan-logo">GScan</Card>
                        </div>
                    </div>

                    <div className="grid-12 mt-vw4 mt20-ns">
                        <div className={sectionStyles.headingContainer}>
                            <h2 id="client-libraries" className={`${Spirit.h3} pt20 nt18`}>Client Libraries</h2>
                            <p className={`${Spirit.small} midgrey-l2 mt2`}>Specific libraries for interacting with the Ghost API directly</p>
                            <h4 className="f-supersmall dib ma0 pa0 bg-green pa1 br-pill pl3 pr3 tc white mt2 nudge-top--2">Coming soon</h4>
                        </div>
                        <div className={sectionStyles.cardContainer}>
                            <Card icon="javascript-logo" iconClass="stroke-midlightgrey o-30">JavaScript</Card>
                            <Card icon="ruby-logo" iconClass="stroke-midlightgrey o-30">Ruby</Card>
                            <Card icon="php-logo" iconClass="stroke-midlightgrey o-30">PHP</Card>
                            <Card icon="python-logo" iconClass="stroke-midlightgrey o-30">Python</Card>
                            <Card icon="apple-logo" iconClass="stroke-midlightgrey o-30">iOS</Card>
                            <Card icon="android-logo" iconClass="stroke-midlightgrey o-30">Android</Card>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

APIPage.propTypes = {
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

export default APIPage

export const pageQuery = graphql`
    query {
        site {
            ...SiteMetaFields
        }
    }
`
