import React from "react"
import {
    InstantSearch,
} from 'react-instantsearch-dom'

export default ({ children }) => (
    <InstantSearch
        appId="6RCFK5TOI5"
        apiKey="521c444a09acd62368618fce7f15dafa"
        indexName="faq"
    >
        {children}
    </InstantSearch>
)
