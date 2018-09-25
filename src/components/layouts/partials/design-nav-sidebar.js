import React from 'react'
import { Link } from 'gatsby'
import { Spirit } from '../../spirit-styles'

const NavSidebar = () => (
    <>
        <nav className="mr5 miw50">
            <h3 className={ Spirit.h6 }>Docs Design System</h3>
            <ul className="ma0 pa0 list mt4">
                <li className="mb5"><Link to="/design/styling/" className="link midgrey">Styling</Link></li>
                <li className="mb5"><Link to="/design/page-templates/" className="link midgrey">Page templates</Link></li>
                <li className="mb5"><Link to="/design/typography/" className="link midgrey">Typography</Link></li>
                <li className="mb5"><Link to="/design/components/" className="link midgrey">Components</Link></li>
            </ul>
        </nav>
    </>
)

export default NavSidebar