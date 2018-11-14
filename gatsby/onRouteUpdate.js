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
    const scriptNodes = document.querySelectorAll(`.external-scripts script`)

    scriptNodes.forEach((node) => {
        // @TODO do the same for inline scripts?
        if (node.attributes.src) {
            let s = document.createElement(`script`)
            s.type = `text/javascript`
            s.src = node.attributes.src.value
            document.getElementsByTagName(`head`)[0].appendChild(s)
        }
    })
}

module.exports = function () {
    trustAllScripts()
}
