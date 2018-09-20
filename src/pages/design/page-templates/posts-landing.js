import React from 'react'

import Layout from '../../../components/layouts/default'
import SectionHeading from '../../../components/layouts/partials/section-heading';

const Page = () => (
    <Layout title="Home" headerDividerStyle="shadow">
        <div className="center">
            <SectionHeading title="Post landing" subtitle="Here comes your subtitle" type="blog" />
            <div className="grid gutter-2">
                <div className="col-8 mb5">
                    <div className=" bg-white br4 shadow-1 h50"></div>
                </div>
                <div className="col-4">
                    <div className=" bg-white br4 shadow-1 h50"></div>
                </div>
                <div className="col-4">
                    <div className=" bg-white br4 shadow-1 h50"></div>
                </div>
                <div className="col-4">
                    <div className=" bg-white br4 shadow-1 h50"></div>
                </div>
                <div className="col-4">
                    <div className=" bg-white br4 shadow-1 h50"></div>
                </div>
            </div>
        </div>
        <div className="bt b--whitegrey pa6 pt6 pb1 mt20">
            <h2 className="ma0 pa0 mb6 fw5">Usage</h2>
            <p>
                Blog post style landing pages.
            </p>
            <ul className="ma0 ml4 pa0 lh-2-0">
                <li>Tutorials</li>
            </ul>
        </div>
    </Layout>
)

export default Page