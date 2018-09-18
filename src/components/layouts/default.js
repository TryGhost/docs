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
// TODO: create custom Prism style
import 'prismjs/themes/prism.css'

class DefaultLayout extends React.Component {
    componentDidMount() {
        Prism.highlightAll()
    }

    render() {
        const children = this.props.children
        const title = `Ghost Docs` + (this.props.title ? ` - ` + this.props.title : ``)

        return (
            <>
                <Helmet>
                    <html lang="en" className="fs-base" />
                    <title>{ title }</title>
                    <meta name="description" content="Ghost Docs" />
                    <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/6076934/7558352/css/fonts.css" />
                    <body className="bg-whitegrey-l2 flex flex-column whitney f7 fw4 middarkgrey readability" />
                </Helmet>
                <Header />

                <div className="mt30 mw-xl center">
                    { children }
                </div>

                <Footer />
            </>
        )
    }
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
}

export default DefaultLayout
