import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layouts/default'
import { SpiritStyles } from '../components/spirit-styles'
import NavSidebar from '../components/layouts/partials/navigation-sidebar'
import TOC from '../components/layouts/partials/toc'

const DocTemplate = ({ data }) => {
    const post = data.markdownRemark

    return (
        <Layout title={ post.frontmatter.title }>
            
            <div className={ SpiritStyles.page.xl + `flex flex-start mt12` }>
                <NavSidebar />
                <div>
                    <section className="flex-auto flex bg-white br4 shadow-1 pa15 pt12">
                        <div className="order-2">
                            <TOC />
                        </div>
                        <div className="order-1">
                            <span className="f7 fw4 measure-wide dib mb1 midlightgrey">Setup / Ghost(Pro)</span>
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
    query MDTDocsQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
            }
            html
        }
    }
`