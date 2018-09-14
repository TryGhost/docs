import React from 'react'
import { Link } from "gatsby"
import { SpiritStyle } from '../../spirit-brand/spirit-styles'

import Logo from "components/global/logo"

const Header = () => (
    <header className="bg-white shadow-2 fixed top-0 left-0 right-0">
        <nav className="flex flex-auto flex-nowrap items-start justify-between mw10 center pt6 pb6">
            <div className="flex flex-auto flex-nowrap items-center f8">
                <Link className="flex items-center pr15" to="/"><Logo /> {/* TODO: Prop to pass in height value? */}</Link>
                <Link className={ SpiritStyle.link.middarkgrey + ` pr7`} to="/setup/">Setup</Link>
                <Link className={ SpiritStyle.link.middarkgrey + ` pr7`} to="/concepts/introduction/">Core Concepts</Link>
                <Link className={ SpiritStyle.link.middarkgrey + ` pr7`} to="/tutorials/">Tutorials</Link>
                <Link className={ SpiritStyle.link.middarkgrey + ` pr7`} to="/api/">API</Link>
                <Link className={ SpiritStyle.link.middarkgrey + ` pr7`} to="/integrations/">Integrations</Link>
                <Link className={ SpiritStyle.link.middarkgrey + ` pr7`} to="/faq/">FAQ</Link>
            </div>
            <div className="flex flex-auto flex-nowrap justify-end items-center">
                <div className="relative">
                    <input name="foo" type="text" className="f8 pa2 pl4 pr4 ba midgrey f8 fw4 br3 whitney form-text bn br-pill bg-whitegrey-l1" placeholder="Search..." />
                </div>
            </div>
        </nav>
    </header>
)

export default Header
