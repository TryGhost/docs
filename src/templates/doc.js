import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layouts/default'
import { SpiritStyles } from '../components/spirit-styles'

const DocTemplate = ({ data }) => {
    const post = data.markdownRemark
    return (
        <Layout title={ post.frontmatter.title }>
            
            <div className="center flex flex-start mt12">
                <nav className="mr5 miw50 mt10">
                    <ul className="ma0 pa0 list">
                        <li className="mb5">Navigation item 1</li>
                        <li className="mb5">Navigation item 2</li>
                    </ul>
                </nav>
                <div>
                    <section className="flex-auto flex bg-white br4 shadow-1 pa15 pt12">
                        <nav className="ml5 miw40 w40 order-2 f7">
                            <ul className="ma0 pa0 list lightgrey">
                                <li className="mb5">TOC item 1</li>
                                <li className="mb5">TOC item 2</li>
                                <li className="mb5">TOC item 3</li>
                            </ul>
                        </nav>
                        <div className="order-1">
                            <span className="f7 fw5 measure-wide ttu dib mb1 midlightgrey">Breadcrumbs</span>
                            <h1 className={ SpiritStyles.h1 }>{ post.frontmatter.title }</h1>
                            <section className="post-content" dangerouslySetInnerHTML={ { __html: post.html } } />
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    )
}

DocTemplate.propTypes = {
    data: PropTypes.object.isRequired,
}

export default DocTemplate

export const articleQuery = graphql`
    query MDDocsQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
            }
            html
        }
    }
`
