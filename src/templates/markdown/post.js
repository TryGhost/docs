import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import url from 'url'

import { Layout } from '../../components/common/layout'
import { Spirit } from '../../styles/spirit-styles'
import { SidebarNav } from '../../components/common/sidebar'
import { PrevNextSection } from '../../components/common/prev-next'
import { PostHeader, FeedbackForm, Icon, TOC } from '../../components/common'
import { MetaData, getMetaImageUrls } from '../../components/common/meta'

const getGitHubLink = (absoluteFilePath) => {
    let contentFilePath = ``

    // testing only for `/content` doesn't work as we have a URL that contains
    // `/content` twice. Therefore we're testing for each API version docs and
    // the local content files.
    const gitHubRepos = [
        {
            regex: /^(?:\S*\/content\/api\/v0\.11\/)(\S*)/i,
            url: `https://github.com/TryGhost/docs-api/blob/v0.11/`,
        },
        {
            regex: /^(?:\S*\/content\/api\/v2\/)(\S*)/i,
            url: `https://github.com/TryGhost/docs-api/blob/master/`,
        },
        {
            regex: /^(?:\S*\/content\/)(\S*)/i,
            url: `https://github.com/TryGhost/docs/blob/master/content/`,
        },
    ]

    // Using for...of here as we need to stop iterating as soon as we have a match
    for (let repo of gitHubRepos) {
        if (repo.regex.test(absoluteFilePath)) {
            contentFilePath = url.resolve(repo.url, repo.regex.exec(absoluteFilePath)[1])
            break
        }
    }

    return contentFilePath
}

class Post extends React.Component {
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

        const githubLink = getGitHubLink(post.fileAbsolutePath)

        const imageUrl = getMetaImageUrls()
        const sideBarLayout = {}

        const { sidebar } = post.frontmatter || ``
        const toc = post.frontmatter.toc === false ? false : true

        if (sidebar && toc) {
            // Layout #1: navigation left and right: sidebar and TOC

            sideBarLayout.leftSidebar = <SidebarNav location={location} sidebar={sidebar} />
            sideBarLayout.rightSidebar = <div className="nr3 sticky top-25"><TOC className="pr4" listClasses="mt2" /></div>
            sideBarLayout.justification = `justify-between`
        } else if (sidebar || toc) {
            // Layout #2: navigation left only, either TOC or sidebar

            sideBarLayout.leftSidebar = sidebar ?
                <SidebarNav location={location} sidebar={sidebar} /> :
                <div className="nr3 sticky top-25"><TOC listClasses="lefty" className="mt5 mb5 mt10-ns mb0-ns" showHeading={false} /></div>
            sideBarLayout.justification = `justify-start`
        } else {
            // Layout #3: no sidebar navigation
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
                                <article className="flex-auto pa5 pa8-m pa15-l pt10-ns pb10-ns pt10-l pb10-l relative">
                                    <div className="flex content-between items-baseline justify-between no-wrap">
                                        <h1 className={`${Spirit.h1} darkgrey`}>{post.frontmatter.title}</h1>
                                        {githubLink &&
                                            <a href={githubLink}
                                                className="link no-underline midgrey flex-l dn items-start f8 absolute top-10 right-8 o-80 glow"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Icon name="pencil" className="w3 h3 fill-midgrey db pr2 o-80" />
                                                Edit on GitHub
                                            </a>
                                        }
                                    </div>
                                    <section
                                        className="post-content external-scripts"
                                        dangerouslySetInnerHTML={{ __html: post.html } }
                                    />
                                </article>
                                <div className="mw-content pl5 pr5 pl15-ns pr15-ns bt b--whitegrey mt5">
                                    <PrevNextSection
                                        location={location}
                                        sidebar={sidebar}
                                        next={post.frontmatter.next}
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

Post.propTypes = {
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

export default Post

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
