import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

function SidebarLink(props) {
    const { link, title, location } = props
    if (!location) {
        location = {pathname: `/`}
    }
    const linkClasses = location.pathname === link ? `blue fw6` : `midgrey`

    if (link.match(/^\s?http(s?)/gi)) {
        return (
            <a href={link} className="link midgrey" target="_blank" rel="noopener noreferrer">{title}</a>
        )
    } else {
        return (
            <Link to={link} className={`link ` + linkClasses}>{title}</Link>
        )
    }
}

SidebarLink.propTypes = {
    link: PropTypes.string,
    title: PropTypes.string,
}

function SidebarList(props) {
    const { item, location } = props

    if (item.items && item.items.length) {
        // CASE: the section title does not have a link, but it has child items, so we take the
        // first link we find from the child item
        const autoLink = item.link || item.items[0].link

        return (
            <li className="mb6">
                <h4 className="fw4"><SidebarLink link={autoLink} title={item.title} location={location} /></h4>
                <ul className="list ma0 pa0 ml6">
                    {item.items.map((nestedLink, i) => <SidebarList key={i} item={nestedLink} location={location} />)}
                </ul>
            </li>
        )
    } else {
        return (
            <li className="mb4"><SidebarLink link={item.link} title={item.title} location={location} /></li>
        )
    }
}

SidebarList.propTypes = {
    item: PropTypes.object,
}

// TODO: show only first level links by default, expand on click
// TODO: create special treatment options for titles that have a `*`

class SidebarNav extends React.Component {
    render() {
        const { sidebar, location } = this.props
        const [sidebarfile] = sidebar ? require(`../../data/sidebars/${sidebar}.yaml`) : []

        if (!sidebarfile) {
            return null
        }

        return (
            <>
                <nav className="mr5 miw50">
                    <h3 className="f8 ttu fw6 pa0 ma0 measure-0-4 pb2">{sidebarfile.title}</h3>
                    <ul className="ma0 pa0 list mt4 f8">
                        {sidebarfile.items.map((item, i) => <SidebarList key={i} item={item} location={location} />)}
                    </ul>
                </nav>
            </>
        )
    }
}

export default SidebarNav
