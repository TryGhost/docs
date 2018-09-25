import React from 'react'
import SectionHeading from '../../../components/layouts/partials/section-heading';

import Layout from '../../../components/layouts/default'
import { Spirit } from '../../../components/spirit-styles'
import { Link } from 'gatsby'
import Box from '../../../components/layouts/partials/box'

const Page = () => (
    <Layout title="Home" headerDividerStyle="shadow">
        <div className={ Spirit.page.xl + `pb10`}>
            <SectionHeading title="Boxes demo" />

            <h1 className={ Spirit.h3 }>Property: elevation</h1>

            <div className="flex justify-between mt4">
                <div className="flex-auto mr10">
                    <Box elevation="1" radius="5" className="pa10 pt20 pb20 mb4"></Box>
                    <code className="language-text">{ `<Box elevation="1">...</Box>` }</code>
                </div>

                <div className="flex-auto mr10">
                    <Box elevation="2" radius="5" className="pa10 pt20 pb20 mb4"></Box>
                    <code className="language-text">{ `<Box elevation="2">...</Box>` }</code>
                </div>

                <div className="flex-auto">
                    <Box elevation="3" radius="5" className="pa10 pt20 pb20 mb4"></Box>
                    <code className="language-text">{ `<Box elevation="3">...</Box>` }</code>
                </div>
            </div>

            <h1 className={ Spirit.h3 + `mt20` }>Property: radius</h1>

            <div className="flex justify-between mt4">
                <div className="flex-auto mr10">
                    <Box elevation="1" radius="0" className="pa10 pt20 pb20 mb4"></Box>
                    <code className="language-text">{ `<Box radius="0">...</Box>` }</code>
                </div>

                <div className="flex-auto mr10">
                    <Box elevation="1" radius="1" className="pa10 pt20 pb20 mb4"></Box>
                    <code className="language-text">{ `<Box radius="1">...</Box>` }</code>
                </div>

                <div className="flex-auto">
                    <Box elevation="1" radius="2" className="pa10 pt20 pb20 mb4"></Box>
                    <code className="language-text">{ `<Box radius="2">...</Box>` }</code>
                </div>
            </div>
            <div className="flex justify-between mt8">
                <div className="flex-auto mr10">
                    <Box elevation="1" radius="3" className="pa10 pt20 pb20 mb4"></Box>
                    <code className="language-text">{ `<Box radius="3">...</Box>` }</code>
                </div>
                
                <div className="flex-auto mr10">
                    <Box elevation="1" radius="4" className="pa10 pt20 pb20 mb4"></Box>
                    <code className="language-text">{ `<Box radius="4">...</Box>` }</code>
                </div>

                <div className="flex-auto">
                    <Box elevation="1" radius="5" className="pa10 pt20 pb20 mb4"></Box>
                    <code className="language-text">{ `<Box radius="5">...</Box>` }</code>
                </div>
            </div>

            <h1 className={ Spirit.h3 + `mt20` }>Property: href</h1>

            <p className={ Spirit.p + `mt4` }>Usage: <code className="language-text">{ `<Box href="http://example.com">...</Box>` }</code>. Hover effects are different depending on elevation.</p>

            <div className="flex justify-between mt8">
                <Box elevation="1" radius="4" className="pa10 pt17 pb17 mb4 blue tc tdn flex-auto mr10" href="/">
                    <span className="midgrey">Click me</span>
                </Box>

                <Box elevation="2" radius="4" className="pa10 pt17 pb17 mb4 blue tc tdn flex-auto mr10" href="/">
                    <span className="midgrey">Click me</span>
                </Box>

                <Box elevation="3" radius="4" className="pa10 pt17 pb17 mb4 blue tc tdn flex-auto mr10" href="/">
                    <span className="midgrey">Click me</span>
                </Box>
            </div>

        </div>

        <div className="bg-white bb bt b--whitegrey pt10 pb10 mb10">

            <div className={ Spirit.page.xl }>

                <h1 className={ Spirit.h3 }>Property: onWhite</h1>

                <p className={ Spirit.p + `mt4` }>Usage: <code className="language-text">{ `<Box onWhite="true">...</Box>` }</code>. Boxes have slighly different shadow properties on white backgrounds.</p>
            
                <div className="flex justify-between mt8">
                    <Box elevation="1" radius="4" onWhite="true" className="pa10 pt17 pb17 mb4 blue tc tdn flex-auto mr10" href="/">
                        <span className="midgrey">Click me</span>
                    </Box>

                    <Box elevation="2" radius="4" onWhite="true" className="pa10 pt17 pb17 mb4 blue tc tdn flex-auto mr10" href="/">
                        <span className="midgrey">Click me</span>
                    </Box>

                    <Box elevation="3" radius="4" onWhite="true" className="pa10 pt17 pb17 mb4 blue tc tdn flex-auto mr10" href="/">
                        <span className="midgrey">Click me</span>
                    </Box>
                </div>
            </div>
        </div>
    </Layout>
)

export default Page