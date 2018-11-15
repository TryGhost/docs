import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import Prism from 'prismjs'

import { Layout } from '../../components/global/layout'
import { Spirit } from '../../components/spirit-styles'
import Tags from '../../components/global/Tags'
import { MetaData } from '../../components/global/meta'
import RelatedPosts from '../../components/global/RelatedPosts'
import getMetaImageUrls from '../../utils/getMetaImageUrls'

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
        const { relatedPosts, section } = this.props.pageContext
        const image = getMetaImageUrls(section)

        return (
            <>
                <MetaData data={this.props.data} location={this.props.location} type="article" image={image} />
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
                        <section className="bg-white br4 shadow-1 col-12 col-8-l mt5 pa5 pl5 pl3-ns mt10-ns pa15-ns pt10-ns pl7-ns">
                            <div className="mw-content">
                                <div className="flex flex-row items-start">
                                    <div className="flex-shrink-0 flex justify-center items-center w5 h5 w6-l h6-l mr4 fw5 br-100 tc white bg-faq-color lh-normal nudge-bottom--2-ns">?</div>
                                    <h1 className={`${Spirit.h3} ma0 f4 nudge-bottom--4-ns`}>{ post.title }</h1>
                                </div>

                                <div className="flex flex-column flex-row-ns items-start mt5 mt3-ns">
                                    <div className="dn flex-ns flex-shrink-0 justify-center items-center w5 h5 w6-l h6-l mr4 f8 fw5 br-100 tc faq-color ba b--faq-color mb2 mb0-ns nudge-top--2-m">&raquo;</div>
                                    <section className="post-content faq-content external-scripts" dangerouslySetInnerHTML={ { __html: post.html } } />
                                </div>
                            </div>
                        </section>

                        <div className="col-12 col-4-l">
                            { relatedPosts.length ?
                                <div className="mw-content-ns pl5 pa15-ns pt5 pt5-m pt15-l pb0 pb0-m pb15-l center mt6">
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
        section: PropTypes.string.isRequired,
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
