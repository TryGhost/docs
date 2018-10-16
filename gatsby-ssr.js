const React = require(`react`)
const algoliaScript = `https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js`
const algoliaStyle = `https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css`

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents, getPostBodyComponents, replacePostBodyComponents }) => {
    const headComponents = getHeadComponents()
    const postBodyComponents = getPostBodyComponents()

    // <link key={url} rel="preload" href={url} as="script" />
    headComponents.push(React.createElement(`link`, {
        key: algoliaScript,
        rel: `preload`,
        as: `script`,
        href: algoliaScript,
    }))

    // <link type="text/css" href={url} rel="stylesheet" />
    headComponents.push(React.createElement(`link`, {
        key: algoliaStyle,
        type: `text/css`,
        href: algoliaStyle,
        rel: `stylesheet`,
    }))

    // <script key={url} src={url} />
    postBodyComponents.push(React.createElement(`script`, {
        type: `text/javascript`,
        key: algoliaScript,
        src: algoliaScript,
    }))

    replaceHeadComponents(headComponents)
    replacePostBodyComponents(postBodyComponents)
}
