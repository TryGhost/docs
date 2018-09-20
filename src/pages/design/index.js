import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layouts/default'
import { SpiritStyles } from '../../components/spirit-styles';
import SectionHeading from '../../components/layouts/partials/section-heading';

const DesignIndex = () => (
    <Layout title="Home" headerDividerStyle="shadow">
        <div className="center mw-l">
            <SectionHeading title="Ghost Docs Design System" subtitle="Stuff for designing new stuff" />
            <div className="bg-white br4 shadow-1 pa15 pt12 pb12">
                <div>
                    <h2 className={ SpiritStyles.h2 }>Page Templates</h2>
                    <div className="grid">
                        <ul className="col-6 flex-auto list lh-2-0">
                            <li><h3 className={ SpiritStyles.h3 + ` mb2` }>Section landing pages</h3></li>
                            <li><Link className="link blue" to="/design/page-templates/section-landing/">Section landing page</Link></li>
                            <li><Link className="link blue" to="/design/page-templates/custom-section-landing/">Custom section landing</Link></li>
                            <li><Link className="link blue" to="/design/page-templates/posts-landing/">Posts landing</Link></li>
                        </ul>
                        <ul className="col-6 flex-auto list lh-2-0">
                            <li><h3 className={ SpiritStyles.h3 + `mb2` }>Posts</h3></li>
                            <li><Link className="link blue" to="/design/page-templates/standalone/">Standalone post</Link></li>
                            <li><Link className="link blue" to="/design/page-templates/left-sidebar/">Left sidebar only</Link></li>
                            <li><Link className="link blue" to="/design/page-templates/toc-only/">TOC only</Link></li>
                            <li><Link className="link blue" to="/design/page-templates/left-sidebar-toc/">Left sidebar + TOC</Link></li>
                        </ul>
                    </div>

                    <h2 className={ SpiritStyles.h2 + `mt14` }>Typography</h2>
                    <ul className="flex-auto ma0 pa0 list mr6 mt4 lh-2-0">
                        <li><Link className="link blue" to="/design/typography/">Post typography</Link></li>
                        <li><Link className="link blue" to="/design/typography/ui">UI typography</Link></li>
                    </ul>
                    
                    <h2 className={ SpiritStyles.h2 + `mt14` }>Components</h2>
                    <div className="grid">
                        <ul className="col-6 list lh-2-0 w-50">
                            <li><h3 className={ SpiritStyles.h3 + `mb2` }>Headers</h3></li>
                            <li><Link className="link blue" to="/design/hairline-header/">Hairline</Link></li>
                            <li><Link className="link blue" to="/design/shadow-header/">Shadow</Link></li>
                            <li><Link className="link blue" to="/design/custom-header/">Custom</Link></li>
                        </ul>
                        <ul className="col-6 list lh-2-0 w-50">
                            <li><h3 className={ SpiritStyles.h3 + `mb2` }>Boxes</h3></li>
                            <li><Link className="link blue" to="/design/white-box/">White Box</Link></li>
                            <li><Link className="link blue" to="/design/outline-box/">Outline Box</Link></li>
                        </ul>
                        <ul className="col-6 list lh-2-0 w-50">
                            <li><h3 className={ SpiritStyles.h3 + `mb2` }>Navigation</h3></li>
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
