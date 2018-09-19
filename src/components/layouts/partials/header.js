import React from 'react'
import NavBar from './navbar'
import PropTypes from 'prop-types'

class Header extends React.Component {
    render() {
        var headerShadow

        switch (this.props.dividerStyle) {
        case `hairline`:
            headerShadow = `shadow-1`
            break

        case `shadow`:
            headerShadow = `shadow-2`
            break

        case `none`:
            headerShadow = ``
            break
        }

        return (
            <header className={ headerShadow + ` bg-white top-0 left-0 right-0 z-9999 mb10` }>
                <NavBar theme="dark" />
            </header>
        )
    }
}

Header.defaultProps = {
    dividerStyle: `hairline`,
}

Header.propTypes = {
    dividerStyle: PropTypes.oneOf([`hairline`, `shadow`, `none`]),
}

export default Header
