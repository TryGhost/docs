import React from 'react'
import { Spirit } from '../../spirit-styles'
import PropTypes from 'prop-types'

class SectionHeading extends React.Component {
    render() {
        const containerClass = (this.props.type === `block` ? `pa-vw4 tc` : `pt20 pb10`)
        const children = this.props.children

        return (
            <div className={ containerClass }>
                <h1 className={ Spirit.sectionHeading + (this.props.theme === `light` ? ` white` : ``) }>{ this.props.title }</h1>
                <h2 className={ Spirit.sectionSubHeading + (this.props.theme === `light` ? ` white` : `midgrey`) }>{ this.props.subtitle }</h2>
                { children }
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
