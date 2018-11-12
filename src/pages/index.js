import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Icon from '../components/global/icon'
import Layout from '../components/layouts/default'
import { Spirit } from '../components/spirit-styles'
import Box from '../components/layouts/partials/box'
import MetaData from '../components/layouts/partials/meta-data'
import HomeHeader from '../components/layouts/partials/home-header'

import homeIllustration from '../images/home-illustration.svg' // eslint-disable-line no-unused-vars

class APIBox extends React.Component {
    render() {
        return (
            <Link to={ this.props.to } className="flex items-start pa4 pa7-ns tdn bb b--whitegrey justify-between mih-10 flex-auto api-box">
                <span className="dib mr3 mt3 miw10 tc"><Icon name={ this.props.icon } className="stroke-middarkgrey-l2" /></span>
                <div className="flex-auto">
                    <h4 className={ Spirit.h5 + `darkgrey mt2 mt0-l` }>{ this.props.title }</h4>
                    <p className={ Spirit.small + `midgrey` }>{ this.props.children }</p>
                </div>
            </Link>
        )
    }
}

APIBox.propTypes = {
    to: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string,
    children: PropTypes.any,
}

function FAQQuestion(props) {
    return (
        <>
            <Link to={ props.to } className="midgrey home-faq-question link dib pt1 pb5">
                <h4 className={ Spirit.h5 + `blue dib` }>{ props.title } &raquo;</h4>
                <p className={ Spirit.small + `mt0` }>{ props.children }</p>
            </Link>
        </>
    )
}

