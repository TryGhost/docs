import Layout from '../../components/layouts/default'
import React from 'react'

const HairlineHeader = () => (
    <Layout title="Custom Header" headerDividerStyle="hairline" bodyClass="bg-white">
        <div className="post-content">
            <h1>Hairline Header</h1>
            <h2>Usage</h2>
            <p>
               Use hairline header divider when the surface below the header is white (e.g. full white pages etc.)
            </p>
        </div>
    </Layout>
)

export default HairlineHeader
