import React from 'react'
import Helmet from "react-helmet"
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layouts/default'
import { Spirit } from '../components/spirit-styles'
import NavSidebar from '../components/global/navigation-sidebar'
import DesignNavSidebar from '../components/layouts/partials/design-nav-sidebar'
import TOC from '../components/layouts/partials/toc'

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
    var title, subtitle, mainLink, subLink, bgClass = `bg-api-reference`
    
    // API
    if (props.location.pathname.match(/\/api\//i)) {
        title = `API Reference`
        mainLink = `/api/`
        if (props.location.pathname.match(/\/handlebars-themes\//i)) {
            subtitle = `Handlebars`
            subLink = `/api/v2/handlebars-themes/`
        }
    }

    // Setup
    if (props.location.pathname.match(/\/setup\//i)) {
        title = `Setup`
        mainLink = `/setup/`
        bgClass = `bg-setup`
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
                <div className={ Spirit.page.xl + `pt-vw7 pt-vw2-ns pb-vw2 white` }>
                    <h1 className={ Spirit.h3 + `gh-integration-header-shadow` }>
                        <Link to={ mainLink } className={ `link dim ${subtitle ? `white-80 fw3` : `white`}` }>{ title }</Link>
                        { subtitle ? <Link to={ subLink } className="link white dim titleslash-white pl4 ml4 relative">{ subtitle }</Link> : null }
                    </h1>
                </div>
            </div>
        )
    } else {
        return <></>
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
                <Helmet>
                    <title>{post.frontmatter.title}</title>
                    <meta name="description" content={post.excerpt} />
                    <link rel="canonical" href="TODO: Real Data - URL" />

                    <meta name="og:type" content="article" />
                    <meta name="og:title" content={post.frontmatter.title} />
                    <meta name="og:description" content={post.excerpt} />
                    <meta property="og:url" content="TODO: Real Data - URL" />
                    <meta property="article:published_time" content="TODO: Real Data - published_at" />
                    <meta property="article:modified_time" content="TODO: Real Data - updated_at" />
                    <meta property="article:tag" content="TODO: Real Data - primary_tag" />
                    <meta property="article:author" content="https://www.facebook.com/ghost" />

                    <meta name="twitter:title" content={post.frontmatter.title} />
                    <meta name="twitter:description" content={post.excerpt} />
                    <meta name="twitter:url" content="TODO: Real Data - URL" />
                    <meta name="twitter.label1" content="Reading time" />
                    <meta name="twitter:data1" content={`${post.timeToRead} min read`} />
                    <meta name="twitter:label2" content="Filed under" />
                    <meta name="twitter:data2" content="TODO: Real Data - primary_tag" />
                    <meta name="twitter:creator" content="@tryghost" />
                </Helmet>
                <Layout>
                    <PageHeader location={ this.props.location } />
                    <div className={Spirit.page.xl + `flex flex-start mt12`}>
                        <NavBar
                            location={this.props.location}
                            sidebar={post.frontmatter.sidebar}
                        />
                        <div className="flex-auto">
                            <section className="flex-auto flex bg-white br4 shadow-1 pa15 pt12 pr12">
                                { post.frontmatter.toc ? <div className="order-2"><TOC headingsOffset="-200" /></div> : null }
                                <article className="order-1 flex-grow-1">
                                    {/* <span className="mb8 f8">Setup / Ghost(Pro)</span> */}
                                    <h1 className={Spirit.h1}>{post.frontmatter.title}</h1>
                                    <section className="post-content" dangerouslySetInnerHTML={{
                                        __html: post.html,
                                    }} />
                                </article>
                            </section>
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
    query MDDocsQuery($slug: String!) {
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
                toc
                keywords
            }
            html
        }
    }
`
