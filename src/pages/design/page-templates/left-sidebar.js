import React from 'react'

import Layout from '../../../components/layouts/default'
import { Spirit } from '../../../components/spirit-styles'
import DummyContent from './dummy-post'
import NavSidebar from '../../../components/layouts/partials/navigation-sidebar'
import { Link } from '@reach/router';

const Page = () => (
    <Layout title="Home" headerDividerStyle="shadow">
        <div className={ Spirit.page.xl + `flex flex-start mt12` }>
            <NavSidebar />
            <div>
                <section className="flex-auto bg-white br4 shadow-1 pa15 pt12">
                    <span className="f7 fw5 measure-wide ttu dib mb1 midlightgrey">Breadcrumbs</span>
                    <h1 className={ Spirit.h1 }>A post with left sidebar</h1>
                    <DummyContent />
                </section>
            </div>
        </div>

        <div className={ Spirit.page.xl }>
            <div className="bt b--whitegrey pt6 pb1 mt20">
                <h2 className="ma0 pa0 mb6 fw5">Usage</h2>
                <p>
                    Posts that have corresponding pages and are part of a bigger, related chunk of content. The links in the left sidebar always point to another page. Examples:
                </p>
                <ul className="ma0 ml4 pa0 lh-2-0">
                    <li><Link to="/setup/ghost-pro" className="blue link">Setup doc posts</Link></li>
                </ul>
            </div>
        </div>
    </Layout>
)

export default Page