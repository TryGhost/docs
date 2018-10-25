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
    const scriptNodes = document.querySelectorAll(`.post-content script`)

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
/**
 * Kill service workers
 *
 * When service workers prevent cause weird behaviour,
 * set SERVICE_WORKER_KILL_SWITCH to true and deploy this change
 *
 */
// const SERVICE_WORKER_KILL_SWITCH = true

// const killServiceWorker = () => {
//     if (SERVICE_WORKER_KILL_SWITCH && `serviceWorker` in navigator) {
//         navigator.serviceWorker.getRegistrations().then(registratons => registratons.forEach((registration) => {
//             console.log(`Unregister service worker:`, registration)
//             return registration.unregister()
//         }))
//     }
// }

// exports.onPreRouteUpdate = function () {
//     killServiceWorker()
// }
