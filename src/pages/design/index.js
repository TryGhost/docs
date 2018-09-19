import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layouts/default'

const DesignIndex = () => (
    <Layout title="Home" headerDividerStyle="shadow">
        <div className="center">
            <div className="pa20 pb30 tc">
                <h1 className="f-headline ma0 mb2">Docs Design System</h1>
                <h2 className="f4 fw3 ma0">Design stuff for the new docs</h2>
            </div>
            <div className="bg-white br4 shadow-1 pa15 pt12 pb12">
                <div className="post-content">
                    <h1>Page Templates</h1>
                    <ul>
                        <li><Link to="/design/page-templates/section-landing/">Section landing page</Link></li>
                        <li><Link to="/design/page-templates/custom-section-landing/">Custom section landing</Link></li>
                        <li><Link to="/design/page-templates/posts-landing/">Posts landing</Link></li>
                        <li><Link to="/design/page-templates/full-width/">Full width</Link></li>
                        <li><Link to="/design/page-templates/left-sidebar/">Left sidebar</Link></li>
                        <li><Link to="/design/page-templates/left-sidebar-nav/">Left sidebar + inner nav</Link></li>
                    </ul>

                    <h1>Typography</h1>
                    <ul>
                        <li><Link to="/design/typography/">Type scale and vertical rhythm</Link></li>
                    </ul>
                    
                    <h1>Components</h1>
                    <h2>Headers</h2>
                    <ul>
                        <li><Link to="/design/hairline-header/">Hairline</Link></li>
                        <li><Link to="/design/shadow-header/">Shadow</Link></li>
                        <li><Link to="/design/custom-header/">Custom</Link></li>
                    </ul>

                    <h2>Boxes</h2>
                    <ul>
                        <li><Link to="/design/white-box/">White Box</Link></li>
                        <li><Link to="/design/outline-box/">Outline Box</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    </Layout>
)

export default DesignIndex
