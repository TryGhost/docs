import React from 'react'
import PropTypes from 'prop-types'

class Icon extends React.Component {
    render() {
        const IconFile = require(`../../images/icons/${this.props.name}.svg`)

        return (
            <IconFile className={this.props.className} data-cy={`${this.props.name}-icon`}/>
        )
    }
}

Icon.defaultProps = {
    name: ``,
    className: ``,
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
}

export default Icon
