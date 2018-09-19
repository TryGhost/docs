import Layout from '../../components/layouts/default'
import React from 'react'
import MyHeader from './my-header';

const CustomHeader = () => (
    <Layout title="Custom Header" header={ <MyHeader /> }>
        Demo of custom header
    </Layout>
)

export default CustomHeader
