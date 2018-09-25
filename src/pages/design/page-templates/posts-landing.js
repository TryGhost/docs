import React from 'react'

import Layout from '../../../components/layouts/default'
import SectionHeading from '../../../components/layouts/partials/section-heading'
import { SpiritStyles } from '../../../components/spirit-styles'
import { Link } from 'gatsby'

const Page = () => (
    <Layout title="Home" headerDividerStyle="shadow">
        <div className={ SpiritStyles.page.xl }>
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
            <div className="bt b--whitegrey pt6 pb1 mt20">
                <h2 className="ma0 pa0 mb6 fw5">Usage</h2>
                <p className={ SpiritStyles.p }>
                    Blog style landing pages where arbitrary number of individual posts should be listed. Examples:
                </p>
                <ul className="ma0 ml4 mt4 pa0 lh-2-0">
                    <li><Link to="/tutorials/" className="blue link">Tutorials</Link></li>
                </ul>
            </div>
        </div>
    </Layout>
)

export default Page