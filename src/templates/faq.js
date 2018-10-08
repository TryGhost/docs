import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'

import Layout from '../components/layouts/default'
import { Spirit } from '../components/spirit-styles'
import Tags from '../components/helpers/tags'

const FAQ = ({ data }) => {
    const post = data.ghostPost

    return (
        <Layout bodyClass="bg-white">
            <div className="gh-bg-home bb b--whitegrey">
                <div className={ Spirit.page.xl + `pt-vw7 pt-vw1-ns pb-vw1` }>
                    <Link to="/faq/" className={ Spirit.h4 + `middarkgrey link` }>Frequently Asked Questions</Link>
                </div>
            </div>

            <div className={ Spirit.page.xl }>
                <div className="grid-12 gutter-40 mt-vw5 mt-vw2-ns">
                    <div className="col-12 f8">
                        <Link className="link midgrey" to="/faq/">FAQ</Link>
                        <span className="mr1 ml1 f8 midgrey">/</span>
                        <Tags
                            post={post}
                            separator=" / "
                            html={true}
                        />
                    </div>

                    <div className="col-8 flex">
                        <div className="flex flex-column justify-between">

                            <div className="flex flex-column">
                                <div className="flex items-start mb8">
                                    <div className="flex-shrink-0 flex justify-center items-center w6 h6 mr4 fw5 br-100 tc white bg-blue">?</div>
                                    <h1 className="ma0 f4 middarkgrey">{post.title}</h1>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 flex justify-center items-center w6 h6 mr4 f8 fw5 br-100 tc blue ba b--blue">&raquo;</div>
                                    <section className="post-content faq-content" dangerouslySetInnerHTML={{ __html: post.html }} />
                                </div>
                            </div>

                            <footer className="mt8 pt5 bt b--whitegrey midgrey f8 pb8">
                                Updated: <time dateTime={post.updatedAt}>{post.updatedAt}</time>
                            </footer>

                        </div>
                    </div>

                    <div className="col-4 w70 ml14">
                        <h4 className="ma0 mt1 mb6 midgrey">Related Questions</h4>
                        <ul className="pa0 ma0 mb8 list">
                            <li className="mb4 f8"><a className="link blue lh-title" href="#">This is a related post pulled from the same primary tag, kind of like Casper</a></li>
                            <li className="mb4 f8"><a className="link blue lh-title" href="#">This is a related post pulled from the same primary tag, kind of like Casper</a></li>
                            <li className="mb4 f8"><a className="link blue lh-title" href="#">This is a related post pulled from the same primary tag, kind of like Casper</a></li>
                            <li className="mb4 f8"><a className="link blue lh-title" href="#">This is a related post pulled from the same primary tag, kind of like Casper</a></li>
                            <li className="mb4 f8"><a className="link blue lh-title" href="#">This is a related post pulled from the same primary tag, kind of like Casper</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

FAQ.propTypes = {
    data: PropTypes.object.isRequired,
}

export default FAQ

export const articleQuery = graphql`
    query FAQQuery($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
          title
          custom_excerpt
          plaintext
          html
          updatedAt: updated_at(formatString: "MMMM, YYYY")
          tags {
            name
            slug
          }
          authors {
             name
             slug

          }
        }
    }
`
