import React from 'react'
import SectionHeading from '../../../components/layouts/partials/section-heading'

import Layout from '../../../components/layouts/default'
import { Spirit } from '../../../components/spirit-styles'
import Box from '../../../components/layouts/partials/box'

const Page = () => (
    <Layout title="Home" headerDividerStyle="shadow">
        <div className={ Spirit.page.xl }>
            <SectionHeading title="Grid demo" />
            
            <h1 className={ Spirit.h3 }>Grid container: grid-auto</h1>
            <div className="grid-auto gutter-12 mt4">
                <Box className="pa5">This</Box>
                <Box className="pa5">is</Box>
                <Box className="pa5">an</Box>
                <Box className="pa5">auto</Box>
                <Box className="pa5">grid</Box>
            </div>

            <div className="grid-auto gutter-12 mt4">
                <Box className="pa5">With</Box>
                <Box className="pa5">some</Box>
                <Box className="pa5">columns</Box>
            </div>

            <h1 className={ Spirit.h3 + `mt10` }>Grid: grid-12</h1>
            <div className="grid-12 gutter-12 mt4">
                
                {/* New row */}
                <Box className="col-4 pa5">col-4</Box>
                <Box className="col-2 pa5">col-2</Box>
                <Box className="col-2 pa5">col-2</Box>
                <Box className="col-2 pa5">col-2</Box>
                <Box className="col-2 pa5">col-2</Box>

                {/* New row */ }
                <Box className="col-4 pa5 pb20">col-4</Box>
                <Box className="col-4 pa5">col-4</Box>
                <Box className="col-4 pa5">col-4</Box>

            </div>

        </div>
    </Layout>
)

export default Page