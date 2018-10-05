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
        if (this.props.link.match(/^\s?http(s?)/gi)) {
            return (
                <a href={this.props.link} className="link midgrey" target="_blank" rel="noopener noreferrer">{this.props.title}</a>
            )
        } else {
            return (
                <Link to={this.props.link} className={`link ` + this.props.linkClasses}>{this.props.title}</Link>
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
        const hasChildren = this.props.item.items && this.props.item.items.length

        if (hasChildren) {
            // A section can not have a link on its own. In this case, we grab the
            // link of the first nested item
            const autoLink = this.props.item.link || this.props.item.items[0].link
            const childrenLevel = level += 1

            return (
                <li className="mb6">
                    <h4 className="fw4">
                        <SidebarLink
                            link={autoLink}
                            title={this.props.item.title}
                            linkClasses={this.state.linkClasses}
                        />
                    </h4>
                    <ul className={`list ma0 pa0 ml6 ${this.state.sidebarListClasses}`}>
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
                <li className="mb4">
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
            // Test against our list of positive urls. When the current link
            // matches any item from the list, the nested list items should be visible
            if (this.props.item.link.match(pathRegex)) {
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
}

// TODO: create special treatment options for titles that have a `*`
// TODO: different styles for second and third level items
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
                <h3 className="f8 ttu fw6 pa0 ma0 measure-0-4 pb2">{sidebarfile.title}</h3>
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
