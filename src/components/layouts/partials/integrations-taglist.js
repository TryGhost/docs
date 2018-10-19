import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const tags = [
    {
        name: `All integrations`,
        link: `/integrations/`,
    },
    {
        name: `Analytics`,
        link: `/integrations/analytics/`,
    },
    {
        name: `Card`,
        link: `/integrations/card/`,
    },
    {
        name: `Comments`,
        link: `/integrations/comments/`,
    },
    {
        name: `Email`,
        link: `/integrations/email/`,
    },
    {
        name: `Marketing`,
        link: `/integrations/marketing/`,
    },
    {
        name: `Storage`,
        link: `/integrations/storage/`,
    },
]

class IntegrationsTagList extends React.Component {
    render() {
        return (
            <>
                <h3 className="ma0 mb2">Filter by</h3>
                    { tags.map((item, i) => (
                        <Link key={i} to={item.link} className={(this.props.location.pathname === item.link ? `blue fw6` : `midgrey`) + ` link pa2 pl0` }>{ item.name }</Link>
                    )) }

            </>
        )
    }
}

IntegrationsTagList.propTypes = {
    location: PropTypes.object.isRequired,
}

export default IntegrationsTagList
