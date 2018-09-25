import Layout from '../../../components/layouts/default'
import React from 'react'
import { SpiritStyles } from '../../../components/spirit-styles'

// 1. Import your own header component. Usuallyl this should be in components/partials
import MyHeader from './my-header'

// 2. Use header prop of Layout component to include custom header. If you don't set it then
//    the default header will be used (components/partials/header.js)
const CustomHeader = () => (
    <Layout title="Custom Header" header={ <MyHeader /> }>
        <div className={ SpiritStyles.page.xl + `pt10` }>
            <h1 className={ SpiritStyles.h1 }>Custom header</h1>
            <h2 className={ SpiritStyles.h3 + `pt6 mt10 bt b--whitegrey` }>Usage</h2>
            <ol className="mb7">
                <li className="mb3">Create a custom header react component, e.g. <code className="language-text">{`<MyHeader />`}</code></li>
                <li className="mb3">Include <code className="language-text">{`<NavBar theme="['dark', 'light']">`}</code> in the custom header</li>
                <li className="mb3">Set <code className="language-text">{`<Layout header={ <MyHeader /> }>`}</code> property</li>
            </ol>
            <pre><code className="language-javascript">{ `import MyHeader from './my-header'

const CustomHeader = () => (
    <Layout title="Custom Header" header={ <MyHeader /> }>
        ...content comes here...
    </Layout>
)` }</code></pre>
        </div>
    </Layout>
)

export default CustomHeader
