import React from 'react'
import Layout from '../../../components/layouts/default'
import { Spirit } from '../../../components/spirit-styles'
import DummyContent from './dummy-post'

const Page = () => (
    <Layout title="Home" headerDividerStyle="hairline" bodyClass="bg-white">

        <div className={ Spirit.page.m + `pt20` }>
            <h1 className={ Spirit.thinheadline }>Standalone post demo</h1>
            <DummyContent />
        </div>

        <div className={ Spirit.page.m }>
            <div className="bt b--lightgrey-l2 pt6 pb1 mt20">
                <h2 className="ma0 pa0 mb6 fw5">Usage</h2>
                <p>
                    For individual doc posts which are not part of a story so they don't need a sidebar, like Tutorials.
                </p>
                <ul className="ma0 ml4 pa0 lh-2-0">
                    <li>Tutorial posts</li>
                </ul>
            </div>
        </div>
    </Layout>
)

export default Page