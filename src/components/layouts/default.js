import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Header from './partials/header'


import '../custom.css'
import 'ghost-spirit/public/spirit-brand.css'

const DefaultLayout = ({ children }) => (
    <StaticQuery
        query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
        render = {data => (
      <>
        <Helmet
            title = {data.site.siteMetadata.title}
            meta = {[
                { name: `description`, content: `Ghost Docs` },
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

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default DefaultLayout
