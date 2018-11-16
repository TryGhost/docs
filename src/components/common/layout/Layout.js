import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// Partials and components
import Header from './Header'
import Footer from './Footer'
import { SearchWrapper } from '../search'

// Spirit
// import 'ghost-spirit/public/spirit-brand.css'
import '../../../styles/app.css'

// Additional styles
import '../../../styles/prism.css'

class DefaultLayout extends React.Component {
    render() {
        const { children } = this.props
        const header = this.props.header ? this.props.header : <Header dividerStyle={this.props.headerDividerStyle} />

        return (
            <>
                <Helmet>
                    <html lang="en" className="fs-base" />
                    <link type="text/css" href="https://cloud.typography.com/6076934/6704592/css/fonts.css" rel="stylesheet" />
                    <body className={this.props.bodyClass + ` flex flex-column whitney f7 fw4 darkgrey readability`} />
                </Helmet>

                <SearchWrapper>
                    {header}

                    <main className={ this.props.mainClass ? this.props.mainClass : `bg-whitegrey-l2 pb5 pb10-ns` }>
                        {children}
                    </main>

                    <Footer />
                </SearchWrapper>
            </>
        )
    }
}

DefaultLayout.defaultProps = {
    headerDividerStyle: `shadow`,
    bodyClass: `bg-white`,
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
