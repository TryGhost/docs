import React from 'react'
import { Link } from "gatsby"

import Logo from "components/global/logo"

const Header = () => (
    <header className="shadow-2">
        <nav className="flex flex-auto flex-nowrap items-start justify-between">
            <div className="flex flex-auto flex-nowrap items-center">
                <Link className="pa2" to="/"><Logo /> {/* TODO: Prop to pass in height value? */}</Link>
                <Link className="pa2" to="/setup/">Setup</Link>
                <Link className="pa2" to="/concepts/introduction/">Core Concepts</Link>
                <Link className="pa2" to="/tutorials/">Tutorials</Link>
                <Link className="pa2" to="/api/">API</Link>
                <Link className="pa2" to="/integrations/">Integrations</Link>
                <Link className="pa2" to="/faq/">FAQ</Link>
            </div>
            <div className="flex flex-auto flex-nowrap justify-end items-center">
                <div className="relative">
                    <input name="foo" type="text" className="db pa2 ba midgrey f8 fw4 br3 whitney form-text b--lightgrey" placeholder="Placeholder"></input>
                </div>
            </div>
        </nav>
    </header>
)

export default Header
