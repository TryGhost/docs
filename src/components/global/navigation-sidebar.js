import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

/**
 * Takes a path string and created different path RegExps to test against
 * @param  {String} path e. g. `/api/context/something/`
 * @return {Array} with combinations of this path as RegExp, e.g. `/api/$`, `/api/context/$`, `/api/context/something/$`
 */
function getSidebarListRegex(path) {
    const sidebarlistsRegexToExpand = []
    let pathArray = path.split(`/`)
    let pathRegex

    pathArray = pathArray.filter(path => (path.length > 0))

    pathArray.forEach((path, i) => {
        if (i < 1) {
            pathRegex = `/${path}/`
        } else {
            pathRegex += `${path}/`
        }
        sidebarlistsRegexToExpand.push(new RegExp(`${ pathRegex }$`, `i`))
    })

    return sidebarlistsRegexToExpand
}

// TODO: find a way to prevent duplicated active links.
class SidebarLink extends React.Component {
    render() {
        const isStarred = this.props.title.slice(-1) === `*`
        const title = isStarred ? this.props.title.slice(0, -1) : this.props.title

        // Give special classes to starred items
        // TODO: Needs more logic, once the usage of `*` is clear
        const starredClasses = ``

        if (this.props.link.match(/^\s?http(s?)/gi)) {
            return (
                <a href={this.props.link} className="link midgrey" target="_blank" rel="noopener noreferrer">{title}</a>
            )
        } else {
            return (
                <Link to={this.props.link} className={`link ${this.props.linkClasses} ${isStarred ? starredClasses : ` `}`}>{title}</Link>
            )
        }
    }
}

SidebarLink.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    linkClasses: PropTypes.string.isRequired,
}

class SidebarList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sidebarListClasses: `dn`,
            linkClasses: `midgrey`,
        }
        this.extendSidebar = this.extendSidebar.bind(this)
        this.setActiveLink = this.setActiveLink.bind(this)
    }

    setActiveLink() {
        this.setState({ linkClasses: `blue fw6` })
    }

    extendSidebar() {
        this.setState({ sidebarListClasses: `db` })
    }

    render() {
        let level = this.props.level || 1
        const hasNestedItems = this.props.item.items && this.props.item.items.length
        const isFirstLevel = level === 1
        const isSecondLevel = level === 2

        // All nested items are going to be hidden starting with
        // all children of level 2 items
        const hideNestedItems = isSecondLevel

        // Update the classes here for first level items
        const firstLevelClasses = `f4 lh-h2 fw4 ma0 pa0`

        if (hasNestedItems) {
            // A section can not have a link on its own. In this case, we grab the
            // link of the first nested item
            const autoLink = this.props.item.link || this.props.item.items[0].link
            const childrenLevel = level += 1

            return (
                <li className="mb6">
                    <h4 className={`${isFirstLevel ? firstLevelClasses : `fw4`}`}>
                        <SidebarLink
                            link={autoLink}
                            title={this.props.item.title}
                            linkClasses={this.state.linkClasses}
                        />
                    </h4>
                    <ul className={`list ma0 pa0 ml6 ${hideNestedItems ? this.state.sidebarListClasses : `db`}`}>
                        {this.props.item.items.map((nestedLink, i) => (
                            <SidebarList
                                key={i}
                                item={nestedLink}
                                location={this.props.location}
                                level={childrenLevel}
                                expandedSidebarLists={this.props.expandedSidebarLists}
                            />
                        ))}
                    </ul>
                </li>
            )
        } else {
            return (
                <li className={`${isFirstLevel ? firstLevelClasses + ` mb6` : isSecondLevel ? `mb6` : `mb4`}`}>
                    <SidebarLink
                        link={this.props.item.link}
                        title={this.props.item.title}
                        linkClasses={this.state.linkClasses}
                    />
                </li>
            )
        }
    }

    componentDidMount() {
        // First, find the currently active link
        if (this.props.location.pathname === this.props.item.link) {
            this.setActiveLink()
        }

        this.props.expandedSidebarLists.forEach((pathRegex) => {
            const link = this.props.item.link || this.props.item.items[0].link
            // Test against our list of positive urls. When the current link
            // matches any item from the list, the nested list items should be visible
            if (link.match(pathRegex)) {
                this.extendSidebar()
            }
        })
    }
}

SidebarList.propTypes = {
    item: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    expandedSidebarLists: PropTypes.array.isRequired,
    level: PropTypes.number,
    autolink: PropTypes.string,
}

SidebarList.defaultProps = {
    autolink: ``,
}

class SidebarNav extends React.Component {
    render() {
        const { sidebar, location } = this.props
        const [sidebarfile] = sidebar ? require(`../../data/sidebars/${sidebar}.yaml`) : []
        const sidebarlistsRegexToExpand = getSidebarListRegex(location.pathname)

        if (!sidebarfile) {
            return null
        }

        return (
            <nav className="mr5 miw50">
                {/* <h3 className="f8 ttu fw6 pa0 ma0 measure-0-4 pb2">{sidebarfile.title}</h3> */}
                <ul className="ma0 pa0 list mt4 f8">
                    {sidebarfile.items.map((item, i) => (
                        <SidebarList
                            key={i}
                            item={item}
                            location={location}
                            expandedSidebarLists={sidebarlistsRegexToExpand}
                        />
                    ))}
                </ul>
            </nav>
        )
    }
}

export default SidebarNav

SidebarNav.propTypes = {
    sidebar: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired,
}

SidebarNav.defaultProps = {
    location: { pathname: `/` },
}
