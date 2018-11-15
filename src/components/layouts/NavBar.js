import React from 'react'
import { Link } from "gatsby"
import { Spirit } from '../spirit-styles'
import PropTypes from 'prop-types'

import { Logo } from "../global"
import SearchModal from '../global/search-modal'

// Theme definitions
const headerSkin = {
    dark: {
        menuItem: `middarkgrey-l1 link hover-blue nowrap`,
        logoTheme: `dark`,
        docsTitleClass: `blue`,
        searchBox: `bg-darkgrey-searchbar middarkgrey dark-placeholder`,
        icon: `fill-midlightgrey`,
    },
    light: {
        menuItem: Spirit.link.white,
        logoTheme: `light`,
        docsTitleClass: `white`,
        searchBox: `bg-white-10 white white-placeholder`,
        icon: `fill-white`,
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
            <nav className={ Spirit.page.xl + `flex flex-auto flex-nowrap items-center justify-between pt2 pb2` } data-cy="header-navigation">
                <div className="flex items-center pt3 pb3 nudge-bottom--2 w-sidebar-l pr8">
                    <a href="https://ghost.org" className="nudge-top--3"><Logo theme={ this.props.theme } /></a>
                    <Link className={theme.docsTitleClass + ` gh-nav-logo-suffix relative ma0 ml4 pa0 pl4 f6 lh-1-5 fw4 link nudge-top--1` } to="/">Docs</Link>
                </div>
                <div className="dn flex-ns flex-auto items-center overflow-x-auto mr12 mr0-l ml5 ml0-l">
                    <Link className={ theme.menuItem + ` nowrap f8 pa3 mr1 mr3-l nl3`} to="/concepts/introduction/">Concepts</Link>
                    <Link className={ theme.menuItem + ` nowrap f8 pa3 mr1 mr3-l` } to="/setup/">Setup</Link>
                    <Link className={ theme.menuItem + ` nowrap f8 pa3 mr1 mr3-l` } to="/tutorials/">Tutorials</Link>
                    <Link className={ theme.menuItem + ` nowrap f8 pa3 mr1 mr3-l` } to="/integrations/">Integrations</Link>
                    <Link className={ theme.menuItem + ` nowrap f8 pa3 mr1 mr3-l` } to="/api/">API Reference</Link>
                    <Link className={ theme.menuItem + ` nowrap f8 pa3 mr1 mr3-l` } to="/faq/">FAQ</Link>
                </div>
                <div className="relative pl3">
                    <SearchModal theme={theme} />
                </div>
            </nav>
        )
    }
}

NavBar.defaultProps = {
    theme: `dark`,
    searchField: true,
}

NavBar.propTypes = {
    theme: PropTypes.oneOf([`dark`, `light`]),
    searchField: PropTypes.bool,
    location: PropTypes.object,
}

export default NavBar
