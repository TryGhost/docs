import React from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link'
import { Highlight, Snippet, Index, Configure, connectAutoComplete } from 'react-instantsearch-dom'
import Autosuggest from 'react-autosuggest'
import { Spirit } from './spirit-styles';
import { searchConfig } from '../utils/query-config'

const HitTemplate = (props) => {
    const hit = props.hit
    return(
        <>
            <Link to={ hit.url } className="tdn db pt3 pb3 blue search-result nl5 nr11 pl5 pr11 br3 br--left">
                <h4 className={ Spirit.h5 + `dib` }><Highlight attribute="title" hit={ hit } tagName="mark" className="search-result-page blue" /></h4>
                <p className={ Spirit.small + `midgrey nudge-bottom--2` }><Snippet attribute="html" hit={ hit } className="search-result-snippet" />...</p>
            </Link>
        </>
    )
}

const renderSectionSuggestion = (hit) => {
    return <HitTemplate hit={ hit }/>
}

const renderFaqSectionSuggestion = (hit) => {
    return <HitTemplate hit={ hit } />
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
        return searchConfig[section.index];
    }

    getSectionSuggestions(section) {
        return section.hits;
    }

    render() {
        // Don't show sections with no results
        let hits = this.props.hits.filter(hit => {
            return hit.hits && hit.hits.length !== 0
        });

        const { value } = this.state;
        const inputProps = {
            placeholder: `Search documentation...`,
            onChange: this.onChange,
            value,
            autoFocus: true
        }

        // <input id="homesearch" name="homesearch" className="input-reset form-text ba b--transparent flex-auto ml2 whitney lh-1-0" type="text" placeholder="Search documentation..." autoComplete="off" />
        const inputTheme = `input-reset form-text b--transparent search-modal-field-bg br-pill flex-auto whitney lh-1-0 pa2 pl8 plr3 w-100 dark-placeholder`

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
            suggestionsContainerOpen: 'pa11 pt3 pb3 mt10 bt b--whitegrey nl10 nr10 nb10 search-modal-result-container',
            suggestionsList: 'list pa0 ma0 search-modal-suggestion-list flex-auto ml11',
            // suggestion: 'react-autosuggest__suggestion',
            // suggestionFirst: 'react-autosuggest__suggestion--first',
            // suggestionHighlighted: 'red',
            sectionContainer: 'pb4',
            // sectionContainerFirst: 'bn',
            sectionTitle: 'f6 f5-l lh-h4 fw5 midgrey w25 tr mt2 sticky top-2'
        }

        return (
            <>
                <Configure hitsPerPage="5" />
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
                {/* Don't include integrations till we're ready: <Index indexName="integration" /> */}
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
