import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'

import Layout from '../components/layouts/default'
import { Spirit } from '../components/spirit-styles'
import Tags from '../components/helpers/tags'
import MetaData from '../components/layouts/partials/meta-data'
import RelatedPosts from '../components/global/related-posts'

class FAQ extends React.Component {
    render() {
        const post = this.props.data.ghostPost
        const { relatedPosts } = this.props.pageContext

        return (
            <>
                <MetaData data={this.props.data} location={this.props.location} type="article" />
                <Layout bodyClass="bg-white" mainClass="bg-whitegrey-l2 pb15">

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

                    <div className={ Spirit.page.xl }>
                        <section className="bg-white br4 br--bottom shadow-1">

                            <div className="mw-content pr20 pl6 pt15 pb15 center">
                                <div className="flex items-start mb6">
                                    <div className="flex-shrink-0 flex justify-center items-center w6 h6 mr4 fw5 br-100 tc white bg-darkgrey lh-1-0">?</div>
                                    <h1 className={`${Spirit.h4} ma0 f4 nudge-bottom--2`}>{ post.title }</h1>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 flex justify-center items-center w6 h6 mr4 f8 fw5 br-100 tc darkgrey ba b--darkgrey">&raquo;</div>
                                    <section className="post-content faq-content" dangerouslySetInnerHTML={ { __html: post.html } } />
                                </div>
                            </div>

                            { relatedPosts.length ?
                                <div className="bt b--whitegrey">
                                    <div className="mw-content pa15 center">
                                        <h4 className={ Spirit.h4 + `mb4` }>Related Questions</h4>
                                        <RelatedPosts relatedPosts={ relatedPosts } />
                                    </div>
                                </div> :
                                null
                            }
                        </section>
                    </div>

                    {/* <div className={ Spirit.page.xl }>
                        <div className="grid-12 gutter-40 mt-vw5 mt-vw2-ns">
                            <div className="col-8 flex">
                                <div className="flex flex-column justify-between">

                                    <div className="flex flex-column">
                                        <div className="flex items-start mb8">
                                            <div className="flex-shrink-0 flex justify-center items-center w6 h6 mr4 fw5 br-100 tc white bg-midgrey">?</div>
                                            <h1 className="ma0 f4 nudge-top--2">{post.title}</h1>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 flex justify-center items-center w6 h6 mr4 f8 fw5 br-100 tc midgrey ba b--midgrey">&raquo;</div>
                                            <section className="post-content faq-content" dangerouslySetInnerHTML={{ __html: post.html }} />
                                        </div>
                                    </div>

                                    <footer className="mt8 pt5 bt b--whitegrey midgrey f8 pb8">
                                        Updated: <time dateTime={post.updated_at_pretty}>{post.updated_at_pretty}</time>
                                    </footer>

                                </div>
                            </div>

                            {relatedPosts.length ?
                                <>
                                    <div className="col-4 w70 ml14">
                                        <h4 className="ma0 mt1 mb6 midgrey">Related Questions</h4>
                                        <RelatedPosts relatedPosts={relatedPosts} />
                                    </div>
                                </> :
                                null
                            }

                        </div>
                    </div> */}
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