class IndexPage extends React.Component {
    render() {
        // Add meta title and descriptionf or this page here to overwrite the site meta data as set in our config
        const title = `Ghost Docs`
        const description = `Get familiar with Ghost - the open source professional publishing platform.  Install guides, tutorials, API docs and FAQs.`
        const imageUrl = `https://unsplash.com/photos/RPT3AjdXlZc`

        return (
            <>
                <MetaData
                    data={ this.props.data }
                    location={ this.props.location }
                    type="website"
                    title={title}
                    description={description}
                    image={imageUrl}
                />
                <Layout
                    title="Home"
                    headerDividerStyle="shadow"
                    bodyClass="bg-white"
                    mainClass="bg-whitegrey-l2 pb-vw6 pb-vw3-ns"
                    header={<HomeHeader />}
                >

                    <div className="pt-vw3 home-main-box-padding-ns">
                        <div className={ Spirit.page.xl + `grid-12 gutter-row-20 gutter-40-ns` }>

                            <section className="col-12 col-6-ns flex flex-column justify-between mt4 mt0-ns">
                                <Link to="/api/" className={ Spirit.h3 + `link darkgrey hover-midgrey flex-grow-0` }>API Reference</Link>

                                <Box className="mt5 tdn flex-auto flex flex-column items-stretch" elevation="1">
                                    <APIBox
                                        to="/api/#frontend-sdk"
                                        title="Frontend SDKs"
                                        icon="sdks">
                                        Frameworks for working with the Ghost API to build a publication website
                                    </APIBox>
                                    <APIBox
                                        to="/api/#rest-api"
                                        title="Rest API"
                                        icon="rest-api">
                                        A full reference of API Endpoints
                                    </APIBox>
                                    <APIBox
                                        to="/api/#tools"
                                        title="Tools"
                                        icon="tools">
                                        Utilities to help build and manage Ghost
                                    </APIBox>
                                </Box>

                            </section>

                            <section className="col-12 col-6-ns mt0-ns bt bn-ns b--whitegrey nl5 nr5 nl0-ns nr0-ns ml0-ns mr0-ns pl5 pr5 pl0-ns pr0-ns pt5 pt0-ns ">
                                <Link to="/faq/" className={ Spirit.h3 + `link darkgrey hover-midgrey` }>FAQ</Link>
                                <div className="mt3 mt7-ns">
                                    <FAQQuestion to="/faq/upgrade-to-ghost-2-0/" title="Upgrade to Ghost 2.0">
                                        Ghost 2.0 was released in September 2018 and the second major upgrade since the platform launched. Learn how to upgrade
                                    </FAQQuestion>

                                    <FAQQuestion to="/faq/using-custom-domains/" title="Using Custom Domains">
                                        Map any domain you own directly to your Ghost(Pro) publication and make your site more memorable!
                                    </FAQQuestion>

                                    <FAQQuestion to="/faq/upgrading-from-deprecated-ghost-cli/" title="Upgrading from deprecated Ghost CLI">
                                        If you are using a deprecated version and need to upgrade in order to upgrade or manage your Ghost site, some extra steps may be required.
                                    </FAQQuestion>

                                    <Link to="/faq/" className={ Spirit.p + `midgrey fw5 link hover-blue` }>More FAQ...</Link>

                                </div>
                            </section>
                        </div>

                        <section className={ Spirit.page.xl + `col-12 mt8 mt-vw3-ns bt bn-ns b--whitegrey pt5 pt0-ns` }>
                            <Link to="/integrations/" className={ Spirit.h3 + `link darkgrey hover-midgrey` }>Integrations</Link>
                            <p className={ Spirit.p + `mt2 midgrey flex flex-column flex-row-ns justify-between items-center-ns` }>
                                All your favourite apps and tools, integrated with Ghost. <Link to="/integrations/" className="blue link din nb1 mt2 mt0-ns hover-underline-blue"><span className="flex items-center fw5">Browse all integrations <Icon name="arrow-right" className="w3 h3 ml1 fill-blue" /></span></Link>
                            </p>
                            <div className="grid-integrations-index mt4 mt6-l f8">
                                <Box to="/integrations/zapier/" className="br4 flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn tc" onWhite="false" elevation="2">
                                    <img className="w10 mb1" src="https://res.cloudinary.com/tryghost/image/fetch/w_120,h_100,c_fit/https://docs.ghost.io/content/images/2018/09/zapier.png" alt="Zapier" />
                                    Zapier</Box>
                                <Box to="/integrations/disqus/" className="br4 flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn tc" onWhite="false" elevation="2">
                                    <img className="w10 mb1" src="https://res.cloudinary.com/tryghost/image/fetch/w_120,h_100,c_fit/https://docs.ghost.io/content/images/2018/09/disqus.svg" alt="Disqus" />
                                    Disqus</Box>
                                <Box to="/integrations/slack/" className="br4 flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn tc" onWhite="false" elevation="2">
                                    <img className="w10 mb1" src="https://res.cloudinary.com/tryghost/image/fetch/w_120,h_100,c_fit/https://docs.ghost.io/content/images/2018/09/slack.png" alt="Slack" />
                                    Slack</Box>
                                <Box to="/integrations/unsplash/" className="br4 flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn tc" onWhite="false" elevation="2">
                                    <img className="w10 mb1" src="https://res.cloudinary.com/tryghost/image/fetch/w_120,h_100,c_fit/https://docs.ghost.io/content/images/2018/09/unsplash.svg" alt="Unsplash" />
                                    Unsplash</Box>
                                <Box to="/integrations/google-analytics/" className="br4 flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn tc" onWhite="false" elevation="2">
                                    <img className="w10 mb1" src="https://res.cloudinary.com/tryghost/image/fetch/w_120,h_100,c_fit/https://docs.ghost.io/content/images/2018/09/google-analytics-1.png" alt="Google Analytics" />
                                    Google Analytics</Box>
                                <Box to="/integrations/mailchimp/" className="br4 flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn tc" onWhite="false" elevation="2">
                                    <img className="w10 mb1" src="https://res.cloudinary.com/tryghost/image/fetch/w_120,h_100,c_fit/https://docs.ghost.io/content/images/2018/09/mailchimp.png" alt="Mailchimp" />
                                    Mailchimp</Box>
                                <Box to="/integrations/google-amp/" className="flex br4 flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn tc" onWhite="false" elevation="2">
                                    <img className="w10 mb1" src="https://res.cloudinary.com/tryghost/image/fetch/w_120,h_100,c_fit/https://docs.ghost.io/content/images/2018/09/amp.jpg" alt="Google AMP" />
                                    Google AMP</Box>
                                <Box to="/integrations/" className="br4 flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn" onWhite="false" elevation="2">
                                    <Icon name="more" className="w8 nudge-top--6" />
                                    See More</Box>
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

export const pageQuery = graphql`
    query {
        site {
            ...SiteMetaFields
        }
    }
`
