import React from "react"
import PropTypes from "prop-types"

const JS_NPM_URLS = [
    `https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js`,
]

export default class HTML extends React.Component {
    render() {
        return (
            <html {...this.props.htmlAttributes}>
                <head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    {JS_NPM_URLS.map(url => (
                        <link key={url} rel="preload" href={url} as="script" />
                    ))}
                    {this.props.headComponents}
                </head>
                <body {...this.props.bodyAttributes}>
                    {this.props.preBodyComponents}
                    <div
                        key={`body`}
                        id="___gatsby"
                        dangerouslySetInnerHTML={{ __html: this.props.body }}
                    />
                    {this.props.postBodyComponents}
                    {JS_NPM_URLS.map(url => (
                        <script key={url} src={url} />
                    ))}
                </body>
            </html>
        )
    }
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
}
