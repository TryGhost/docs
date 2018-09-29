import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Prism from 'prismjs'

// Partials and components
import Header from './partials/header'
import Footer from './partials/footer'

// Spirit
import 'ghost-spirit/public/spirit-brand.css'
import '../css/custom.css'

// Additional styles
import '../css/prism.css'

class DefaultLayout extends React.Component {
    componentDidMount() {
        Prism.highlightAll()
    }

    render() {
        const children = this.props.children
        const header = this.props.header ? this.props.header : <Header dividerStyle={ this.props.headerDividerStyle }/>

        return (
            <>
                <Helmet>
                    <html lang="en" className="fs-base" />
                    <title>Ghost</title> /* TODO: This should be dynamic */
                    <meta name="description" content="Ghost documentation" />  /* TODO: This should be dynamic */
                    <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/6076934/7558352/css/fonts.css" />
                    <body className={ this.props.bodyClass + ` flex flex-column whitney f7 fw4 middarkgrey readability`} />
                </Helmet>

                { header }

                <main className={ this.props.mainClass ? this.props.mainClass : `pb-vw4` }>
                    { children }
                </main>

                <Footer />
            </>
        )
    }
}

DefaultLayout.defaultProps = {
    headerDividerStyle: `shadow`,
    bodyClass: `bg-whitegrey-l2`,
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    bodyClass: PropTypes.string,
    mainClass: PropTypes.string,
    header: PropTypes.element,
    headerDividerStyle: PropTypes.oneOf([`hairline`, `shadow`]),
}

export default DefaultLayout
