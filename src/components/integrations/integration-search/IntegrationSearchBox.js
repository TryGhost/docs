import React from 'react'
import PropTypes from 'prop-types'
import { connectSearchBox } from 'react-instantsearch-dom'

import { Icon } from '../../common'

class IntegrationSearch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentInput: this.props.currentRefinement,
            showResetButton: false,
        }

        this.handleChange = this.handleChange.bind(this)
        this.setInput = this.setInput.bind(this)
        this.resetSearch = this.resetSearch.bind(this)
        this.toggleResetButton = this.toggleResetButton.bind(this)
    }

    setInput(e) {
        this.setState(() => {
            return { currentInput: e }
        })
    }

    toggleResetButton(val) {
        this.setState(() => {
            return { showResetButton: val }
        })
    }

    resetSearch() {
        this.props.searchActive(false)
        this.toggleResetButton(false)
        this.props.refine()

        this.setState(() => {
            return { currentInput: `` }
        })
    }

    handleChange(e) {
        this.setInput(e.target.value)

        if (!e.target.value) {
            // input field is empty, stop what we're doing
            return this.resetSearch()
        }

        // Tell parent component, that the search is active now
        this.props.searchActive(true)
        this.toggleResetButton(true)

        return this.props.refine(e.target.value)
    }

    render() {
        return (
            <div className="relative mt8 mw-s center">
                <label htmlFor="integrationsearch" className="clip">Search</label>
                <Icon name="search" className="fill-lightgrey w5 h-auto absolute top-4 left-4" />
                <input
                    id="integrationsearch"
                    name="integrationsearch"
                    className="input-reset form-text pa4 pl10 pr8 w-100 f6 br-pill ba b--transparent bg-white shadow-2 whitney middarkgrey dark-placeholder"
                    type="text"
                    placeholder="Search integrations..."
                    autoComplete="off"
                    value={this.state.currentInput}
                    onChange={this.handleChange}
                />
                {this.state.showResetButton ?
                    <button
                        className="absolute top-0 right-0 bottom-0 pa0 pr2 b--transparent flex justify-center items-center bg-transparent"
                        onClick={this.resetSearch}
                    >
                        <Icon name="close" className="w4 h4 pa2 fill-midgrey bg-white br-100 pointer dim" />
                    </button>
                    : null
                }
            </div>
        )
    }
}

IntegrationSearch.propTypes = {
    searchActive: PropTypes.func.isRequired,
    currentRefinement: PropTypes.string,
    refine: PropTypes.func,
}

// `IntegrationSearchBox` renders a `<IntegrationSearch>` widget that is connected to
// the <InstantSearch> state, providing it with `currentRefinement` and `refine` props for
// reading and manipulating the current query of the search.
const IntegrationSearchBox = connectSearchBox(IntegrationSearch)

export default IntegrationSearchBox
