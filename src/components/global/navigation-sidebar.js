import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

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

class SidebarLink extends React.Component {
    render() {
        if (this.props.link) {
            if (this.props.link.match(/^\s?http(s?)/gi)) {
                return (
                    <a href={ this.props.link } className={ `link db pa2 pl0 ` + this.props.linkClasses } target="_blank" rel="noopener noreferrer">{ this.props.title }</a>
                )
            } else {
                return (
                    <Link to={ this.props.link } className={ `link db pa2 pl0 ${this.props.linkClasses}` }>{ this.props.title }</Link>
                )
            }
        } else {
            return (
                <>{ this.props.title }</>
            )
        }
    }
}

class SidebarList extends React.Component {
    render() {
        const linkClasses = `midgrey-l1 fw4 hover-blue-l2`
        const activeLinkClasses = `sidebarlink-active blue fw6`

        return (
            <>
                <ul className="relative sidebar-list ma0 pa0 list mt2 mb5 pl6">
                    { this.props.items.map((item, j) => (
                        <li key={ j }>
                            <SidebarLink
                                link={ item.link }
                                title={ item.title }
                                linkClasses={ (item.link === this.props.location.pathname ? activeLinkClasses : linkClasses) }
                            />
                        </li>
                    )) }
                </ul>
            </>
        )
    }
}

class SidebarNav extends React.Component {
    render() {
        const { sidebar, location } = this.props
        const [sidebarfile] = sidebar ? require(`../../data/sidebars/${sidebar}.yaml`) : []

        if (!sidebarfile) {
            return null
        }

        if (!sidebarfile.groups) {
            return (
                <div></div>
            )
        }

        return (
            <nav className="nt2">
                { sidebarfile.groups.map((group, i) => (
                    <div key={ i } className="mt2">
                        { groupExpanded(group.items, this.props.location.pathname) ?
                            <>
                                <h4 className="f5 fw5 link pa0 ma0">{ (group.items[0].link ? <SidebarLink link={ group.items[0].link } title={ group.group } linkClasses="midgrey-l1 link" /> : group.group) }</h4>
                                <SidebarList
                                    key={ i }
                                    items={ group.items }
                                    location={ location }
                                /></> : <h4 className="f5 fw5 link pa0 ma0">{ (group.items[0].link ? <SidebarLink link={ group.items[0].link } title={ group.group } linkClasses="midgrey-l1 hover-blue-l2 link" /> : group.group) }</h4> }
                    </div>
                )) }
            </nav>
        )
    }
}

SidebarLink.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    linkClasses: PropTypes.string.isRequired,
}

SidebarList.propTypes = {
    items: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired,
}

SidebarNav.propTypes = {
    sidebar: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired,
}

SidebarNav.defaultProps = {
    location: { pathname: `/` },
}

export default SidebarNav