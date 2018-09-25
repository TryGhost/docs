import Layout from '../../../components/layouts/default'
import React from 'react'
import { Spirit } from '../../../components/spirit-styles'

const HairlineHeader = () => (
    <Layout title="Custom Header" headerDividerStyle="hairline" bodyClass="bg-white">
        <div className={ Spirit.page.xl + `pt10` }>
            <h1 className={ Spirit.h1 }>Hairline Header</h1>
            <h2 className={ Spirit.h3 + `pt6 mt10 bt b--whitegrey` }>Usage</h2>
            <p className={ Spirit.p }>
                Use hairline header divider when the surface below the header is white (e.g. full white pages etc.). 
            </p>
            <pre><code className="language-html">{ `<Layout title="Custom Header" headerDividerStyle="hairline" />` }</code></pre>
        </div>
    </Layout>
)

export default HairlineHeader
