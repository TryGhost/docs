import Layout from '../components/layouts/default'
import React from 'react'
import Icon from '../components/global/icon'

import { Link } from 'gatsby'
import { Spirit } from '../components/spirit-styles'
import Box from '../components/layouts/partials/box';

// TODO: structured data
const SetupIndexPage = () => (
    <Layout title="API" mainClass="bg-whitegrey-l2 pb-vw3" bodyClass="bg-white">
        <section className="bg-setup">
            <div className={ Spirit.page.xl + `tc-ns pt-vw6 pt-vw4-ns pb-vw4 white` }>
                <h1 className={ Spirit.sectionHeading + `gh-integration-header-shadow` }>Setup</h1>
                <p className={ Spirit.sectionSubHeading }>All the tools to get started with Ghost</p>
            </div>
        </section>

        <div className={ Spirit.page.l }>
            <section className="grid-12 gutter-row-20 gutter-32-l">
                <h3 className={ Spirit.h4 + `col-12 mt15 mb2 middarkgrey` }>I want to setup a site</h3>
                <Box className="col-12 col-4-ns pa12 tc tdn" to="/setup/ghost-pro/">
                    <h4 className={ Spirit.h5 + `lightgrey` }>Ghost(Pro)</h4>
                </Box>
                <Box className="col-12 col-4-ns pa12 tc tdn" to="/install/ubuntu/">
                    <h4 className={ Spirit.h5 + `lightgrey` }>Ubuntu</h4>
                </Box>
                <Box className="col-12 col-4-ns pa12 tc tdn" to="/install/docker/">
                    <h4 className={ Spirit.h5 + `lightgrey` }>Docker</h4>
                </Box>
                <Box className="col-12 col-4-ns pa12 tc tdn" to="/install/local/">
                    <h4 className={ Spirit.h5 + `lightgrey` }>Local install</h4>
                </Box>
                <Box className="col-12 col-4-ns pa12 tc tdn" to="/install/source/">
                    <h4 className={ Spirit.h5 + `lightgrey` }>Install from Source</h4>
                </Box>
            </section>
        </div>

    </Layout>
)

export default SetupIndexPage
