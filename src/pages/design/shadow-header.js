import Layout from '../../components/layouts/default'
import React from 'react'

const HairlineHeader = () => (
    <Layout title="Shadowed Header" headerDividerStyle="shadow">
        <div className="post-content">
            <h1>Shadowed Header</h1>
            <h2>Usage</h2>
            <div>
                <ol>
                    <li>Create a custom header react component, e.g. <code className="language-html">{ `<MyHeader />` }</code></li>
                    <li>Include <code className="language-html">{ `<NavBar theme="['dark', 'light']">` }</code> in the custom header</li>
                    <li>Set <code className="language-html">{ `<Layout header={ <MyHeader /> }>` }</code> property</li>
                </ol>
            </div>
        </div>
    </Layout>
)

export default HairlineHeader
