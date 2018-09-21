import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'

import Layout from '../components/layouts/default'
import { SpiritStyles } from '../components/spirit-styles'

const getBreadCrumb = function getBreadCrumb(post) {
    // Get rid of internal tags
    let tags = post.tags.filter(tag => !tag.name.match(/^#/)) || []

    // If any tags left, use the first tag name and fallback to `General`
    if (!tags.length) {
        return `General`
    } else {
        const [{ name }] = tags
        return name
    }
}

const FAQ = ({ data }) => {
    const post = data.ghostPost
    const primaryTag = getBreadCrumb(post)

    return (
        <Layout>
            <div className={ SpiritStyles.page.l + `flex flex-column pa12 pt10 bg-white br4` }>

                <div className="mb8 f8">
                    <Link className="link midgrey" to="/faq/">FAQ</Link>
                    <span className="mr1 ml1 f8 midgrey">/</span>
                    <span className="darkgrey fw5">{primaryTag}</span>
                </div>

                <div className="flex">

                    <div className="flex flex-column justify-between">

                        <div className="flex flex-column">
                            <div className="flex items-start mb8">
                                <div className="flex-shrink-0 flex justify-center items-center w6 h6 mr4 fw5 br-100 tc white bg-blue">?</div>
                                <h1 className="ma0 f4 darkgrey">{post.title}</h1>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 flex justify-center items-center w6 h6 mr4 f8 fw5 br-100 tc blue ba b--blue" style={{ lineHeight: `1em` }}>&raquo;</div>
                                <section className="post-content faq-content" dangerouslySetInnerHTML={{ __html: post.html }} />
                            </div>
                        </div>

                        <footer className="mt8 pt5 bt b--whitegrey midgrey f8">
                            Updated: <time dateTime={post.updatedAt}>{post.updatedAt}</time>
                        </footer>

                    </div>

                    <div className="flex-shrink-0 w70 ml14">
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
