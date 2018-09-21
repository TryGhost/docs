import React from 'react'
import { Link } from 'gatsby'
// import { SpiritStyles } from '../../spirit-styles'

const TOC = () => (
    <>
        <nav className="pl10 miw50 nr5 sticky top-25">
            <h3 className="f7 fw4 measure-0-4 ma0 pa0 ttu pb2 bb b--whitegrey lightgrey">On this page</h3>
            <ul className="ma0 pa0 list mt4 f8">
                <li className="mb4"><Link to="" className="link midgrey">Overview</Link></li>
                <li className="mb4"><Link to="" className="link midgrey">Errors</Link></li>
                <li className="mb4"><Link to="" className="link midgrey">Pagination</Link></li>
                <li className="mb4"><Link to="" className="link midgrey">Parameters</Link></li>
                <li className="mb8">
                    <h4 className="fw4 mb4"><Link to="" className="link midgrey">Client authentication</Link></h4>
                    <ul className="list ma0 pa0 ml7">
                        <li className="mb3 lh-1-4"><Link to="" className="link blue fw6">Making requests</Link></li>
                        <li className="mb3 lh-1-4"><Link to="" className="link midgrey">Available clients</Link></li>
                        <li className="mb3 lh-1-4"><Link to="" className="link midgrey">Client restrictions</Link></li>
                    </ul>
                </li>
                <li className="mb4"><Link to="" className="link midgrey">User authentication</Link></li>
                <li className="mb4"><Link to="" className="link midgrey">Public endpoints</Link></li>
                <li className="mb4"><Link to="" className="link midgrey">Client endpoints</Link></li>
                <li className="mb4"><Link to="" className="link midgrey">Resources</Link></li>
            </ul>
        </nav>
    </>
)

export default TOC