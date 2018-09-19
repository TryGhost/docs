import React from 'react'
import MyHeader from '../my-header'

import Layout from '../../../components/layouts/default'

const Page = () => (
    <Layout title="Home" headerDividerStyle="shadow" bodyClass="bg-white" header={ <MyHeader /> }>
        <div className="center">
            <div className="post-content">
                Custom content...
            </div>
            <div className="bt b--whitegrey pa6 pt6 pb1 mt20">
                <h2 className="ma0 pa0 mb6 fw5">Usage</h2>
                <p>
                    Landing pages which need special marketing importance.
                </p>
                <ul className="ma0 ml4 pa0 lh-2-0">
                    <li>Integrations</li>
                </ul>
            </div>
        </div>
    </Layout>
)

export default Page