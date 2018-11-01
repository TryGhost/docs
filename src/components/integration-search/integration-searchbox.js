import React from 'react'
import PropTypes from 'prop-types'
import { connectSearchBox } from 'react-instantsearch-dom'

// const IntegrationSearch = ({ currentRefinement, refine }) => {
class IntegrationSearch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentInput: this.props.currentRefinement,
            showReset: false,
        }

        this.handleChange = this.handleChange.bind(this)
        this.setInput = this.setInput.bind(this)
        this.resetSearch = this.resetSearch.bind(this)
        this.toggleResetButton = this.toggleResetButton.bind(this)
    }

    setInput = e => this.setState(() => {
        return { currentInput: e }
    })

    toggleResetButton(val) {
        this.setState(() => {
            return { showReset: val }
        })
    }

    resetSearch = () => {
        this.props.searchActive(false)
        this.toggleResetButton(false)
        this.props.refine()

        return this.setState(() => {
            return { currentInput: `` }
        })
    }

    handleChange = (e) => {
        this.setInput(e.target.value)

        // Tell to parent component, that the search is active now
        this.props.searchActive(true)
        this.toggleResetButton(true)

        return this.props.refine(e.target.value)
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
                value={this.state.currentInput}
                onChange={this.handleChange}
            />
                {this.state.showReset ?
                    <button onClick={this.resetSearch}>X</button> :
                    null
                }

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
    currentRefinement: PropTypes.string,
    refine: PropTypes.func,
    returnTo: PropTypes.string.isRequired,
}

export default IntegrationSearchBox
