import React from 'react'
import PropTypes from 'prop-types'

import SidebarLink from './SidebarLink'

class SidebarList extends React.Component {
    render() {
        const linkClasses = `midgrey fw4 hover-blue-l2`
        const activeLinkClasses = `sidebarlink-active blue fw6`

        return (
            <>
                <ul className="relative sidebar-list ma0 pa0 list mb5 pl6 mt1">
                    {this.props.items.map((item, j) => (
                        <li key={j}>
                            <SidebarLink
                                link={item.link}
                                title={item.title}
                                linkClasses={(item.link === this.props.location.pathname ? activeLinkClasses : linkClasses)}
                            />
                        </li>
                    ))}
                </ul>
            </>
        )
    }
}

SidebarList.propTypes = {
    items: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired,
}

export default SidebarList
