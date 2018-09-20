import React from 'react'
import { SpiritStyles } from '../../spirit-styles'
import PropTypes from 'prop-types'

class SectionHeading extends React.Component {
    render() {

        const containerClass = (this.props.type === `block` ? `pa30 tc` : `pt20 pb10`)

        return (
            <div className={ containerClass }>
                <h1 className={ SpiritStyles.sectionHeading + (this.props.theme === `light` ? ` white` : ``) }>{ this.props.title }</h1>
                <h2 className={ SpiritStyles.sectionSubHeading + (this.props.theme === `light` ? ` white` : ``) }>{ this.props.subtitle }</h2>
            </div>
        )
    }
}

SectionHeading.defaultProps = {
    theme: `dark`,
    type: `block`,
}

SectionHeading.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    type: PropTypes.oneOf([`block`, `blog`]),
    theme: PropTypes.oneOf([`dark`, `light`]),
}

export default SectionHeading
