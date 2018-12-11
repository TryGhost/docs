import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Prism from 'prismjs'

import { Layout } from '../../components/common/layout'
import { Spirit } from '../../styles/spirit-styles'
import { MetaData, getMetaImageUrls } from '../../components/common/meta'

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
        const { section } = this.props.pageContext
        const image = getMetaImageUrls(section)

        return (
            <>
                <MetaData
                    data={this.props.data}
                    location={this.props.location}
                    type="article"
                    fetchAuthorData
                    // Passing this property will allow us to overwrite the specific image, that is set for this section,
                    // with the feature image that is set in the Ghost post
                    overwriteDefaultImage
                    image={image}
                />
                <Layout headerDividerStyle="shadow" mainClass="bg-white">
                    <div className="bg-tutorials">
                        <div className={`${Spirit.page.xl} pt-vw7 pt-vw1-ns pb-vw1 white`}>
                            <Link to="/tutorials/" className={`${Spirit.h4} gh-integration-header-shadow white dim link`}>Tutorials</Link>
                        </div>
                    </div>
                    <div className={`${Spirit.page.xl} pb15`}>
                        <article className="mw-content center pa7 pa15-ns pb10">
                            <h1 className={Spirit.h1}>{post.title}</h1>
                            <section className="post-content tutorial-content external-scripts" dangerouslySetInnerHTML={{ __html: post.html }} />
                        </article>
                    </div>
                </Layout>
            </>
        )
    }
}

Tutorial.propTypes = {
    data: PropTypes.shape({
        ghostPost: PropTypes.shape({
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
    pageContext: PropTypes.shape({
        section: PropTypes.string.isRequired,
    }).isRequired,
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
