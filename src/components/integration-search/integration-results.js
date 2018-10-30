import React from 'react'
import PropTypes from 'prop-types'
import { connectHits } from 'react-instantsearch-dom'
import Integration from '../integration'

const IntegrationResults = connectHits(({ hits }) => (
    <div className="gh-integrations w-100">
        {hits.map(hit => <Integration key={hit.objectID} hit={hit} />)}
    </div>
))

Integration.propTypes = {
    hits: PropTypes.array.isRequired,
}

export default IntegrationResults
