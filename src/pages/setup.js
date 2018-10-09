import Layout from '../components/layouts/default'
import React from 'react'
import Icon from '../components/global/icon'
import PropTypes from 'prop-types'

import { Spirit } from '../components/spirit-styles'
import Box from '../components/layouts/partials/box'

class SetupBox extends React.Component {
    render() {
        return (
            <Box className="col-12 col-4-ns pa8 tdn middarkgrey setup-box-min-height" radius="4" to={ this.props.to }>
                <Icon name={ this.props.icon } className={ (this.props.icon === `ghost-pro-logo` ? `w10 h10 ` : `w8 h8 `) + (this.props.iconClass || ``)} />
                <h4 className={ Spirit.h4 + `middarkgrey` + (this.props.icon === `ghost-pro-logo` ? `` : ` mt2`) }>{ this.props.title }</h4>
                <p className={ Spirit.small + `mt1 midgrey-l2` }>{ this.props.children }</p>
            </Box>
        )
    }
}

SetupBox.propTypes = {
    children: PropTypes.any,
    to: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string,
    iconClass: PropTypes.string,
}

// TODO: structured data
const SetupIndexPage = () => (
    <Layout title="API" mainClass="bg-whitegrey-l2 pb-vw3" bodyClass="bg-white">
        <section className="bg-setup">
            <div className={ Spirit.page.xl + `tc-ns pt-vw6 pt-vw4-ns pb-vw4 white` }>
                <h1 className={ Spirit.sectionHeading + `gh-integration-header-shadow` }>Setup Guide</h1>
                <p className={ Spirit.sectionSubHeading }>All the tools to get started with Ghost</p>
            </div>
        </section>

        <div className={ Spirit.page.xl + `mt-vw3`}>
            <section className="grid-12 gutter-row-20 gutter-36-l">
                {/* <h3 className={ Spirit.h4 + `col-12 middarkgrey` }>I want to setup a site...</h3> */}
                <SetupBox to="/setup/ghost-pro/" title="Ghost(Pro)" icon="ghost-pro-logo">
                    Ghost’s premium hosted service delivers a seamless experience, giving you time to focus on what really matters
                </SetupBox>
                
                <SetupBox to="/install/ubuntu/" title="Ubuntu" icon="ubuntu-logo">
                    A full guide for installing Ghost on your Ubuntu production server
                </SetupBox>
                
                <SetupBox to="/install/docker/" title="Docker" icon="docker-logo">
                    Dolore sunt ad quis cillum nostrud irure et ad veniam ex exercitation mollit. Pariatur reprehenderit.
                </SetupBox>

                <SetupBox to="/install/local/" title="Local install" icon="terminal" iconClass="fill-darkgrey">
                    A complete guide to install an instance of Ghost locally for development
                </SetupBox>

                <SetupBox to="/install/source/" title="Install from Source" icon="github" iconClass="fill-darkgrey">
                    Eu laboris labore est nisi voluptate in duis ut. Exercitation irure id dolor est minim
                </SetupBox>
            </section>
        </div>

    </Layout>
)

export default SetupIndexPage
