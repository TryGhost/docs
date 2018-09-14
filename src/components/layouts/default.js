import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Prism from 'prismjs'

// Partials and components
import Header from './partials/header'

// Spirit
import '../custom.css'
import 'ghost-spirit/public/spirit-brand.css'

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
                    <body className="bg-whitegrey-l2 flex flex-column whitney f-default fw4 middarkgrey readability" />
                </Helmet>
                <Header />
                <main className="center mw10 mt30">
                    { children }
                </main>
            </>
        )
    }
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
}

export default DefaultLayout
