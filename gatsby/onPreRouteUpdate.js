/**
 * Kill service workers
 *
 * When service workers prevent cause weird behaviour,
 * set SERVICE_WORKER_KILL_SWITCH in config to true and trigger build
 *
 */
const SERVICE_WORKER_KILL_SWITCH = (process.env.SERVICE_WORKER_KILL_SWITCH === `true`) || false

const killServiceWorker = () => {
    // && /https/.test(location.protocol)
    if (SERVICE_WORKER_KILL_SWITCH && `serviceWorker` in navigator) {
        navigator.serviceWorker.getRegistrations().then(registratons => registratons.forEach((registration) => {
            console.log(`Unregister service worker:`, registration)
            return registration.unregister()
        }))
    }
}

module.exports = function () {
    killServiceWorker()
}
