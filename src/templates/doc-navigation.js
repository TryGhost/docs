import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layouts/default'
import { Spirit } from '../components/spirit-styles'
import NavSidebar from '../components/global/navigation-sidebar'
import DesignNavSidebar from '../components/layouts/partials/design-nav-sidebar'

function NavBar(props) {
    const isDesign = props.isDesign
    const hasNavSidebar = props.sidebar

    if (isDesign) {
        return <DesignNavSidebar />
    } else if (hasNavSidebar) {
        return <NavSidebar sidebar={ props.sidebar }/>
    } else {
        return null
    }
}

const DocTemplate = ({ data }) => {
    const post = data.markdownRemark
    post.frontmatter.keywords = post.frontmatter.keywords || []
    post.frontmatter.sidebar = post.frontmatter.sidebar || ``

    //TODO: this is hardcoded now, should be changed
    const isDesignNavbar = (post.frontmatter.keywords.length && post.frontmatter.keywords[0] === `design`)

    return (
        <Layout title={ post.frontmatter.title }>

            <div className={ Spirit.page.xl + `flex flex-start mt12` }>
                <NavBar
                    isDesign={isDesignNavbar}
                    sidebar={ post.frontmatter.sidebar }
                />
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
                date
                path
                meta_title
                meta_description
                image
                next {
                    url
                    title
                    description
                }
                sidebar
                keywords
            }
            html
        }
    }
`
