import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './partials/header'
import Helmet from 'react-helmet'

// import '../custom.css'
// import 'ghost-spirit/public/spirit-brand.css'

const ErrorLayout = ({ children }) => (
    <StaticQuery
        query={graphql`
      query ErrorTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
        render = {() => (
      <>
        <Helmet
            title = "Error"
            meta = {[
                { name: `description`, content: `An error was enountered` },
            ]}
        >
            <html lang="en" />
        </Helmet>
        <Header />
        <main className="bg-grey">
            {children}
        </main>
      </>
        )}
    />
)

ErrorLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ErrorLayout
