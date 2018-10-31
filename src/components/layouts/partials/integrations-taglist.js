import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

// TODO: tags and their slugs are not final yet!
const tags = [
    {
        name: `All integrations`,
        link: `/integrations/`,
    },
    // {
    //     name: `Automation`,
    //     link: `/integrations/automation/`,
    // },
    // {
    //     name: `Analytics`,
    //     link: `/integrations/analytics/`,
    // },
    // {
    //     name: `Cards`,
    //     link: `/integrations/card/`,
    // },
    {
        name: `Content`,
        link: `/integrations/content/`,
    },
    // {
    //     name: `Communication`,
    //     link: `/integrations/email/`,
    // },
    // {
    //     name: `Marketing`,
    //     link: `/integrations/marketing/`,
    // },
    // {
    //     name: `Storage`,
    //     link: `/integrations/storage/`,
    // },
    // {
    //     name: `Support`,
    //     link: `/integrations/support/`,
    // },
    {
        name: `Surveys & Forms`,
        link: `/integrations/surveys-forms/`,
    },
    // {
    //     name: `Utilities`,
    //     link: `/integrations/utilities/`,
    // },
]

class IntegrationsTagList extends React.Component {
    constructor(props) {
        super(props)

        this.handleFilter = this.handleFilter.bind(this)
    }

    handleFilter(e) {
        let tagSlug = /(?:\/*?integrations\/)(\S*)(?:\/{1})/.exec(e.target.href)

        tagSlug = tagSlug && tagSlug.length > 1 ? tagSlug[1] : ``

        this.props.setFilter(tagSlug)
    }
    render() {
        return (
            <>
                <h3 className="ma0 mb2">Filter by</h3>
                    { tags.map((item, i) => (
                        <Link
                            key={i}
                            to={item.link}
                            className={(this.props.location.pathname === item.link ? `blue fw6` : `midgrey`) + ` link pa2 pl0` }
                            onClick={this.handleFilter}
                        >
                            { item.name }
                        </Link>
                    )) }

            </>
        )
    }
}

IntegrationsTagList.propTypes = {
    location: PropTypes.object.isRequired,
    setFilter: PropTypes.func.isRequired,
}

export default IntegrationsTagList
