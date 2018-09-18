/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

/**
 * Trust All Scripts
 *
 * This is a dirty little script for iterating over script tags
 * and adding them to the document head.
 *
 * This works for any script that then injects content into the page
 * via ids/classnames etc.
 */
const trustAllScripts = () => {
    var scriptNodes = document.querySelectorAll(`.post-content script`)

    scriptNodes.forEach((node) => {
        // @TODO do the same for inline scripts?
        if (node.attributes.src) {
            var s = document.createElement(`script`)
            s.type = `text/javascript`
            s.src = node.attributes.src.value
            document.getElementsByTagName(`head`)[0].appendChild(s)
        }
    })
}

exports.onRouteUpdate = function () {
    trustAllScripts()
}
