import Layout from '../../components/layouts/default'
import React from 'react'

import { Link } from 'gatsby'

const APIPage = () => (
    <Layout title="API">
        <div className="mw-xl center">
            <div className="pa-vw4 tc">
                <h1 className="ma0 pa0 f-headline">API Reference</h1>
                <p className="ma0 mt2 f4 midgrey">Clients, tools and libraries for working with Ghost</p>
            </div>
            <div className="pa12 bg-white br4">
                <div className="mb8">
                    <h2 className="ma0">Frontend SDKs</h2>
                    <p className="ma0 lh-copy">Frameworks for working with the Ghost API to build a publication website</p>
                    <div className="flex flex-wrap mt4 mb4 nl4 nr4">
                        <Link className="flex-shrink-0 flex flex-column justify-between items-center ma4 pa5 w30 h30 f8 ba b--whitegrey tc link darkgrey fw5 br4 shadow-3 code" to="/api/v2/handlebars-themes/">
                            <div className="flex-grow-1 flex justify-center items-center">
                                <div className="flex justify-center items-center tc h11 w11 mb1 midgrey bg-whitegrey br-100">Icon</div>
                            </div>
                            <div>Handlebars</div>
                        </Link>
                        <Link className="flex-shrink-0 flex flex-column justify-between items-center ma4 pa5 w30 h30 f8 ba b--whitegrey tc link darkgrey fw5 br4 shadow-3 code" to="/api/v2/hugo/">
                            <div className="flex-grow-1 flex justify-center items-center">
                                <div className="flex justify-center items-center tc h11 w11 mb1 midgrey bg-whitegrey br-100">Icon</div>
                            </div>
                            <div>Gatsby</div>
                        </Link>
                        <Link className="flex-shrink-0 flex flex-column justify-between items-center ma4 pa5 w30 h30 f8 ba b--whitegrey tc link darkgrey fw5 br4 shadow-3 code" to="/api/v2/gatsby/">
                            <div className="flex-grow-1 flex justify-center items-center">
                                <div className="flex justify-center items-center tc h11 w11 mb1 midgrey bg-whitegrey br-100">Icon</div>
                            </div>
                            <div>Hugo</div>
                        </Link>
                    </div>
                </div>

                <div className="bt b--whitegrey pt10 mb8">
                    <h2 className="ma0">Client Libraries</h2>
                    <p className="ma0 lh-copy">Specific libraries for interacting with the Ghost API directly</p>
                    <div className="flex flex-wrap mt4 mb4 nl4 nr4">
                        <Link className="flex-shrink-0 flex flex-column justify-between items-center ma4 pa5 w30 h30 f8 ba b--whitegrey tc link darkgrey fw5 br4 shadow-3 code" to="/api/v2/javascript/">
                            <div className="flex-grow-1 flex justify-center items-center">
                                <div className="flex justify-center items-center tc h11 w11 mb1 midgrey bg-whitegrey br-100">Icon</div>
                            </div>
                            <div>JavaScript</div>
                        </Link>
                        <Link className="flex-shrink-0 flex flex-column justify-between items-center ma4 pa5 w30 h30 f8 ba b--whitegrey tc link darkgrey fw5 br4 shadow-3 code" to="#">
                            <div className="flex-grow-1 flex justify-center items-center">
                                <div className="flex justify-center items-center tc h11 w11 mb1 midgrey bg-whitegrey br-100">Icon</div>
                            </div>
                            <div>Ruby</div>
                        </Link>
                        <Link className="flex-shrink-0 flex flex-column justify-between items-center ma4 pa5 w30 h30 f8 ba b--whitegrey tc link darkgrey fw5 br4 shadow-3 code" to="#">
                            <div className="flex-grow-1 flex justify-center items-center">
                                <div className="flex justify-center items-center tc h11 w11 mb1 midgrey bg-whitegrey br-100">Icon</div>
                            </div>
                            <div>PHP</div>
                        </Link>
                        <Link className="flex-shrink-0 flex flex-column justify-between items-center ma4 pa5 w30 h30 f8 ba b--whitegrey tc link darkgrey fw5 br4 shadow-3 code" to="#">
                            <div className="flex-grow-1 flex justify-center items-center">
                                <div className="flex justify-center items-center tc h11 w11 mb1 midgrey bg-whitegrey br-100">Icon</div>
                            </div>
                            <div>Python</div>
                        </Link>
                        <Link className="flex-shrink-0 flex flex-column justify-between items-center ma4 pa5 w30 h30 f8 ba b--whitegrey tc link darkgrey fw5 br4 shadow-3 code" to="#">
                            <div className="flex-grow-1 flex justify-center items-center">
                                <div className="flex justify-center items-center tc h11 w11 mb1 midgrey bg-whitegrey br-100">Icon</div>
                            </div>
                            <div>Go</div>
                        </Link>
                        <Link className="flex-shrink-0 flex flex-column justify-between items-center ma4 pa5 w30 h30 f8 ba b--whitegrey tc link darkgrey fw5 br4 shadow-3 code" to="#">
                            <div className="flex-grow-1 flex justify-center items-center">
                                <div className="flex justify-center items-center tc h11 w11 mb1 midgrey bg-whitegrey br-100">Icon</div>
                            </div>
                            <div>iOS</div>
                        </Link>
                        <Link className="flex-shrink-0 flex flex-column justify-between items-center ma4 pa5 w30 h30 f8 ba b--whitegrey tc link darkgrey fw5 br4 shadow-3 code" to="#">
                            <div className="flex-grow-1 flex justify-center items-center">
                                <div className="flex justify-center items-center tc h11 w11 mb1 midgrey bg-whitegrey br-100">Icon</div>
                            </div>
                            <div>Android</div>
                        </Link>
                    </div>
                </div>

                <div className="bt b--whitegrey pt10 mb8">
                    <h2 className="ma0">REST API</h2>
                    <p className="ma0 lh-copy">A full reference of API Endpoints</p>
                    <div className="flex mt4 mb4 nl4 nr4">
                        <Link className="flex-shrink-0 flex flex-column justify-between items-center ma4 pa5 w30 h30 f8 ba b--whitegrey tc link darkgrey fw5 br4 shadow-3 code" to="#">
                            <div className="flex-grow-1 flex justify-center items-center">
                                <div className="flex justify-center items-center tc h11 w11 mb1 midgrey bg-whitegrey br-100">Icon</div>
                            </div>
                            <div>Content</div>
                        </Link>
                        <Link className="flex-shrink-0 flex flex-column justify-between items-center ma4 pa5 w30 h30 f8 ba b--whitegrey tc link darkgrey fw5 br4 shadow-3 code" to="#">
                            <div className="flex-grow-1 flex justify-center items-center">
                                <div className="flex justify-center items-center tc h11 w11 mb1 midgrey bg-whitegrey br-100">Icon</div>
                            </div>
                            <div>Admin</div>
                        </Link>
                    </div>
                </div>

                <div className="bt b--whitegrey pt10 mb8">
                    <h2 className="ma0">Tools</h2>
                    <p className="ma0 lh-copy">Utilities to help build and manage Ghost</p>
                    <div className="flex mt4 mb4 nl4 nr4">
                        <Link className="flex-shrink-0 flex flex-column justify-between items-center ma4 pa5 w30 h30 f8 ba b--whitegrey tc link darkgrey fw5 br4 shadow-3 code" to="#">
                            <div className="flex-grow-1 flex justify-center items-center">
                                <div className="flex justify-center items-center tc h11 w11 mb1 midgrey bg-whitegrey br-100">Icon</div>
                            </div>
                            <div>Ghost-CLI</div>
                        </Link>
                        <Link className="flex-shrink-0 flex flex-column justify-between items-center ma4 pa5 w30 h30 f8 ba b--whitegrey tc link darkgrey fw5 br4 shadow-3 code" to="#">
                            <div className="flex-grow-1 flex justify-center items-center">
                                <div className="flex justify-center items-center tc h11 w11 mb1 midgrey bg-whitegrey br-100">Icon</div>
                            </div>
                            <div>Gscan</div>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    </Layout>
)

export default APIPage
