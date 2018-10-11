import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import _ from 'lodash'

import Layout from '../components/layouts/default'
import { Spirit } from '../components/spirit-styles'
import NavSidebar from '../components/global/navigation-sidebar'
import PrevNext from '../components/global/prev-next'
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

function PrevNextSection(props) {
    // Cover two cases:
    // 1. concepts page that walks through the associated sidebar file
    // 2. other pages, where we set a `next` property in frontmatter
    // We're using this code here to serialize the data and pass it to a more
    // generic component

    if (props.sidebar === `concepts`) {
        const [sidebarfile] = props.sidebar ? require(`../data/sidebars/${props.sidebar}.yaml`) : {}

        if (!sidebarfile) {
            return null
        }

        const { groups } = sidebarfile
        const flatSidebar = []

        // Get all nested items and link and make a flat array
        _.forEach(groups, (group) => {
            _.forEach(group.items, (items) => {
                flatSidebar.push(items)
            })
        })

        const currentIndex = _.findIndex(flatSidebar, item => item.link === props.location.pathname)
        const prev = flatSidebar[currentIndex - 1] || {}
        const next = flatSidebar[currentIndex + 1] || {}

        return (
            <PrevNext prev={prev} next={next} />
        )
    } else if (props.fm.next) {
        const next = {
            title: props.fm.next.title || ``,
            link: props.fm.next.url || ``,
        }

        return (
            <PrevNext next={next} />
        )
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
            subLink = `/api/handlebars-themes/`
        }
        if (props.location.pathname.match(/\/gatsby\//i)) {
            subtitle = `Gatsby`
            subLink = `/api/gatsby/`
        }
        if (props.location.pathname.match(/\/content\//i)) {
            subtitle = `Content`
            subLink = `/api/content/`
        }
        if (props.location.pathname.match(/\/admin\//i)) {
            subtitle = `Admin`
            subLink = `/api/admin/`
        }
        if (props.location.pathname.match(/\/webhooks\//i)) {
            subtitle = `Webhooks`
            subLink = `/api/webhooks/`
        }
        if (props.location.pathname.match(/\/ghost-cli\//i)) {
            subtitle = `Ghost CLI`
            subLink = `/api/ghost-cli/`
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

const styles = {
    mainContainer: `bg-white pt10 pb20 shadow-1 br4 br--bottom`,
    articleContainer: `pl20 pr20 mw-content`,
}

class DocTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark
        post.frontmatter.keywords = post.frontmatter.keywords || []
        post.frontmatter.sidebar = post.frontmatter.sidebar || ``
        post.frontmatter.toc = post.frontmatter.toc === false ? false : true

        if (post.frontmatter.sidebar && post.frontmatter.toc) { // Layout #1: sidebar and TOC
            return (
                <>
                    <MetaData data={ this.props.data } location={ this.props.location } type="article" />
                    <Layout>
                        <PageHeader location={ this.props.location } />
                        <div className={ `${Spirit.page.xl} flex justify-between` }>
                            <div className={ `w-sidebar pt10 pr10` }>
                                <NavBar
                                    location={ this.props.location }
                                    sidebar={ post.frontmatter.sidebar }
                                />
                            </div>
                            <div className={ `${styles.mainContainer} flex` }>
                                <article className={ `${styles.articleContainer} flex-auto order-2` }>
                                    <h1 className={ Spirit.h1 + `darkgrey` }>{ post.frontmatter.title }</h1>
                                    <section className="post-content" dangerouslySetInnerHTML={ {
                                        __html: post.html,
                                    } } />
                                </article>
                                <div className={ `order-3 w-sidebar` }>
                                    <TOC headingsOffset="-200" className="pr10" listClasses="mt3" />
                                </div>
                            </div>
                        </div>
                    </Layout>
                </>
            )
        } else if (post.frontmatter.sidebar || post.frontmatter.toc) { // Layout #2: sidebar only
            return (
                <>
                    <MetaData data={ this.props.data } location={ this.props.location } type="article" />
                    <Layout mainClass={ post.frontmatter.sidebar ? `` : `` }>
                        <PageHeader location={ this.props.location } />
                        <div className={ `${Spirit.page.xl} flex justify-between` }>
                            <div className="w-sidebar pt10 pr10">
                                { post.frontmatter.sidebar ?
                                    <NavBar
                                        location={ this.props.location }
                                        sidebar={ post.frontmatter.sidebar }
                                    /> :
                                    <TOC headingsOffset="-200" listClasses="lefty" showHeading={ false } />
                                }
                            </div>
                            <article className={ `${styles.articleContainer} ${styles.mainContainer} flex-auto bg-white` }>
                                <h1 className={ Spirit.h1 + `darkgrey` }>{ post.frontmatter.title }</h1>
                                <section className="post-content" dangerouslySetInnerHTML={ {
                                    __html: post.html,
                                } } />
                            </article>
                            <div className="w-sidebar"></div>
                        </div>
                    </Layout>
                </>
            )
        } else { // Layout #4: no sidebar && no TOC
            return (
                <>
                    <MetaData data={ this.props.data } location={ this.props.location } type="article" />
                    <Layout>
                        <PageHeader location={ this.props.location } />
                        <article className={ `${styles.articleContainer} ${styles.mainContainer} mw-content center` }>
                            <h1 className={ Spirit.h1 + `darkgrey` }>{ post.frontmatter.title }</h1>
                            <section className="post-content" dangerouslySetInnerHTML={ {
                                __html: post.html,
                            } } />
                            <PrevNextSection
                                location={this.props.location}
                                sidebar={post.frontmatter.sidebar}
                                fm={post.frontmatter}
                            />
                        </article>
                    </Layout>
                </>
            )
        }
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
