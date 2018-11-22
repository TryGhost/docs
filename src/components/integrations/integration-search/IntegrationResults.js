import React from 'react'
import PropTypes from 'prop-types'
import { connectHits } from 'react-instantsearch-dom'

import { IntegrationBox } from '../.'

const IntegrationResults = ({ hits }) => (
    <div className="gh-integrations w-100">
        {hits.map(hit => <IntegrationBox key={hit.objectID} hit={hit} section="integrations" />)}
    </div>
)

IntegrationResults.propTypes = {
    hits: PropTypes.arrayOf(
        PropTypes.shape({
            objectID: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
}

const IntegrationResultsList = connectHits(IntegrationResults)

export default IntegrationResultsList
