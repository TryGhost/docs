import React from 'react'
import PropTypes from 'prop-types'
import { connectSearchBox } from 'react-instantsearch-dom'
import { navigate } from 'gatsby'

// const IntegrationSearch = ({ currentRefinement, refine }) => {
class IntegrationSearch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentInput: this.props.currentRefinement,
        }

        this.searchInput = React.createRef()
        this.handleChange = this.handleChange.bind(this)
        this.setInput = this.setInput.bind(this)
        this.clearInput = this.clearInput.bind(this)
        this.navigateHome = this.navigateHome.bind(this)
    }

    navigateHome = () => {
        if (this.props.location.pathname.match(/\/integrations\/\s*/)) {
            // When we're not on the main integrations page, navigate there
            navigate(`/integrations/`)
        }
    }

    setInput = e => this.setState(() => {
        return { currentInput: e }
    })

    clearInput = () => {
        this.setState(() => {
            return { currentInput: `` }
        })
        return this.props.refine()
    }

    handleChange = (e) => {
        let currentVal = e.target.value
        console.log(`handleChange -> currentVal set to:`, currentVal)

        // safe input
        this.setInput(currentVal)
        console.log(`handleChange -> setInput, current state:`, this.state.currentInput)

        this.navigateHome()
        console.log(`handleChange -> navigateHome finished`)
        console.log(`navigateHome -> focus`)
        this.searchInput.current.focus()

        // Signal to parent component, that the search is active now
        this.props.searchActive(true)
        console.log(`handleChange -> searchActive set finished`)

        console.log(`handleChange -> refine now`)

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
                ref={this.searchInput}
            />
            <button onClick={this.clearInput}>X</button>
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
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
}

export default IntegrationSearchBox
