import React from 'react'
import { Link } from "gatsby"
import { Spirit } from '../../spirit-styles'
import PropTypes from 'prop-types'

import Logo from "../../global/logo"

// Theme definitions
const headerSkin = {
    dark: {
        menuItem: Spirit.link.middarkgrey + ` word-nowrap`,
        logoTheme: `dark`,
        docsTitleClass: `blue`,
        searchBox: `bg-whitegrey-l1 middarkgrey dark-placeholder`,
    },
    light: {
        menuItem: Spirit.link.white,
        logoTheme: `light`,
        docsTitleClass: `white`,
        searchBox: `bg-white-20 white white-placeholder`,
    },
}

class NavBar extends React.Component {
    render() {
        var theme

        switch (this.props.theme) {
        case `light`:
            theme = headerSkin.light
            break

        case `dark`:
            theme = headerSkin.dark
            break
        }

        return (
            <nav className={ Spirit.page.xl + `flex flex-auto flex-nowrap items-center justify-between pt2 pb2` }>
                <div className="flex flex-auto flex-nowrap items-center f8">
                    <div className="flex items-center pt3 pb3 mr12 nudge-bottom--2">
                        <a href="https://ghost.org" className="nudge-top--3"><Logo theme={ this.props.theme } /></a>
                        <Link className={theme.docsTitleClass + ` gh-nav-logo-suffix relative ma0 ml4 pa0 pl4 f6 lh-1-5 fw4 link nudge-top--1` } to="/">Docs</Link>
                    </div>
                    <div className="dn flex-ns items-center">
                        <Link className={ theme.menuItem + ` f-supersmall-m f8-l mr7` } to="/setup/">Setup</Link>
                        <Link className={ theme.menuItem + ` f-supersmall-m f8-l mr7` } to="/concepts/introduction/">Core Concepts</Link>
                        <Link className={ theme.menuItem + ` f-supersmall-m f8-l mr7` } to="/tutorials/">Tutorials</Link>
                        <Link className={ theme.menuItem + ` f-supersmall-m f8-l mr7` } to="/api/">API</Link>
                        <Link className={ theme.menuItem + ` f-supersmall-m f8-l mr7` } to="/integrations/">Integrations</Link>
                        <Link className={ theme.menuItem + ` f-supersmall-m f8-l mr7` } to="/faq/">FAQ</Link>
                    </div>
                </div>
                <div className="flex flex-auto flex-nowrap justify-end items-center">
                    <div className="relative">
                        <input name="foo" type="text" className={ theme.searchBox + ` f8 pa2 pl4 pr4 ba f8 fw4 br3 whitney form-text bn br-pill sidebar-min-width dn db-l` } placeholder="Search Ghost docs..." />
                    </div>
                </div>
            </nav>
        )
    }
}

NavBar.defaultProps = {
    theme: `dark`,
}

NavBar.propTypes = {
    theme: PropTypes.oneOf([`dark`, `light`]),
}

export default NavBar
