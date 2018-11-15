import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

class SidebarLink extends React.Component {
    render() {
        if (this.props.link) {
            if (this.props.link.match(/^\s?http(s?)/gi)) {
                return (
                    <a href={ this.props.link } className={ `link db pv6px pr2 lh-1-5 pl0 ` + this.props.linkClasses } target="_blank" rel="noopener noreferrer">{ this.props.title }</a>
                )
            } else {
                return (
                    <Link to={ this.props.link } className={ `link db pv6px pr2 lh-1-5 pl0 ${this.props.linkClasses}` }>{ this.props.title }</Link>
                )
            }
        } else {
            return (
                <>{ this.props.title }</>
            )
        }
    }
}

SidebarLink.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    linkClasses: PropTypes.string.isRequired,
}

export default SidebarLink
