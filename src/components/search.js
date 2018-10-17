import React from 'react'
import PropTypes from 'prop-types';
import { Highlight } from 'react-instantsearch-dom'
import Autosuggest from 'react-autosuggest'
import { connectAutoComplete } from 'react-instantsearch-dom'

class Results extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.currentRefinement,
        }
    }

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue,
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.props.refine(value);
    };

    onSuggestionsClearRequested = () => {
        this.props.refine();
    };

    getSuggestionValue(hit) {
        return hit.title;
    }

    renderSuggestion(hit) {
        return <Highlight attribute="title" hit={hit} tagName="mark" />;
    }

    renderSectionTitle(section) {
        return section.index;
    }

    getSectionSuggestions(section) {
        return section.hits;
    }

    render() {
        const { hits } = this.props;
        const { value } = this.state;
        const inputProps = {
            placeholder: `Search documentation...`,
            onChange: this.onChange,
            value,
        }

        // <input id="homesearch" name="homesearch" className="input-reset form-text ba b--transparent flex-auto ml2 whitney lh-1-0" type="text" placeholder="Search documentation..." autoComplete="off" />
        const theme = {
            input: `input-reset form-text ba b--transparent flex-auto ml2 whitney lh-1-0`
        }

        return (
            <Autosuggest
            suggestions={hits}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            inputProps={inputProps}
            theme={theme}
            />
        )
    }
}


Results.propTypes = {
    hits: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentRefinement: PropTypes.string.isRequired,
    refine: PropTypes.func.isRequired,
}

const Search = connectAutoComplete(Results)

export default AutoComplete
