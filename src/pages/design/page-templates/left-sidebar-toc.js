import React from 'react'

import Layout from '../../../components/layouts/default'

const Page = () => (
    <Layout title="Home" headerDividerStyle="shadow">
        <div className="center flex flex-start">
            <nav className="mr5 miw50 mt10">
                <ul className="ma0 pa0 list">
                    <li className="mb5">Navigation item 1</li>
                    <li className="mb5">Navigation item 2</li>
                </ul>
            </nav>
            <div>
                {/* <section className="flex-auto br4 shadow-1 pa12 pt8">
                    <h1 className="f-headline fw6 mt0">Left sidebar</h1>
                    <h2 className="f4 fw3 lh-1-4 ma0 pa0 mb10">A summary about what's on this page. Typewriter delectus cred Disrupt aliqua Brooklyn church-key lo-fi dreamcatcher.</h2>
                </section> */}
                <section className="flex-auto flex bg-white br4 shadow-1 pa12 pt10">
                    <nav className="ml5 miw40 w40 order-2 f7">
                        <ul className="ma0 pa0 list">
                            <li className="mb5">TOC item 1</li>
                            <li className="mb5">TOC item 2</li>
                            <li className="mb5">TOC item 3</li>
                        </ul>
                    </nav>
                    <div className="order-1">
                        <span className="f7 fw5 measure-wide ttu dib mb5 midlightgrey">Breadcrumbs</span>
                        <h1 className="f-headline fw6 mt0">Left sidebar</h1>
                        <h2 className="f4 fw3 lh-1-4 ma0 pa0 mb10">A summary about what's on this page. Typewriter delectus cred Disrupt aliqua Brooklyn church-key lo-fi dreamcatcher.</h2>
                        <div className="post-content pb50 pt50">
                            Custom content...
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <div className="bt b--whitegrey pa6 pt6 pb1 mt20">
            <h2 className="ma0 pa0 mb6 fw5">Usage</h2>
            <p>
                Posts that are part of a bigger chunk of content and need inner page jump navigation. 
            </p>
            <ul className="ma0 ml4 pa0 lh-2-0">
                <li>Setup docs</li>
                <li>Core Concepts docs</li>
            </ul>
        </div>
    </Layout>
)

export default Page