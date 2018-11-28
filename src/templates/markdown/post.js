import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import _ from 'lodash'

import { Layout } from '../../components/common/layout'
import { Spirit } from '../../styles/spirit-styles'
import { SidebarNav, getSidebarFile } from '../../components/common/sidebar'
import { PostHeader } from '../../components/common'
import { FeedbackForm, Icon, PrevNext, TOC } from '../../components/common'
import { MetaData, getMetaImageUrls } from '../../components/common/meta'

function NavBar({ sidebar, location }) {
    if (sidebar) {
        return <SidebarNav sidebar={sidebar} location={location} />
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
        const sidebarfile = getSidebarFile(props.sidebar)

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
            <PrevNext prev={prev} next={next} />
        )
    } else if (props.fm.next && props.fm.next.title && props.fm.next.url) {
        // We *must* have at least URL and title
        const next = {
            title: props.fm.next.title,
            link: props.fm.next.url,
            description: props.fm.next.description || ``,
        }

        return (
            <PrevNext next={next} />
        )
    } else {
        return null
    }
}

class DocTemplate extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isToggleOn: false,
        }

        this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
    }

    toggleMobileMenu() {
        this.setState((state) => {
            return { isToggleOn: !state.isToggleOn }
        })
    }

    render() {
        const { location } = this.props
        const post = this.props.data.markdownRemark
        const imageUrl = getMetaImageUrls()
        const sideBarLayout = {}

        const { sidebar } = post.frontmatter || ``
        const toc = post.frontmatter.toc === false ? false : true

        if (sidebar && toc) { // Layout #1: sidebar and TOC
            sideBarLayout.leftSidebar = <NavBar location={location} sidebar={sidebar} />
            sideBarLayout.rightSidebar = <div className="nr3 sticky top-25"><TOC className="pr4" listClasses="mt2" /></div>
            sideBarLayout.justification = `justify-between`
        } else if (sidebar || toc) { // Layout #2: sidebar only
            if (sidebar) {
                sideBarLayout.leftSidebar = <NavBar location={location} sidebar={sidebar} />
            } else {
                sideBarLayout.leftSidebar = <div className="nr3 sticky top-25"><TOC listClasses="lefty" className="mt5 mb5 mt10-ns mb0-ns" showHeading={false} /></div>
            }
            sideBarLayout.justification = `justify-start`
        } else {
            sideBarLayout.justification = `justify-center`
        }

        return (
            <>
                <MetaData
                    data={this.props.data}
                    location={location}
                    type="article"
                    image={imageUrl}
                />
                <Layout>
                    <PostHeader location={location} />

                    <div className={`${Spirit.page.xl} flex flex-column flex-row-ns ${sideBarLayout.justification} relative`}>
                        <button
                            onClick={() => this.toggleMobileMenu()}
                            className="bg-transparent bn appearance-none absolute right-7 db dn-ns"
                            style={{ top: `-40px` }}
                        >
                            <Icon name="hamburger" className="w6 h-auto stroke-white db dn-ns" />
                        </button>

                        {sideBarLayout.leftSidebar ?
                            <div className={`${(this.state.isToggleOn ? `mobile-nav-open` : ``)} w-100 w-sidebar-ns pr10 pl5 pl0-ns flex-shrink-0-l relative left-sidebar`}>
                                {sideBarLayout.leftSidebar}
                            </div>
                            : null
                        }
                        <div>
                            <div className={`w-100 mw-content bg-white shadow-2 br4 ${(this.state.isToggleOn ? `` : ` br--bottom`)}`}>
                                <article className="flex-auto pa5 pa8-m pa15-l pt10-ns pb10-ns pt10-l pb10-l">
                                    <h1 className={`${Spirit.h1} darkgrey` }>{post.frontmatter.title}</h1>
                                    <section
                                        className="post-content external-scripts"
                                        dangerouslySetInnerHTML={{ __html: post.html } }
                                    />
                                </article>
                                <div className="mw-content pl5 pr5 pl15-ns pr15-ns bt b--whitegrey mt5">
                                    <PrevNextSection
                                        location={location}
                                        sidebar={sidebar}
                                        fm={post.frontmatter}
                                    />
                                </div>
                            </div>
                            <FeedbackForm location={location} />
                        </div>
                        {sideBarLayout.rightSidebar ?
                            <div className="order-3 w-sidebar flex-shrink-0 dn db-l pt10 pl7">
                                {sideBarLayout.rightSidebar}
                            </div>
                            : null
                        }
                    </div>
                </Layout>
            </>
        )
    }
}

DocTemplate.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                siteUrl: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.shape({
                toc: PropTypes.bool,
                sidebar: PropTypes.string,
                title: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
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
