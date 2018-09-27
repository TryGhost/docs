import React from 'react'
// import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
// import { connectAutoComplete } from 'react-instantsearch/connectors';
import AgAutocomplete from 'react-algoliasearch'

const Search = () => (
    <AgAutocomplete
        apiKey={`521c444a09acd62368618fce7f15dafa`}
        appId={`6RCFK5TOI5`}
        keyName="title"
        indices={[{ index: `docs` }]}
        inputId="input-search"
        placeholder="Search..."
    />
);

export default Search;
