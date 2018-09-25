import React from 'react'
import MyHeader from '../components/my-header'

import Layout from '../../../components/layouts/default'
import { Spirit } from '../../../components/spirit-styles'
import { Link } from 'gatsby'

const Page = () => (
    <Layout title="Home" bodyClass="bg-white" header={ <MyHeader /> }>
        <div className={ Spirit.page.xl }>
            <div className="post-content pa30 f3 fw3 lightgrey">
                Custom content...
            </div>
            <div className="bt b--whitegrey pa6 pt6 pb1 mt20">
                <h2 className="ma0 pa0 mb6 fw5">Usage</h2>
                <p className={ Spirit.p }>
                    Custom landing pages which need either special marketing importance or just the content requires a custom layout. You can use it with or without custom header. Examples:
                </p>
                <ul className="ma0 ml4 pa0 mt4 lh-2-0">
                    <li><Link to="/integrations/" className="blue link">Integrations</Link> (using cusdtom header)</li>
                    <li><Link to="/setup/" className="blue link">Setup</Link> (using regular header)</li>
                </ul>
            </div>
        </div>
    </Layout>
)

export default Page