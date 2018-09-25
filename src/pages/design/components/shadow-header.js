import Layout from '../../../components/layouts/default'
import React from 'react'
import { Spirit } from '../../../components/spirit-styles'

const HairlineHeader = () => (
    <Layout title="Shadowed Header" headerDividerStyle="shadow">
        <div className={ Spirit.page.xl + `pt10` }>
            <h1 className={ Spirit.h1 }>Shadowed Header</h1>
            <h2 className={ Spirit.h3 + `pt6 mt10 bt b--whitegrey` }>Usage</h2>
            <p className={ Spirit.p }>
                Use shadowed header when the surface below the header is <strong>not</strong> white.
            </p>
            <pre><code className="language-html">{ `<Layout title="Custom Header" headerDividerStyle="hairline" />` }</code></pre>
        </div>
    </Layout>
)

export default HairlineHeader
