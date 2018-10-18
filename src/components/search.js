import React from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link'
import { Highlight, Snippet, Index, Configure, connectAutoComplete } from 'react-instantsearch-dom'
import Autosuggest from 'react-autosuggest'

const renderSectionSuggestion = (hit) => {
    return (
        <>
            <Link to={hit.url}>
                <span>{hit.section}</span>
                <Highlight attribute="title" hit={hit} tagName="mark" />
                <Snippet attribute="html" hit={hit} />
            </Link>
        </>
    )
}

const renderFaqSectionSuggestion = (hit) => {
    return (
        <>
            <Link to={hit.url}>
                <Highlight attribute="title" hit={hit} tagName="mark" />
            </Link>
        </>
    )
}

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
        if (hit.section === 'faq') {
            return renderFaqSectionSuggestion(hit)
        } else {
            return renderSectionSuggestion(hit)
        }
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
        const inputTheme = `input-reset form-text b--transparent bg-darkgrey-searchbar br-pill flex-auto whitney lh-1-0 pa2 pl3 plr3 w-100 dark-placeholder`

        const theme = {
            input: inputTheme,
            inputOpen: inputTheme,
            inputFocused: inputTheme,
            // Default values:
            // container: 'react-autosuggest__container',
            // containerOpen: 'react-autosuggest__container--open',
            // input: 'react-autosuggest__input',
            // inputOpen: 'react-autosuggest__input--open',
            // inputFocused: 'react-autosuggest__input--focused',
            // suggestionsContainer: 'pa15',
            suggestionsContainerOpen: 'pa15 pt5 pb0 mt10 bt b--whitegrey nl10 nr10 nb10 search-modal-result-container',
            // suggestionsList: 'react-autosuggest__suggestions-list',
            // suggestion: 'react-autosuggest__suggestion',
            // suggestionFirst: 'react-autosuggest__suggestion--first',
            // suggestionHighlighted: 'react-autosuggest__suggestion--highlighted',
            // sectionContainer: 'react-autosuggest__section-container',
            // sectionContainerFirst: 'react-autosuggest__section-container--first',
            // sectionTitle: 'react-autosuggest__section-title'
        }

        return (
            <>
                <Configure hitsPerPage="8" />
                <Autosuggest
                    suggestions={hits}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={this.getSuggestionValue}
                    renderSuggestion={this.renderSuggestion}
                    inputProps={inputProps}
                    multiSection={true}
                    theme={theme}
                    renderSectionTitle={this.renderSectionTitle}
                    getSectionSuggestions={this.getSectionSuggestions}
                />
                <Index indexName="faq" />
                <Index indexName="concept" />
                <Index indexName="setup" />
                <Index indexName="api" />
                <Index indexName="tutorial" />
                <Index indexName="integration" />
            </>
        )
    }
}


Results.propTypes = {
    hits: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentRefinement: PropTypes.string.isRequired,
    refine: PropTypes.func.isRequired,
}

const AutoComplete = connectAutoComplete(Results)

export default AutoComplete
