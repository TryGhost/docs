import React from 'react'
import NavBar from './navbar'
import PropTypes from 'prop-types'

class Header extends React.Component {
    render() {
        var headerShadow

        switch (this.props.dividerStyle) {
        case `hairline`:
            headerShadow = `bb b--whitegrey`
            break

        case `shadow`:
            headerShadow = `header-shadow`
            break

        case `none`:
            headerShadow = ``
            break
        }

        return (
            <>
                <header className={ headerShadow + ` fixed bg-white top-0 left-0 right-0 z-9999 mb10` }>
                    <NavBar theme="dark" />
                </header>
                <div className="h17"></div> {/* We need to push down all the content because of the fixed header */}
            </>
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
