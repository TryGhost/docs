import React from 'react'

import Layout from '../../../components/layouts/default'

const Page = () => (
    <Layout title="Home" headerDividerStyle="shadow">
        <div className="center">
            <div className="pt10 pb10 pl0 pr0">
                <h1 className="f-headline ma0 mb2">Post landing</h1>
                <h2 className="f4 fw3 ma0">Here comes some additional text yo</h2>
            </div>
            <div className="flex">
                <div className="bg-white br4 shadow-1 w-third pa10 mr6 h50"></div>
                <div className="bg-white br4 shadow-1 w-third pa10 mr6"></div>
                <div className="bg-white br4 shadow-1 w-third"></div>
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