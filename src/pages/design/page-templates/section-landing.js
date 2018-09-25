import React from 'react'
import SectionHeading from '../../../components/layouts/partials/section-heading'

import Layout from '../../../components/layouts/default'
import { Spirit } from '../../../components/spirit-styles'
import { Link } from 'gatsby'

const Page = () => (
    <Layout title="Home" headerDividerStyle="shadow">
        <div className={ Spirit.page.xl }>
            <SectionHeading title="Section landing page" subtitle="You can have subtitles" />
            <div className="bg-white br4 shadow-1 pa15 pt50 pb50">
                <div className="post-content lightgrey f3 fw3">
                    Custom content...
                </div>
            </div>
            <div className="bt b--whitegrey pt6 mt20">
                <h2 className="ma0 pa0 mb6 fw5">Usage</h2>
                <p>
                    Non-custom section homepages. Example:
                </p>
                <ul className="ma0 ml4 pa0 lh-2-0">
                    <li><Link to="/api/" className="blue link">API home</Link></li>
                </ul>
            </div>
        </div>
    </Layout>
)

export default Page