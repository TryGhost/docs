import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Prism from 'prismjs'

import Layout from '../components/layouts/default'
// import Authors from '../components/authors'
import { Spirit } from '../components/spirit-styles'
import MetaData from '../components/layouts/partials/meta-data'

class Tutorial extends React.Component {
    componentDidMount() {
        // TODO: Prism for Webpack currently supports basic languages. `handlebars`,
        // `yaml`, and `json` are not amongst those. To load those languages, we'd
        // need to load them specifically following the webpack instructions here:
        // https://prismjs.com/#examples and https://github.com/mAAdhaTTah/babel-plugin-prismjs
        // The other option is to create a plugin for GhostPosts.
        Prism.highlightAll()
    }

    render() {
        const post = this.props.data.ghostPost

        return (
            <>
                <MetaData data={this.props.data} location={this.props.location} type="article" fetchAuthorData={true} />
                <Layout title="Home" headerDividerStyle="shadow" mainClass="bg-white">
                    <div className="bg-tutorials">
                        <div className={ Spirit.page.xl + `pt-vw7 pt-vw1-ns pb-vw1 white` }>
                            <Link to="/tutorials/" className={ Spirit.h4 + `gh-integration-header-shadow white dim link` }>Tutorials</Link>
                        </div>
                    </div>
                    <div className={ Spirit.page.xl + `pb15` }>
                        <article className="mw-content center pa7 pa15-ns pb10">
                            <h1 className={ Spirit.h1 }>{ post.title }</h1>
                            <section className="post-content tutorial-content" dangerouslySetInnerHTML={{ __html: post.html }} />
                            {/* <Authors authors={ post.authors } /> */}
                        </article>

                        {/* <footer className="pt5 bt b--whitegrey midgrey f8 pb8 mw-content center pl15 pr15">
                            Updated: <time dateTime={ post.published_at_pretty }>{ post.published_at_pretty }</time>
                        </footer> */}
                    </div>
                </Layout>
            </>
        )
    }
}

Tutorial.propTypes = {
    data: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
}

export default Tutorial

export const articleQuery = graphql`
    query($slug: String!) {
        site {
            ...SiteMetaFields
        }
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    }
`
