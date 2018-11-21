import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const getBoxClass = ({ elevation, onWhite, radius, to, href }) => {
    // Classes for setting shadows
    const shadowClasses = `shadow-${elevation} ${(onWhite ? `on-white` : ``)} ${(href || to ? `box-shadow-hover shadow-${elevation}-hover` : ``)} `

    // Classes for setting border radius
    const radiusClasses = `br${radius}`

    return shadowClasses + radiusClasses
}
class Box extends React.Component {
    render() {
        const children = this.props.children
        const baseBoxClass = `bg-white`
        const dynamicBoxClasses = getBoxClass(this.props)

        if (this.props.to) {
            return (
                <Link to={this.props.to} className={`${baseBoxClass} ${dynamicBoxClasses} db ${this.props.className}`}>
                    {children}
                </Link>
            )
        } else if (this.props.href) {
            return (
                <a href={this.props.href} className={`${baseBoxClass} ${dynamicBoxClasses} db ${this.props.className}`} target="_blank" rel="noopener noreferrer">
                    {children}
                </a>
            )
        } else {
            return (
                <div className={`${baseBoxClass} ${dynamicBoxClasses} ${this.props.className}`}>
                    {children}
                </div>
            )
        }
    }
}

Box.defaultProps = {
    to: ``,
    href: ``,
    elevation: `2`,
    radius: `3`,
    onWhite: false,
    linkClassName: `link`,
}

Box.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    elevation: PropTypes.string,
    radius: PropTypes.string,
    onWhite: PropTypes.bool,
    className: PropTypes.any,
    children: PropTypes.node.isRequired,
}

export default Box
