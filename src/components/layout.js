import './custom.css'
import 'ghost-spirit/public/spirit-brand.css'
import Header from './header'
import Helmet from 'react-helmet'

import PropTypes from 'prop-types'

// CSS
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Layout = ({ children }) => (
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
        render={data => (
      <>
        <Helmet
            title={data.site.siteMetadata.title}
            meta={[
                { name: `description`, content: `Ghost Docs` },
                { name: `keywords`, content: `documentation, ghost` },
            ]}
        >
            <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="bg-grey">
            {children}
        </div>
      </>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
