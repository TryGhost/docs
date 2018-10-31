import React from 'react'
import PropTypes from 'prop-types'
import { connectSearchBox } from 'react-instantsearch-dom'

// const IntegrationSearch = ({ currentRefinement, refine }) => {
class IntegrationSearch extends React.Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e) => {
        this.props.searchActive(true)
        return this.props.refine(e.target.value)
    }

    componentDidMount() {
        if (this.props.currentFilter) {
            this.props.currentRefinement(this.props.currentFilter)
        }
    }

    render() {
        return (
        <>
            <label htmlFor="integrationsearch" className="clip">Search</label>
            <input
                id="integrationsearch"
                name="integrationsearch"
                className="input-reset form-text pa4 pl5 pr5 mt8 w-100 mw-s f6 br-pill ba b--transparent bg-white shadow-2"
                type="text"
                placeholder="Search integrations..."
                autoComplete="off"
                value={this.props.currentRefinement}
                onChange={this.handleChange}

            />
        </>
        )
    }
}

// `IntegrationSearchBox` renders a `<IntegrationSearch>` widget that is connected to
// the <InstantSearch> state, providing it with `currentRefinement` and `refine` props for
// reading and manipulating the current query of the search.
const IntegrationSearchBox = connectSearchBox(IntegrationSearch)

IntegrationSearch.propTypes = {
    searchActive: PropTypes.func.isRequired,
    currentFilter: PropTypes.string,
    currentRefinement: PropTypes.string,
    refine: PropTypes.func,
}

export default IntegrationSearchBox
