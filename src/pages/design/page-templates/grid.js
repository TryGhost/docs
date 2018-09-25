import React from 'react'
import SectionHeading from '../../../components/layouts/partials/section-heading'

import Layout from '../../../components/layouts/default'
import { Spirit } from '../../../components/spirit-styles'

const Page = () => (
    <Layout title="Home" headerDividerStyle="shadow">
        <div className={ Spirit.page.xl }>
            <SectionHeading title="Grid demo" />
            
            <div className="css-grid">
                hello
            </div>

        </div>
    </Layout>
)

export default Page