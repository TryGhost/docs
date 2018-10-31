import React from 'react'
import NavBar from './navbar'
import { IntegrationSearchBox } from '../../integration-search'

class IntegrationsHeader extends React.Component {
    render() {
        console.log(`IntegrationsHeader this.props`, this.props)
        return (
            <div className="bg-integrations-header-image">
                <div className="bg-integrations-header-cover">
                    <header className="top-0 left-0 right-0 z-9999">
                        <NavBar theme="light" />
                    </header>
                    <div className="pa-vw4 tc">
                        <h1 className="ma0 pa0 f-headline white gh-integration-header-shadow">Ghost Integrations</h1>
                        <p className="ma0 mt2 f4 white-80">All your favourite apps and tools, integrated with Ghost</p>

                        <IntegrationSearchBox />
                    </div>
                </div>
            </div>
        )
    }
}

export default IntegrationsHeader
