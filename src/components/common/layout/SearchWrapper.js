import React from "react"
import {
    InstantSearch,
    Configure,
} from 'react-instantsearch-dom'

const SearchWrapper = ({ children }) => (
    <InstantSearch
        appId="6RCFK5TOI5"
        apiKey="521c444a09acd62368618fce7f15dafa"
        indexName="faq"
    >
        <Configure attributesToSnippet="html" />
        {children}
    </InstantSearch>
)

export default SearchWrapper
