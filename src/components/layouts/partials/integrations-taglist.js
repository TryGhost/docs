import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

// TODO: tags and their slugs are not final yet!
const tags = [
    {
        name: `All integrations`,
        link: `/integrations/`,
    },
    {
        name: `Automation`,
        link: `/integrations/automation/`,
    },
    {
        name: `Analytics`,
        link: `/integrations/analytics/`,
    },
    {
        name: `Editor Cards`,
        link: `/integrations/card/`,
    },
    {
        name: `Communication`,
        link: `/integrations/email/`,
    },
    {
        name: `Marketing`,
        link: `/integrations/marketing/`,
    },
    {
        name: `Support`,
        link: `/integrations/support/`,
    },
    {
        name: `Storage`,
        link: `/integrations/storage/`,
    },
    {
        name: `Utilities`,
        link: `/integrations/utilities/`,
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
