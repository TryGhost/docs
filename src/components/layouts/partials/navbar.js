import React from 'react'
import { Link } from "gatsby"
import { SpiritStyle } from '../../spirit-brand/spirit-styles'

import Logo from "../../global/logo"

// Theme definitions
const headerSkin = {
    dark: {
        menuItem: SpiritStyle.link.middarkgrey,
        searchBox: `bg-whitegrey-l1 middarkgrey dark-placeholder`,
    },
    light: {
        menuItem: SpiritStyle.link.white,
        searchBox: `bg-white-20 white white-placeholder`,
    },
}


class NavBar extends React.Component {

    render() {

        var theme;

        switch (this.props.theme) {
            case "light":
                theme = headerSkin.light
                break;

            case "dark":
            default:
                theme = headerSkin.dark
                break;
        }

        return(
            <nav className="flex flex-auto flex-nowrap items-start justify-between mw-xl center pt6 pb6">
                <div className="flex flex-auto flex-nowrap items-center f8">
                    <Link className="flex items-center mr15" to="/"><Logo theme={ this.props.theme } /></Link>
                    <Link className={ theme.menuItem + ` mr7` } to="/setup/">Setup</Link>
                    <Link className={ theme.menuItem + ` mr7` } to="/concepts/introduction/">Core Concepts</Link>
                    <Link className={ theme.menuItem + ` mr7` } to="/tutorials/">Tutorials</Link>
                    <Link className={ theme.menuItem + ` mr7` } to="/api/">API</Link>
                    <Link className={ theme.menuItem + ` mr7` } to="/integrations/">Integrations</Link>
                    <Link className={ theme.menuItem + ` mr7` } to="/faq/">FAQ</Link>
                </div>
                <div className="flex flex-auto flex-nowrap justify-end items-center">
                    <div className="relative">
                        <input name="foo" type="text" className={ theme.searchBox + " f8 pa2 pl4 pr4 ba f8 fw4 br3 whitney form-text bn br-pill sidebar-min-width" } placeholder="Search..." />
                    </div>
                </div>
            </nav>
        )
    }

}

export default NavBar
