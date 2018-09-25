import React from 'react'
import { Link } from 'gatsby'

const NavSidebar = () => (
    <>
        <nav className="mr5 miw50">
            <h3 className="f8 ttu fw6 pa0 ma0 measure-0-4 pb2">Setup</h3>
            <ul className="ma0 pa0 list mt4 f8">
                <li className="mb4"><Link to="" className="link midgrey">What is Ghost?</Link></li>
                <li className="mb6">
                    <h4 className="fw4"><Link to="" className="link midgrey">Setting up a site</Link></h4>
                    <ul className="list ma0 pa0 ml6">
                        <li className="mb3 lh-1-4"><Link to="" className="link blue fw6">Ghost(Pro)</Link></li>
                        <li className="mb3 lh-1-4"><Link to="" className="link midgrey">1-click Images</Link></li>
                        <li className="mb3 lh-1-4"><Link to="" className="link midgrey">Install from Ghost CLI</Link></li>
                    </ul>
                </li>
                <li className="mb6">
                    <h4 className="fw4"><Link to="" className="link midgrey">Community packages</Link></h4>
                    <ul className="list ma0 pa0 ml6">
                        <li className="mb3 lh-1-4"><Link to="" className="link midgrey">Docker</Link></li>                        
                    </ul>
                </li>
                <li className="mb6">
                    <h4 className="fw4"><Link to="" className="link midgrey">Install locally</Link></h4>
                    <ul className="list ma0 pa0 ml6">
                        <li className="mb3 lh-1-4"><Link to="" className="link midgrey">Trying out Ghost</Link></li>
                        <li className="mb3 lh-1-4"><Link to="" className="link midgrey">Theme development</Link></li>
                        <li className="mb3 lh-1-4"><Link to="" className="link midgrey">Contribution</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </>
)

export default NavSidebar
