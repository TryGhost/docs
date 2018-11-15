import React from 'react'
import PropTypes from 'prop-types'
import { connectHits } from 'react-instantsearch-dom'
import IntegrationBox from '../IntegrationBox'

class IntegrationResults extends React.Component {
    render() {
        return (
            <div className="gh-integrations w-100">
                {this.props.hits.map(hit => <IntegrationBox key={hit.objectID} hit={hit} />)}
            </div>
        )
    }
}

IntegrationResults.propTypes = {
    hits: PropTypes.array.isRequired,
}

const IntegrationResultsList = connectHits(IntegrationResults)

export default IntegrationResultsList
