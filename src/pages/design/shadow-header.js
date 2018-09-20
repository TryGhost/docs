import Layout from '../../components/layouts/default'
import React from 'react'

const HairlineHeader = () => (
    <Layout title="Shadowed Header" headerDividerStyle="shadow">
        <div className="post-content">
            <h1>Shadowed Header</h1>
            <h2>Usage</h2>
            <p>
                Use shadowed header when the surface below the header is <strong>not</strong> white.
                <pre><code className="language-html">{ `<Layout title="Custom Header" headerDividerStyle="hairline" />` }</code></pre>
            </p>
        </div>
    </Layout>
)

export default HairlineHeader
