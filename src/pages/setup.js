import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layouts/default'
import Icon from '../components/global/icon'
import { Spirit } from '../components/spirit-styles'
import Box from '../components/layouts/partials/box'
import MetaData from '../components/layouts/partials/meta-data'

class SetupBox extends React.Component {
    render() {
        return (
            <Box className="col-12 col-4-ns pa8 tdn middarkgrey setup-box-min-height" radius="4" to={ this.props.to } href={ this.props.href }>
                <Icon name={ this.props.icon } className={ this.props.iconClass } />
                <h4 className={ Spirit.h4 + `darkgrey ` + this.props.headingClass }>{ this.props.title }</h4>
                <p className={ Spirit.small + `mt1 midgrey` }>{ this.props.children }</p>
            </Box>
        )
    }
}

SetupBox.propTypes = {
    children: PropTypes.any,
    to: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string,
    iconClass: PropTypes.string,
    headingClass: PropTypes.string,
}

class SetupIndexPage extends React.Component {
    render() {
        // TODO: Replace with real title and description for FAQPage
        const title = `Setup Guides`
        const description = `All the tools to get started with Ghost: self-hosted, development and premium hosted install guides.`
        const imageUrl = `https://unsplash.com/photos/RPT3AjdXlZc`

        return (
            <>
                <MetaData
                    data={this.props.data}
                    location={this.props.location}
                    type="website"
                    title={title || this.props.data.site.siteMetadata.title}
                    description={description || this.props.data.site.siteMetadata.description}
                    image={imageUrl}
                />
                <Layout title="API" mainClass="bg-whitegrey-l2 pb-vw3" bodyClass="bg-white">
                    <section className="bg-setup">
                        <div className={ Spirit.page.xl + `tc-ns pt-vw6 pt-vw5-ns pb-vw5 white` }>
                            <h1 className={ Spirit.sectionHeading + `gh-integration-header-shadow` }>Setup Guide</h1>
                            <p className={ Spirit.sectionSubHeading }>
                               The easiest way to get started is to use <strong>Ghost(Pro)</strong>. If you prefer to self-host, we strongly recommend an Ubuntu server with at least 1GB of memory to run Ghost.
                            </p>
                        </div>
                    </section>

                    <div className={ Spirit.page.xl + `mt-vw3`}>
                        <section className="grid-12 gutter-row-20 gutter-36-l">
                            {/* <h3 className={ Spirit.h4 + `col-12 middarkgrey` }>I want to setup a site...</h3> */}
                            <SetupBox href="https://ghost.org/pricing/" title="Ghost(Pro)" icon="ghost-pro-logo" iconClass="w9 h9 stroke-w--1-5" headingClass="mt2">
                                Ghost’s premium hosted service delivers a seamless experience, giving you time to focus on what really matters
                            </SetupBox>

                            <SetupBox to="/install/ubuntu/" title="Ubuntu" icon="ubuntu-logo" iconClass="w8 h8 stroke-w--1-5" headingClass="mt2">
                                A full guide for installing Ghost on your Ubuntu production server
                            </SetupBox>

                            <SetupBox to="/install/docker/" title="Docker" icon="docker-logo" iconClass="w10 h10" headingClass="mt1">
                                Dolore sunt ad quis cillum nostrud irure et ad veniam ex exercitation mollit. Pariatur reprehenderit.
                            </SetupBox>

                            <SetupBox to="/install/local/" title="Local install" icon="terminal" iconClass="fill-midlightgrey w8 h8" headingClass="mt2">
                                A complete guide to install an instance of Ghost locally for development
                            </SetupBox>

                            <SetupBox to="/install/source/" title="Install from Source" icon="github-outline" iconClass="fill-darkgrey w8 h8" headingClass="mt2">
                                Eu laboris labore est nisi voluptate in duis ut. Exercitation irure id dolor est minim
                            </SetupBox>
                        </section>
                    </div>
                </Layout>
            </>
        )
    }
}

SetupIndexPage.propTypes = {
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

export default SetupIndexPage

export const pageQuery = graphql`
    query {
        site {
            ...SiteMetaFields
        }
    }
`
