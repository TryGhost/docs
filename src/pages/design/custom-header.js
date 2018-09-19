import Layout from '../../components/layouts/default'
import React from 'react'

// 1. Import your own header component. Usuallyl this should be in components/partials
import MyHeader from './my-header';


// 2. Use header prop of Layout component to include custom header. If you don't set it then
//    the default header will be used (components/partials/header.js)
const CustomHeader = () => (
    <Layout title="Custom Header" header={ <MyHeader /> }>
        <div className="post-content">
            <h1>Usage</h1>
            <div>
                <ol>
                    <li>Create a custom header react component, e.g. <code className="language-html">{`<MyHeader />`}</code></li>
                    <li>Include <code className="language-html">{`<NavBar theme="['dark', 'light']">`}</code> in the custom header</li>
                    <li>Set <code className="language-html">{`<Layout header={ <MyHeader /> }>`}</code> property</li>
                </ol>
            </div>
        </div>
    </Layout>
)

export default CustomHeader
