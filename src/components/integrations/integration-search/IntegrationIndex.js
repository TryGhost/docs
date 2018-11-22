import React from 'react'
import PropTypes from 'prop-types'
import { Index } from 'react-instantsearch-dom'

const IntegrationIndex = ({ children }) => (<Index indexName="integration">{children}</Index>)

IntegrationIndex.propTypes = {
    children: PropTypes.node.isRequired,
}

export default IntegrationIndex
