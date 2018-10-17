import React from 'react'
import { Link } from "gatsby"
import { Spirit } from '../../spirit-styles'
import PropTypes from 'prop-types'

import Logo from "../../global/logo"

// Theme definitions
const headerSkin = {
    dark: {
        menuItem: `middarkgrey-l1 link hover-blue word-nowrap`,
        logoTheme: `dark`,
        docsTitleClass: `blue`,
        searchBox: `bg-darkgrey-searchbar middarkgrey dark-placeholder`,
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
                    <div className="flex items-center pt3 pb3 nudge-bottom--2 w-sidebar">
                        <a href="https://ghost.org" className="nudge-top--3"><Logo theme={ this.props.theme } /></a>
                        <Link className={theme.docsTitleClass + ` gh-nav-logo-suffix relative ma0 ml4 pa0 pl4 f6 lh-1-5 fw4 link nudge-top--2` } to="/">Docs</Link>
                    </div>
                    <div className="dn flex-ns items-center">
                        <Link className={ theme.menuItem + ` f-supersmall-m f8-l pa3 mr3 nl3`} to="/concepts/introduction/">Concepts</Link>
                        <Link className={ theme.menuItem + ` f-supersmall-m f8-l pa3 mr3` } to="/setup/">Setup</Link>
                        <Link className={ theme.menuItem + ` f-supersmall-m f8-l pa3 mr3` } to="/tutorials/">Tutorials</Link>
                        <Link className={ theme.menuItem + ` f-supersmall-m f8-l pa3 mr3` } to="/api/">API</Link>
                        <Link className={ theme.menuItem + ` f-supersmall-m f8-l pa3 mr3` } to="/integrations/">Integrations</Link>
                        <Link className={ theme.menuItem + ` f-supersmall-m f8-l pa3 mr3` } to="/faq/">FAQ</Link>
                    </div>
                </div>
                <div className={ `flex-auto flex-nowrap justify-end items-center ` + (this.props.searchField ? `flex` : ` dn`) }>
                    <div className="relative">
                        <label htmlFor="globalnavsearch" className="clip">Search</label>
                        <input id="globalnavsearch" name="globalnavsearch" type="text" className={ theme.searchBox + ` f8 pa2 pl4 pr4 ba f8 fw4 br3 whitney form-text bn br-pill w-sidebar dn db-l lh-1-0` } placeholder="Search documentation..." />
                    </div>
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
}

export default NavBar
