import React from 'react'
import Prism from 'prismjs'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled from "styled-components"

import Header from './partials/header'

import '../custom.css'
import 'ghost-spirit/public/spirit-brand.css'

class DefaultLayout extends React.Component {

    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        const children = this.props.children
        return(
            <StaticQuery
                query={ graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
                render={ data => (
                    <>
                        <Helmet>
                            <title>{ data.site.siteMetadata.title }</title>

                            <meta name="description" content="Ghost Docs" />

                            <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/6076934/7558352/css/fonts.css" />

                            <html lang="en" className="fs-base" />
                            <body className="main-layout flex flex-column whitney f-default fw4 middarkgrey readability" />

                        </Helmet>
                        <Header />
                        <main className="bg-grey">
                            { children }
                        </main>
                    </>
                ) }
            />
        )
    }
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default DefaultLayout
