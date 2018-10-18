import React from 'react'
import NavBar from './navbar'
import { connectSearchBox } from 'react-instantsearch-dom'

const translations = {
    translations: {
        resetTitle: `Clear`,
        placeholder: `Search integrations...`,
    },
}

const IntegrationSearch = ({ currentRefinement, refine }) => <input
    id="integrationsearch"
    name="integrationsearch"
    className="input-reset form-text pa4 pl5 pr5 mt8 w-100 mw-s f6 br-pill ba b--transparent bg-white shadow-2"
    type="text"
    placeholder="Search integrations..."
    autoComplete="off"
    value={currentRefinement}
    onChange={e => refine(e.target.value)}
/>

// `IntegrationSearchBox` renders a `<IntegrationSearch>` widget that is connected to
// the <InstantSearch> state, providing it with `currentRefinement` and `refine` props for
// reading and manipulating the current query of the search.
const IntegrationSearchBox = connectSearchBox(IntegrationSearch)

class IntegrationsHeader extends React.Component {
    render() {
        return (
            <div className="bg-integrations-header-image">
                <div className="bg-integrations-header-cover">
                    <header className="top-0 left-0 right-0 z-9999">
                        <NavBar theme="light" />
                    </header>
                    <div className="pa-vw4 tc">
                        <h1 className="ma0 pa0 f-headline white gh-integration-header-shadow">Ghost Integrations</h1>
                        <p className="ma0 mt2 f4 white-80">All your favourite apps and tools, integrated with Ghost</p>
                        <label htmlFor="integrationsearch" className="clip">Search</label>

                        <IntegrationSearchBox />

                    </div>
                </div>
            </div>
        )
    }
}

export default IntegrationsHeader
