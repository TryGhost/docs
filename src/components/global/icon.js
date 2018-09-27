import React from 'react'
import PropTypes from 'prop-types'

class Logo extends React.Component {
    render() {
        const Icon = require(`../../images/icons/` + this.props.name + `.svg`)

        return (
            <Icon className={ this.props.className } />
        )
    }
}

Logo.defaultProps = {
    name: ``,
    className: ``,
}

Logo.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
}

export default Logo
