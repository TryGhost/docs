import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layouts/default'
import { Spirit } from '../components/spirit-styles'
import NavSidebar from '../components/layouts/partials/navigation-sidebar'
import DesignNavSidebar from '../components/layouts/partials/design-nav-sidebar'

const DocTemplate = ({ data }) => {
    const post = data.markdownRemark
    post.frontmatter.tags = post.frontmatter.tags || []

    //TODO: this is hardcoded now, should be changed
    var navBar
    console.log(post.frontmatter.tags)

    if (post.frontmatter.tags.length && post.frontmatter.tags[0] === `design`) {
        navBar = <DesignNavSidebar />
    } else {
        navBar = <NavSidebar />
    }

    return (
        <Layout title={ post.frontmatter.title }>

            <div className={ Spirit.page.xl + `flex flex-start mt12` }>
                { navBar }
                <div className="flex-auto">
                    <section className="bg-white br4 shadow-1 pa15 pt12">
                        {/* <span className="f7 fw4 measure-wide dib mb1 midlightgrey">Setup / Ghost(Pro)</span> */}
                        <h1 className={ Spirit.h1 }>{ post.frontmatter.title }</h1>
                        <section className="post-content" dangerouslySetInnerHTML={ { __html: post.html } } />
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
    query MDNavDocsQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                tags
            }
            html
        }
    }
`
