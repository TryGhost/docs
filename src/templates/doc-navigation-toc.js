import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import _ from 'lodash'

import { Layout } from '../components/layouts'
import { Spirit } from '../components/spirit-styles'
import { SidebarNav } from '../components/sidebar'
import FeedbackForm from '../components/FeedbackForm'
import PrevNext from '../components/global/prev-next'
import TOC from '../components/layouts/TOC'
import { MetaData } from '../components/meta'
import Icon from '../components/global/icon'
import getMetaImageUrls from '../utils/getMetaImageUrls'

function NavBar(props) {
    if (props.sidebar) {
        return <SidebarNav sidebar={ props.sidebar } location={ props.location } />
    } else {
        return null
    }
}

function PrevNextSection(props) {
    // Cover two cases:
    // 1. `/concepts/` page that walks through the associated sidebar file
    // 2. other pages, where we set a `next` property in frontmatter
    // The following code serializes the data and pass it to a generic component.

    if (props.sidebar) {
        const [sidebarfile] = props.sidebar ? require(`../data/sidebars/${props.sidebar}.yaml`) : {}

        if (!sidebarfile) {
            return null
        }

        const { groups } = sidebarfile
        const flatSidebar = []

        // Get all nested items and link and make a flat array
        _.forEach(groups, (section) => {
            _.forEach(section.items, (items) => {
                // Remember the group our items belong to
                items.group = section.group
                flatSidebar.push(items)
            })
        })

        const currentIndex = _.findIndex(flatSidebar, item => item.link === props.location.pathname)
        const prev = flatSidebar[currentIndex - 1]
        let next = flatSidebar[currentIndex + 1]

        // Set the last page in "Concepts" to lead to the setup guide
        if (!next && props.sidebar === `concepts`) {
            next = { group: `Setup`, link: `/setup/`, title: `Install Ghost` }
        }

        return (
            <PrevNext prev={ prev } next={ next } />
        )
    } else if (props.fm.next && props.fm.next.title && props.fm.next.url) {
        // We *must* have at least URL and title
        const next = {
            title: props.fm.next.title,
            link: props.fm.next.url,
            description: props.fm.next.description || ``,
        }

        return (
            <PrevNext next={ next } />
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
    if (props.location.pathname.match(/^\/api\//i)) {
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
    if (props.location.pathname.match(/^\/setup\//i) || props.location.pathname.match(/^\/install\//i)) {
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
    if (props.location.pathname.match(/^\/concepts\//i)) {
        title = `Core Concepts`
        mainLink = `/concepts/introduction/`
        bgClass = `bg-concepts`
    }

    if (title) {
        return (
            <div className={ bgClass }>
                <div className={ Spirit.page.xl + `pt12 pb4 pt-vw1-ns pb-vw1-ns white pl10 pl0-ns` }>
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
    constructor(props) {
        super(props)

        this.state = { isToggleOn: false }
        this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
    }

    toggleMobileMenu() {
        this.setState((state) => {
            return { isToggleOn: !state.isToggleOn }
        })
    }

    render() {
        const post = this.props.data.markdownRemark
        const imageUrl = getMetaImageUrls()

        post.frontmatter.keywords = post.frontmatter.keywords || []
        post.frontmatter.sidebar = post.frontmatter.sidebar || ``
        post.frontmatter.toc = post.frontmatter.toc === false ? false : true

        var leftSidebar, rightSidebar, justification

        if (post.frontmatter.sidebar && post.frontmatter.toc) { // Layout #1: sidebar and TOC
            leftSidebar = <NavBar location={ this.props.location } sidebar={ post.frontmatter.sidebar } />
            rightSidebar = <div className="nr3 sticky top-25"><TOC headingsOffset="-200" className="pr4" listClasses="mt3" /></div>
            justification = `justify-between`
        } else if (post.frontmatter.sidebar || post.frontmatter.toc) { // Layout #2: sidebar only
            if (post.frontmatter.sidebar) {
                leftSidebar = <NavBar location={ this.props.location } sidebar={ post.frontmatter.sidebar } />
            } else {
                leftSidebar = <div className="nr3 sticky top-25"><TOC headingsOffset="-200" listClasses="lefty" className="mt5 mb5 mt10-ns mb0-ns" showHeading={ false } /></div>
            }
            justification = `justify-start`
        } else {
            justification = `justify-center`
        }

        return (
            <>
                <MetaData
                    data={ this.props.data }
                    location={ this.props.location }
                    type="article"
                    image={imageUrl}
                />
                <Layout>
                    <PageHeader location={ this.props.location } />

                    <div className={ Spirit.page.xl + `flex flex-column flex-row-ns ${justification} relative` }>

                        <button onClick={e => this.toggleMobileMenu(e)} className="bg-transparent bn appearance-none absolute right-7 db dn-ns" style={{
                            top: `-40px`,
                        }}><Icon name="hamburger" className="w6 h-auto stroke-white db dn-ns" /></button>

                        { leftSidebar ?
                            <div className={ (this.state.isToggleOn ? `mobile-nav-open` : ``) + ` w-100 w-sidebar-ns pr10 pl5 pl0-ns flex-shrink-0-l relative left-sidebar` }>
                                { leftSidebar }
                            </div>
                            : null }
                        <div>
                            <div className={ `w-100 mw-content bg-white shadow-2 br4` + (this.state.isToggleOn ? `` : ` br--bottom`)}>
                                <article className="flex-auto pa5 pa8-m pa15-l pt10-ns pb10-ns pt10-l pb10-l">
                                    <h1 className={ Spirit.h1 + `darkgrey` }>{ post.frontmatter.title }</h1>
                                    <section className="post-content external-scripts" dangerouslySetInnerHTML={ {
                                        __html: post.html,
                                    } } />

                                </article>
                                <div className="mw-content pl5 pr5 pl15-ns pr15-ns bt b--whitegrey mt5">
                                    <PrevNextSection
                                        location={ this.props.location }
                                        sidebar={ post.frontmatter.sidebar }
                                        fm={ post.frontmatter }
                                    />
                                </div>
                            </div>
                            <FeedbackForm location={ this.props.location } />
                        </div>
                        { rightSidebar ?
                            <div className="order-3 w-sidebar flex-shrink-0 dn db-l pt10 pl7">
                                { rightSidebar }
                            </div>
                            : null }
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
