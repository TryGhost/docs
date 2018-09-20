import React from 'react'
import { SpiritStyles } from '../../../components/spirit-styles'
import DummyContent from './dummy-post'

import Layout from '../../../components/layouts/default'

const Page = () => (
    <Layout title="Home" headerDividerStyle="shadow">
        <div className="center flex flex-start mt10">
            <div>
                <section className="flex-auto flex bg-white br4 shadow-1 pa15 pt12">
                    <nav className="ml10 miw40 w40 order-2 f7">
                        <ul className="ma0 pa0 list lightgrey">
                            <li className="mb5">TOC item 1</li>
                            <li className="mb5">TOC item 2</li>
                            <li className="mb5">TOC item 3</li>
                        </ul>
                    </nav>
                    <div className="order-1">
                        <span className="f7 fw5 measure-wide ttu dib mb1 midlightgrey">Breadcrumbs</span>
                        <h1 className={ SpiritStyles.h1 }>A post with table of contents</h1>
                        <DummyContent />
                    </div>
                </section>
            </div>
        </div>
        <div className="bt b--whitegrey pa6 pt6 pb1 mt20">
            <h2 className="ma0 pa0 mb6 fw5">Usage</h2>
            <p>
                Documentation posts that need only inner page jump / navigation.
            </p>
            <ul className="ma0 ml4 pa0 lh-2-0">
                <li>API docs</li>
            </ul>
        </div>
    </Layout>
)

export default Page