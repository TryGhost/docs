import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

function LinkElement(props) {
    const link = props.link
    const title = props.title

    if (link.match(/^\s?http(s?)/gi)) {
        return (
            <a href={link} className="link midgrey" target="_blank" rel="noopener noreferrer">{title}</a>
        )
    } else {
        return (
            <Link to={link} className="link midgrey">{title}</Link>
        )
    }
}

LinkElement.propTypes = {
    link: PropTypes.string,
    title: PropTypes.string,
}

function SecondLevelItems(props) {
    const item = props.item

    return (
        <li className="mb3 lh-1-4"><LinkElement link={item.link} title={item.title} /></li>
    )
}

SecondLevelItems.propTypes = {
    item: PropTypes.object,
}

function FirstLevelItems(props) {
    const item = props.item

    if (item.items && item.items.length) {
        const titleLink = item.link || item.items[0].link

        return (
            <li className="mb6">
                <h4 className="fw4"><LinkElement link={titleLink} title={item.title} /></h4>
                <ul className="list ma0 pa0 ml6">
                    {item.items.map((secondLink, i) => <SecondLevelItems key={i} item={secondLink} />)}
                </ul>
            </li>
        )
    } else {
        return (
            <li className="mb4"><LinkElement link={item.link} title={item.title} /></li>
        )
    }
}

FirstLevelItems.propTypes = {
    item: PropTypes.object,
}

// TODO: active link classNames=`blue fw6`
// TODO: show only first level links by default, expand on click

const NavSidebar = (props) => {
    const sidebar = props.sidebar

    // TODO: this is horrible and only temporary
    if (!sidebar) {
        return null
    }

    const [sidebarfile] = require(`../../data/sidebars/${sidebar}.yaml`)

    if (!sidebarfile) {
        return null
    }

    return (
        <>
            <nav className="mr5 miw50">
                <h3 className="f8 ttu fw6 pa0 ma0 measure-0-4 pb2">{sidebarfile.title}</h3>
                <ul className="ma0 pa0 list mt4 f8">
                    {sidebarfile.items.map((item, i) => <FirstLevelItems key={i} item={item} />)}
                </ul>
            </nav>
        </>
    )
}

NavSidebar.propTypes = {
    sidebar: PropTypes.string,
}

export default NavSidebar
