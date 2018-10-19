import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
// import { graphql } from 'gatsby'
import Prism from 'prismjs'

import Layout from '../components/layouts/default'
import integrationIcon from '../images/integration-icon.png'
import { Spirit } from '../components/spirit-styles'
import TOC from '../components/layouts/partials/toc'
import MetaData from '../components/layouts/partials/meta-data'

class Integration extends React.Component {
    componentDidMount() {
        // TODO: Prism for Webpack currently supports basic languages. `handlebars`,
        // `yaml`, and `json` are not amongst those. To load those languages, we'd
        // need to load them specifically following the webpack instructions here:
        // https://prismjs.com/#examples and https://github.com/mAAdhaTTah/babel-plugin-prismjs
        // The other option is to create a plugin for GhostPosts.
        Prism.highlightAll()
    }

    render() {
        const post = this.props.data.ghostPost

        return (
            <>
                <MetaData data={this.props.data} location={this.props.location} type="article" />
                <Layout>
                    <div className="pa-vw4 tc">
                        <h1 className="ma0 pa0 f-headline">{post.title} + Ghost</h1>
                        <p className="ma0 mt2 f4 midgrey">How to use Ghost and {post.title} together</p>
                        <div className="flex items-center justify-center mt5">
                            <div className="flex-shrink-0 flex justify-center items-center h30 w30 pa10 bg-white br-100 shadow-3 nl2 nr2">
                                <img className="mw100" src={post.feature_image} alt={post.title} />
                            </div>
                            <div className="flex-shrink-0 flex justify-center items-center h30 w30 pa11 bg-white br-100 shadow-3 nl2 nr2">
                                <img className="mw100" src={integrationIcon} alt="Ghost" />
                            </div>
                        </div>
                    </div>
                    <div className={ Spirit.page.l + `flex` }>
                        <div className="w-100 pa15 pt13 bg-white br4 shadow-1 flex flex-start">
                            <div className="order-2">
                                <TOC className="miw50" headingsOffset="-400" />
                            </div>
                            <article className="order-1 pr10">
                                <div className="mb5 f8">
                                    <Link className="link midgrey" to="/integrations/">Integrations</Link>
                                    <span className="mr1 ml1 f8 midgrey">/</span>
                                    <span className="darkgrey fw5">{post.title}</span>
                                </div>
                                <section className="post-content integration-content" dangerouslySetInnerHTML={{ __html: post.html }} />
                            </article>
                        </div>
                    </div>
                </Layout>
            </>
        )
    }
}

Integration.propTypes = {
    data: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
}

export default Integration

// TODO: Uncomment for bringing back Integrations
// export const articleQuery = graphql`
//     query($slug: String!) {
//         site {
//             ...SiteMetaFields
//         }
//         ghostPost(slug: { eq: $slug }) {
//             ...GhostPostFields
//         }
//     }
// `
