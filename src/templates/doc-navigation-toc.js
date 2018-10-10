import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layouts/default'
import { Spirit } from '../components/spirit-styles'
import NavSidebar from '../components/global/navigation-sidebar'
import DesignNavSidebar from '../components/layouts/partials/design-nav-sidebar'
import TOC from '../components/layouts/partials/toc'
import MetaData from '../components/layouts/partials/meta-data'

function NavBar(props) {
    if (props.location.pathname.match(/\S\/design\//i)) {
        return <DesignNavSidebar />
    } else if (props.sidebar) {
        return <NavSidebar sidebar={props.sidebar} location={props.location} />
    } else {
        return null
    }
}

function PageHeader(props) {
    let title
    let subtitle
    let mainLink
    let subLink
    let bgClass = `bg-api-reference`

    // Handlebars
    if (props.location.pathname.match(/\/api\//i)) {
        title = `API Reference`
        mainLink = `/api/`
        if (props.location.pathname.match(/\/handlebars-themes\//i)) {
            subtitle = `Handlebars`
            subLink = `/api/v2/handlebars-themes/`
        }
        if (props.location.pathname.match(/\/gatsby\//i)) {
            subtitle = `Gatsby`
            subLink = `/api/v2/gatsby/`
        }
        if (props.location.pathname.match(/\/content\//i)) {
            subtitle = `Content`
            subLink = `/api/v2/content/`
        }
        if (props.location.pathname.match(/\/admin\//i)) {
            subtitle = `Admin`
            subLink = `/api/v2/admin/`
        }
        if (props.location.pathname.match(/\/webhooks\//i)) {
            subtitle = `Webhooks`
            subLink = `/api/v2/webhooks/`
        }
        if (props.location.pathname.match(/\/ghost-cli\//i)) {
            subtitle = `Ghost CLI`
            subLink = `/api/v2/ghost-cli/`
        }
    }

    // Setup
    if (props.location.pathname.match(/\/setup\//i) || props.location.pathname.match(/\/install\//i)) {
        title = `Setup Guide`
        mainLink = `/setup/`
        bgClass = `bg-setup`
        if (props.location.pathname.match(/\/ghost-pro\//i)) {
            subtitle = `Ghost(Pro)`
            subLink = `/setup/ghost-pro/`
        }
        if (props.location.pathname.match(/\/ubuntu\//i)) {
            subtitle = `Ubuntu`
            subLink = `/install/ubuntu/`
        }
        if (props.location.pathname.match(/\/docker\//i)) {
            subtitle = `Docker`
            subLink = `/install/docker/`
        }
        if (props.location.pathname.match(/\/local\//i)) {
            subtitle = `Local`
            subLink = `/install/local/`
        }
        if (props.location.pathname.match(/\/source\//i)) {
            subtitle = `From Source`
            subLink = `/install/source/`
        }
    }

    // Core Concepts
    if (props.location.pathname.match(/\/concepts\//i)) {
        title = `Core Concepts`
        mainLink = `/concepts/introduction/`
        bgClass = `bg-concepts`
    }

    if (title) {
        return (
            <div className={ bgClass }>
                <div className={ Spirit.page.xl + `pt-vw5 pt-vw1-ns pb-vw1 white` }>
                    <h1 className={ Spirit.h4 + `gh-integration-header-shadow` }>
                        <Link to={ mainLink } className={ `link dim ${subtitle ? `white-80 fw3` : `white`}` }>{ title }</Link>
                        { subtitle ? <Link to={ subLink } className="link white dim titleslash-white pl4 ml4 relative">{ subtitle }</Link> : null }
                    </h1>
                </div>
            </div>
        )
    } else {
        return null
    }
}

class DocTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark
        post.frontmatter.keywords = post.frontmatter.keywords || []
        post.frontmatter.sidebar = post.frontmatter.sidebar || ``
        post.frontmatter.toc = post.frontmatter.toc === false ? false : true

        return (
            <>
                <MetaData data={this.props.data} location={this.props.location} type="article" />
                <Layout mainClass={ post.frontmatter.sidebar ? `` : ``}>
                    <PageHeader location={ this.props.location } />
                    <div className={ Spirit.page.xl + `bg-white flex justify-between pt10 pb20 shadow-1 br4 br--bottom` }>
                        <div className={ (post.frontmatter.sidebar ? `order-1` : `order-1`) + ` w-sidebar` }>
                            { post.frontmatter.sidebar ?
                                <NavBar
                                    location={ this.props.location }
                                    sidebar={ post.frontmatter.sidebar }
                                />
                                : `` }
                        </div>
                        <article className="pl10 pr10 mw-content flex-auto order-2">
                            <h1 className={ Spirit.h1 + `middarkgrey` }>{ post.frontmatter.title }</h1>
                            <section className="post-content" dangerouslySetInnerHTML={ {
                                __html: post.html,
                            } } />
                        </article>
                        <div className={ (post.frontmatter.sidebar ? `order-3` : `order-3`) + ` w-sidebar` }>
                            { post.frontmatter.toc ?
                                <TOC headingsOffset="-200" />
                                : null }
                        </div>
                    </div>
                </Layout>
            </>
        )
    }
}

DocTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
}

export default DocTemplate

export const articleQuery = graphql`
    query($slug: String!) {
        site {
            ...SiteMetaFields
        }
        markdownRemark(fields: { slug: {eq: $slug}}) {
            ...MarkdownFields
        }
    }
`
