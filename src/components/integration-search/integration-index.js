import React from 'react'
import { Index } from 'react-instantsearch-dom'

const IntegrationIndex = ({ children }) => (
    <Index indexName="integration">{children}</Index>
)

export default IntegrationIndex
