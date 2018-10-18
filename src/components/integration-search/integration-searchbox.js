import React from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'

const IntegrationSearch = ({ currentRefinement, refine }) => <>
        <label htmlFor="integrationsearch" className="clip">Search</label>
        <input
            id="integrationsearch"
            name="integrationsearch"
            className="input-reset form-text pa4 pl5 pr5 mt8 w-100 mw-s f6 br-pill ba b--transparent bg-white shadow-2"
            type="text"
            placeholder="Search integrations..."
            autoComplete="off"
            value={currentRefinement}
            onChange={e => refine(e.target.value)}

        />
        </>

// `IntegrationSearchBox` renders a `<IntegrationSearch>` widget that is connected to
// the <InstantSearch> state, providing it with `currentRefinement` and `refine` props for
// reading and manipulating the current query of the search.
const IntegrationSearchBox = connectSearchBox(IntegrationSearch)

export default IntegrationSearchBox
