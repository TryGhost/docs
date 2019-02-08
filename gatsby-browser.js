const onRouteUpdate = require(`./gatsby/onRouteUpdate`)
const onPreRouteUpdate = require(`./gatsby/onPreRouteUpdate`)

exports.onRouteUpdate = () => {
    return {
        trustAllScripts: onRouteUpdate(),
    }
}

exports.onPreRouteUpdate = () => {
    return {
        killServiceWorker: onPreRouteUpdate(),
    }
}
