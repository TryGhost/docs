const React = require(`react`)

module.exports = ({ setPreBodyComponents }) => {
    setPreBodyComponents([
        <noscript key="noscript">Your browser does not support JavaScript!</noscript>,
    ])
}
