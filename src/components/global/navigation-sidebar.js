import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

function LinkElement(props) {
    const { link, title } = props
    // TODO: get the location here somehow from the router (why does this.props.location not work?)
    // const linkClasses = window.location.pathname === link ? `blue fw6` : `midgrey`
    const linkClasses = `midgrey`

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

LinkElement.propTypes = {
    link: PropTypes.string,
    title: PropTypes.string,
}

function ItemList(props) {
    const { item } = props

    return (
        <li className="mb3 lh-1-4"><LinkElement link={item.link} title={item.title} /></li>
    )
}

ItemList.propTypes = {
    item: PropTypes.object,
}

function Sections(props) {
    const { item } = props

    if (item.items && item.items.length) {
        // CASE: the section title does not have a link, but it has child items, so we take the
        // first link we find from the child item
        const sectionLink = item.link || item.items[0].link

        return (
            <li className="mb6">
                <h4 className="fw4"><LinkElement link={sectionLink} title={item.title} /></h4>
                <ul className="list ma0 pa0 ml6">
                    {item.items.map((secondLink, i) => <ItemList key={i} item={secondLink} />)}
                </ul>
            </li>
        )
    } else {
        return (
            <li className="mb4"><LinkElement link={item.link} title={item.title} /></li>
        )
    }
}

Sections.propTypes = {
    item: PropTypes.object,
}

// TODO: show only first level links by default, expand on click
// TODO: create special treatment options for titles that have a `*`

const NavSidebar = (props) => {
    const { sidebar } = props

    const [sidebarfile] = sidebar ? require(`../../data/sidebars/${sidebar}.yaml`) : []

    if (!sidebarfile) {
        return null
    }

    return (
        <>
            <nav className="mr5 miw50">
                <h3 className="f8 ttu fw6 pa0 ma0 measure-0-4 pb2">{sidebarfile.title}</h3>
                <ul className="ma0 pa0 list mt4 f8">
                    {sidebarfile.items.map((item, i) => <Sections key={i} item={item} />)}
                </ul>
            </nav>
        </>
    )
}

NavSidebar.propTypes = {
    sidebar: PropTypes.string,
}

export default NavSidebar
