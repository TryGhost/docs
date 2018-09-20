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
                <div>
                    <h1 className="bb b--whitegrey pa0 ma0 pb4">Page Templates</h1>
                    <div className="grid">
                        <ul className="col-6 flex-auto list lh-2-0">
                            <li><h2>Section landing pages</h2></li>
                            <li><Link className="link blue" to="/design/page-templates/section-landing/">Section landing page</Link></li>
                            <li><Link className="link blue" to="/design/page-templates/custom-section-landing/">Custom section landing</Link></li>
                            <li><Link className="link blue" to="/design/page-templates/posts-landing/">Posts landing</Link></li>
                        </ul>
                        <ul className="col-6 flex-auto list lh-2-0">
                            <li><h2>Posts</h2></li>
                            <li><Link className="link blue" to="/design/page-templates/full-width/">Full width page</Link></li>
                            <li><Link className="link blue" to="/design/page-templates/left-sidebar/">Left sidebar only</Link></li>
                            <li><Link className="link blue" to="/design/page-templates/toc-only/">TOC only</Link></li>
                            <li><Link className="link blue" to="/design/page-templates/left-sidebar-toc/">Left sidebar + TOC</Link></li>
                        </ul>
                    </div>

                    <h1 className="bb b--whitegrey pa0 ma0 pb4 mt15">Typography</h1>
                    <ul className="flex-auto ma0 pa0 list mr6 mt4 lh-2-0">
                        <li><Link className="link blue" to="/design/typography/">Type scale and vertical rhythm</Link></li>
                    </ul>
                    
                    <h1 className="bb b--whitegrey pa0 ma0 pb4 mt15">Components</h1>
                    <div className="grid">
                        <ul className="col-6 list lh-2-0 w-50">
                            <li><h2>Headers</h2></li>
                            <li><Link className="link blue" to="/design/hairline-header/">Hairline</Link></li>
                            <li><Link className="link blue" to="/design/shadow-header/">Shadow</Link></li>
                            <li><Link className="link blue" to="/design/custom-header/">Custom</Link></li>
                        </ul>
                        <ul className="col-6 list lh-2-0 w-50">
                            <li><h2>Boxes</h2></li>
                            <li><Link className="link blue" to="/design/white-box/">White Box</Link></li>
                            <li><Link className="link blue" to="/design/outline-box/">Outline Box</Link></li>
                        </ul>
                        <ul className="col-6 list lh-2-0 w-50">
                            <li><h2>Doc navigation</h2></li>
                            <li><Link className="link blue" to="/design/white-box/">Left sidebar</Link></li>
                            <li><Link className="link blue" to="/design/outline-box/">Page jump sidebar</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default DesignIndex
