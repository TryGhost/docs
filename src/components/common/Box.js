import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Box = ({ children, to, href, className, elevation, radius, onWhite }) => {
    const baseBoxClass = `bg-white`
    // Shadow classes
    const shadowClasses = `shadow-${elevation} ${(href || to ? `box-shadow-hover shadow-${elevation}-hover` : ``)}`
    // Border radius clss
    const radiusClasses = `br${radius}`

    if (to) {
        // internal links
        return (
            <Link
                to={to}
                className={`${baseBoxClass} ${shadowClasses} ${(onWhite ? `on-white` : ``)} ${radiusClasses} db ${className}`}
            >
                {children}
            </Link>
        )
    } else if (href) {
        // external links
        return (
            <a
                href={href}
                className={`${baseBoxClass} ${shadowClasses} ${(onWhite ? `on-white` : ``)} ${radiusClasses} db ${className}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        )
    } else {
        // non-link boxes
        return (
            <div className={`${baseBoxClass} ${shadowClasses} ${radiusClasses} ${className}`}>
                {children}
            </div>
        )
    }
}

Box.defaultProps = {
    elevation: `2`,
    radius: `3`,
    onWhite: false,
}

Box.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
    href: PropTypes.string,
    elevation: PropTypes.string,
    radius: PropTypes.string,
    onWhite: PropTypes.bool,
    className: PropTypes.string,
}

export default Box
