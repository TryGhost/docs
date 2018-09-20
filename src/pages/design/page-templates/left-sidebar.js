import React from 'react'

import Layout from '../../../components/layouts/default'
import { SpiritStyles } from '../../../components/spirit-styles'
import DummyContent from './dummy-post'

const Page = () => (
    <Layout title="Home" headerDividerStyle="shadow">
        <div className="center flex flex-start mt10">
            <nav className="mr5 miw50 mt12">
                <ul className="ma0 pa0 list">
                    <li className="mb5">Navigation item 1</li>
                    <li className="mb5">Navigation item 2</li>
                </ul>
            </nav>
            <div>
                <section className="flex-auto bg-white br4 shadow-1 pa15 pt12">
                    <span className="f7 fw5 measure-wide ttu dib mb1 midlightgrey">Breadcrumbs</span>
                    <h1 className={ SpiritStyles.h1 }>A post with left sidebar</h1>
                    <DummyContent />
                </section>
            </div>
        </div>
        <div className="bt b--whitegrey pa6 pt6 pb1 mt20">
            <h2 className="ma0 pa0 mb6 fw5">Usage</h2>
            <p>
                Posts that have corresponding pages and are part of a bigger, related chunk of content. The links in the left sidebar always point to another page.
            </p>
            <ul className="ma0 ml4 pa0 lh-2-0">
                <li>Setup docs</li>
                <li>Core Concepts docs</li>
            </ul>
        </div>
    </Layout>
)

export default Page