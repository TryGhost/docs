import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import Prism from 'prismjs'

import Layout from '../components/layouts/default'
import { Spirit } from '../components/spirit-styles'
import Tags from '../components/helpers/tags'
import MetaData from '../components/layouts/partials/meta-data'
import RelatedPosts from '../components/global/related-posts'

class FAQ extends React.Component {
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
        const { relatedPosts } = this.props.pageContext

        return (
            <>
                <MetaData data={this.props.data} location={this.props.location} type="article" />
                <Layout bodyClass="bg-white" mainClass="bg-whitegrey-l2 pb10">

                    <div className="bg-faq bb b--whitegrey">
                        <div className={ Spirit.page.xl + `pt-vw7 pt-vw1-ns pb-vw1` }>
                            <h1 className={ Spirit.h4 + `white`}>
                                <Link to="/faq/" className={ `link dim white fw3` }>Frequently Asked Questions</Link>
                                <Tags
                                    post={ post }
                                    separator="false"
                                    html={ true }
                                    classes="white titleslash-white pl4 ml4 relative"
                                    linkToPrefix="faq"
                                    linkClasses="link dim white"
                                />
                            </h1>
                        </div>
                    </div>

                    <div className={ Spirit.page.xl + `grid-12` }>
                        <section className="bg-white br4 shadow-1 col-8 mt10 pa15 pt10 pl7">
                            <div className="mw-content">
                                <div className="flex items-start mb6">
                                    <div className="flex-shrink-0 flex justify-center items-center w6 h6 mr4 fw5 br-100 tc white bg-faq-color lh-1-0">?</div>
                                    <h1 className={`${Spirit.h3} ma0 f4 nudge-bottom--4`}>{ post.title }</h1>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 flex justify-center items-center w6 h6 mr4 f8 fw5 br-100 tc faq-color ba b--faq-color nudge-bottom--4">&raquo;</div>
                                    <section className="post-content faq-content" dangerouslySetInnerHTML={ { __html: post.html } } />
                                </div>
                            </div>
                        </section>

                        <div className="col-4">
                            { relatedPosts.length ?
                                <div className="mw-content pa15 center mt6">
                                    <h4 className={ Spirit.h5 + `mb4 midgrey` }>Related Questions</h4>
                                    <RelatedPosts relatedPosts={ relatedPosts } />
                                </div> :
                                null
                            }
                        </div>
                    </div>
                </Layout>
            </>
        )
    }
}

FAQ.propTypes = {
    data: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    pageContext: PropTypes.shape({
        relatedPosts: PropTypes.array.isRequired,
    }).isRequired,
}

export default FAQ

export const articleQuery = graphql`
    query($slug: String!) {
        site {
            ...SiteMetaFields
        }
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    }
`
