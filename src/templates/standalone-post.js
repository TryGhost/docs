import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layouts/default'
// import Authors from '../components/authors'
import { Spirit } from '../components/spirit-styles'
import MetaData from '../components/layouts/partials/meta-data'

class Tutorial extends React.Component {
    render() {
        const post = this.props.data.ghostPost

        return (
            <>
                <MetaData data={this.props.data} location={this.props.location} type="article" />
                <Layout title="Home" headerDividerStyle="hairline" bodyClass="bg-white">
                    <div className={ Spirit.page.m + `pt20`}>
                        <h1 className={ Spirit.thinheadline }>{ post.title }</h1>
                        <section className="post-content" dangerouslySetInnerHTML={ { __html: post.html } } />
                        {/* <Authors authors={ post.authors } /> */}

                        <footer className="pt5 bt b--whitegrey midgrey f8 pb8">
                            Updated: <time dateTime={ post.published_at_pretty }>{ post.published_at_pretty }</time>
                        </footer>
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
