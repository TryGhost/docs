import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
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
        Prism.highlightAll();
    }

    render() {
        const children = this.props.children
        return (
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
                            <html lang="en" className="fs-base" />
                            <title>{ data.site.siteMetadata.title }</title>
                            <meta name="description" content="Ghost Docs" />
                            <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/6076934/7558352/css/fonts.css" />
                            <body class="flex flex-column whitney f-default fw4 middarkgrey readability" />
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

// const DefaultLayout = ({ children }) => (
//     <StaticQuery
//         query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//         render = {data => (
//       <>
//         <Helmet>
//             <html lang="en" className="fs-base" />
//             <title>{ data.site.siteMetadata.title }</title>
//             <meta name="description" content="Ghost Docs" />
//             <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/6076934/7558352/css/fonts.css" />
//             <body class="flex flex-column whitney f-default fw4 middarkgrey readability" />
//         </Helmet>
//         <Header />
//         <main className="bg-grey">
//             {children}
//         </main>
//       </>
//         )}
//     />
// )

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default DefaultLayout
