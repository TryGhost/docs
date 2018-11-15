import React from 'react'
import PropTypes from 'prop-types'

import SidebarLink from './SidebarLink'
import SidebarList from './SidebarList'

function groupExpanded(items, pathname) {
    var breakException = {}

    try {
        items.forEach((item) => {
            if (item.link === pathname) {
                throw breakException
            }
        })
    } catch (e) {
        if (e !== breakException) {
            throw e
        } else {
            return true
        }
    }
    return false
}

class SidebarNav extends React.Component {
    render() {
        const { sidebar, location } = this.props
        const [sidebarfile] = sidebar ? require(`../../../data/sidebars/${sidebar}.yaml`) : []

        if (!sidebarfile) {
            return null
        }

        if (!sidebarfile.groups) {
            return (
                <div></div>
            )
        }

        return (
            <nav className="mt5 mb5 mt10-ns mb0-ns relative" data-cy="sidebar">
                { sidebarfile.groups.map((group, i) => (
                    <div key={ i } className="mt1">
                        { groupExpanded(group.items, this.props.location.pathname) ?
                            <>
                                <h4 className="f5 fw5 link pa0 ma0">{ (group.items[0].link ? <SidebarLink link={ group.items[0].link } title={ group.group } linkClasses="midgrey link" /> : group.group) }</h4>
                                <SidebarList
                                    key={ i }
                                    items={ group.items }
                                    location={ location }
                                /></> : <h4 className="f5 fw5 link pa0 ma0">{ (group.items[0].link ? <SidebarLink link={ group.items[0].link } title={ group.group } linkClasses="midgrey hover-blue-l2 link" /> : group.group) }</h4> }
                    </div>
                )) }
            </nav>
        )
    }
}

SidebarNav.propTypes = {
    sidebar: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired,
}

SidebarNav.defaultProps = {
    location: { pathname: `/` },
}

export default SidebarNav
