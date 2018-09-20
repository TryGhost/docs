import React from 'react'
import SectionHeading from '../../../components/layouts/partials/section-heading';

import Layout from '../../../components/layouts/default'

const Page = () => (
    <Layout title="Home" headerDividerStyle="shadow">
        <div className="center">
            <SectionHeading title="Section landing page" subtitle="You can have subtitles" />
            <div className="bg-white br4 shadow-1 pa15 pt12 pb12">
                <div className="post-content">
                    Custom content...
                </div>
            </div>
            <div className="bt b--whitegrey pa6 pt6 pb1 mt20">
                <h2 className="ma0 pa0 mb6 fw5">Usage</h2>
                <p>
                    Non-custom section homepages:
                </p>
                <ul className="ma0 ml4 pa0 lh-2-0">
                    <li>Setup home</li>
                    <li>Core Concepts home</li>
                    <li>Api home</li>
                </ul>
            </div>
        </div>
    </Layout>
)

export default Page