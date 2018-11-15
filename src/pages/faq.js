import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout } from '../components/common/layout'
import Link from 'gatsby-link'
import { Spirit } from '../styles/spirit-styles'
import { MetaData, getMetaImageUrls } from '../components/common/meta'
import { FAQTagList } from '../components/faq'

class FAQPage extends React.Component {
    render() {
        // Add meta title and description for this page here to overwrite the site meta data as set in our config
        const title = `FAQ - Ghost`
        const description = `Answers to our most popular questions: billing, hosting, troubleshooting and more.`
        const imageUrl = getMetaImageUrls(`faq`)

        return (
            <>
                <MetaData
                    data={ this.props.data }
                    location={ this.props.location }
                    type="website"
                    title={title}
                    description={description}
                    image={imageUrl}
                />
                <Layout title="FAQ" headerDividerStyle="shadow">
                    <div className="bg-faq bb b--whitegrey">
                        <div className={ Spirit.page.xl + `pt-vw7 pt-vw1-ns pb-vw1` }>
                            <h1 className={ Spirit.h4 + `white`}>Frequently Asked Questions</h1>
                        </div>
                    </div>
                    <div className={ Spirit.page.xl + `grid-12`}>
                        <div className="bg-white shadow-2 br4 mt5 mt10-ns pa5 pa15-ns pt10-ns pb12-ns col-12 col-8-ns">

                            <Link to="/faq/using-custom-domains/" className={ `f5 db tdn mb6 faq-question bb b--whitegrey` }>
                                <h4 className={`${Spirit.excerpt} link darkgrey fw5`}>Using custom domains &raquo;</h4>
                                <p className={`${Spirit.small}ma0 f8 lh-copy middarkgrey mb6`}>If you would like to make your site memorable and easy to find with a branded custom domain, then you can map any domain you own directly to your Ghost(Pro) publication.</p>
                            </Link>

                            <Link to="/faq/forgot-password/" className={ `f5 db tdn mb6 faq-question bb b--whitegrey` }>
                                <h4 className={`${Spirit.excerpt} link darkgrey fw5`}>How do I reset my password? &raquo;</h4>
                                <p className={`${Spirit.small}ma0 f8 lh-copy middarkgrey mb6`}>In Ghost, each publication user has their own account details and password which can be reset or changed. Read more if you forgot your password or need to reset it!</p>
                            </Link>

                            <Link to="/faq/using-the-editor/" className={ `f5 db tdn mb6 faq-question bb b--whitegrey` }>
                                <h4 className={`${Spirit.excerpt} link darkgrey fw5`}>Using the editor &raquo;</h4>
                                <p className={`${Spirit.small}ma0 f8 lh-copy middarkgrey mb6`}>Ghost has a powerful visual editor with familiar formatting options, with full support for dynamic content, allowing you to add images, galleries, videos, embeds and code!</p>
                            </Link>

                            <Link to="/faq/publishing-options/" className={ `f5 db tdn mb6 faq-question bb b--whitegrey` }>
                                <h4 className={`${Spirit.excerpt} link darkgrey fw5`}>Publishing options &raquo;</h4>
                                <p className={`${Spirit.small}ma0 f8 lh-copy middarkgrey mb6`}>The post settings menu within the editor allows you to fully optimise your content. This is where you can add tags and authors, feature a post, or turn a post into a page.</p>
                            </Link>

                            <Link to="/faq/managing-your-team/" className={ `f5 db tdn mb6 faq-question bb b--whitegrey` }>
                                <h4 className={`${Spirit.excerpt} link darkgrey fw5`}>Managing your team &raquo;</h4>
                                <p className={`${Spirit.small}ma0 f8 lh-copy middarkgrey mb6`}>Ghost has a number of different user roles and permissions for your team for effective collaboration and publication management. Read more more about inviting your team to Ghost!</p>
                            </Link>

                            <Link to="/faq/the-importer/" className={ `f5 db tdn mb6 faq-question bb b--whitegrey` }>
                                <h4 className={`${Spirit.excerpt} link darkgrey fw5`}>Imports & exports &raquo;</h4>
                                <p className={`${Spirit.small}ma0 f8 lh-copy middarkgrey mb6`}>Publishing with Ghost gives you full ownership and access to your content and data, with sensible JSON imports and exports available at any time. Find out more about imports and migrations!</p>
                            </Link>

                            <Link to="/faq/design-settings/" className={ `f5 db tdn mb6 faq-question bb b--whitegrey` }>
                                <h4 className={`${Spirit.excerpt} link darkgrey fw5`}>Design settings &raquo;</h4>
                                <p className={`${Spirit.small}ma0 f8 lh-copy middarkgrey mb6`}>Adding some design touches to your Ghost publication can be done from the Admin page when logged in to your publication. From here you can add navigation and upload a custom theme.</p>
                            </Link>

                            <Link to="/faq/analytics/" className={ `f5 db tdn mb6 faq-question bb b--whitegrey` }>
                                <h4 className={`${Spirit.excerpt} link darkgrey fw5`}>How can I track how many views my site is getting? &raquo;</h4>
                                <p className={`${Spirit.small}ma0 f8 lh-copy middarkgrey mb6`}>Ghost integrates seamlessly with all 3rd party analytics tools out there, and it takes just a few minutes to set up using the code injection feature in your publication settings. </p>
                            </Link>

                        </div>
                        <div className="col-12 col-4-ns pa5 pa15-ns pt10-ns mt11-ns ">
                            <FAQTagList location={ this.props.location } />
                        </div>
                    </div>
                </Layout>
            </>
        )
    }
}

FAQPage.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                siteUrl: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
}

export default FAQPage

export const pageQuery = graphql`
  query GhostFAQQuery {
    site {
        ...SiteMetaFields
    }
  }
`
