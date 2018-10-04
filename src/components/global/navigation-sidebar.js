import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

// TODO: find a way to prevent duplicated active links. Propably passing states to the
// parent component.
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
            activeLinkId: ``,
            linkClasses: `midgrey`,
        }
        this.extendSidebar = this.extendSidebar.bind(this)
        this.setActiveLink = this.setActiveLink.bind(this)
    }

    setActiveLink() {
        this.setState((state, props) => {
            return { activeLinkId: props.id, linkClasses: `blue fw6` }
        })
    }

    extendSidebar() {
        this.setState({ sidebarListClasses: `db` })
    }

    render() {
        let level = this.props.newLevel || 1
        const hasChildren = this.props.item.items && this.props.item.items.length

        if (hasChildren) {
            // CASE: the section title does not have a link, but it has child items, so we take the
            // first link we find from the child item
            const autoLink = this.props.item.link || this.props.item.items[0].link
            const childrenLevel = level += 1
            const sideBarClass = this.props.expandSidebar || this.state.sidebarListClasses

            return (
                <li className="mb6" onClick={this.extendSidebar}>
                    <h4 className="fw4">
                        <SidebarLink
                            link={autoLink}
                            title={this.props.item.title}
                            linkClasses={this.state.linkClasses}
                        />
                    </h4>
                    <ul id={this.props.id} className={`list ma0 pa0 ml6 ${this.state.activeLinkId === this.props.id ? `db` : sideBarClass}`}>
                        {this.props.item.items.map((nestedLink, i) => (
                            <SidebarList
                                key={i}
                                id={`${this.props.id}-${i}-${nestedLink.title.toLowerCase()}`}
                                item={nestedLink}
                                location={this.props.location}
                                newLevel={childrenLevel}
                                expandSidebar={`db`}
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
        let activeLinkRegex
        // Someone will probably kill me for this, but the state will
        // not get updated immediately, so need this temp helper here
        // TODO: make this pretty and React.js conform
        let activeLinkTemp

        // First, find the currently active link
        if (this.props.location.pathname === this.props.item.link) {
            activeLinkTemp = this.props.id
            activeLinkRegex = new RegExp(`^${this.props.id}`)
            this.setActiveLink()
        }

        if (activeLinkTemp && activeLinkTemp.match(activeLinkRegex)) {
            this.extendSidebar()
        }
    }
}

SidebarList.propTypes = {
    item: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
}

SidebarList.propTypes = {
    item: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    level: PropTypes.string,
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
                        {sidebarfile.items.map((item, i) => <SidebarList key={i} id={`${i}-${item.title.toLowerCase()}`} item={item} location={location} />)}
                    </ul>
                </nav>
            </>
        )
    }
}

export default SidebarNav

SidebarNav.propTypes = {
    sidebar: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired,
}

SidebarNav.defaultProps = {
    location: { path: `/` },
}
