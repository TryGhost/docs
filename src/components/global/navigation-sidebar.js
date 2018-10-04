import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

// TODO: find a way to prevent duplicated active links. Propably passing states to the
// parent component.
class SidebarLink extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isActive: null,
            linkClasses: `midgrey`
        }
        this.setActiveLink = this.setActiveLink.bind(this)
    }

    setActiveLink() {
        console.log('Set active link: ', this.props.link);
        this.setState({ isActive: this.props.link, linkClasses: `blue fw6` })
    }

    render() {
        if (this.props.link.match(/^\s?http(s?)/gi)) {
            return (
                <a href={this.props.link} className="link midgrey" target="_blank" rel="noopener noreferrer">{this.props.title}</a>
            )
        } else {
            return (
                <Link to={this.props.link} className={`link ` + this.state.linkClasses}>{this.props.title}</Link>
            )
        }
    }

    componentDidMount() {
        if (this.props.location.pathname === this.props.link) {
            this.setActiveLink(this.props.link)
        }
    }
}

SidebarLink.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired,
}

SidebarLink.defaultProps = {
    location: {path: `/`}
}

class SidebarList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            expandedSidebarList: false,
        }
        this.toggleExpandedSidebarList = this.toggleExpandedSidebarList.bind(this)
    }
    toggleExpandedSidebarList() {
        this.setState({ expandedSidebarList: !this.state.expandedSidebarList, })
    }

    render() {
        const { item, location } = this.props
        const level = this.props.level || 0
        // console.log('TCL: SidebarList -> render -> level', level);

        if (item.items && item.items.length) {
            // CASE: the section title does not have a link, but it has child items, so we take the
            // first link we find from the child item
            const autoLink = item.link || item.items[0].link
            // const isFirstLevel = level >= 1 ? true : false


            return (
                <li className="mb6">
                    <h4 className="fw4"
                        // onClick={`${isFirstLevel} ? '' : ${this.toggleExpandedSidebarList}`}
                    >
                        <SidebarLink link={autoLink} title={item.title} location={location} />
                    </h4>
                    <ul className={`list ma0 pa0 ml6 ${!this.state.expandedSidebarList ? '' : ''}`}>
                        {item.items.map((nestedLink, i) => <SidebarList key={i} item={nestedLink} location={location} level={level + 1} />)}
                    </ul>
                </li>
            )
        } else {
            return (
                <li className="mb4"><SidebarLink link={item.link} title={item.title} location={location} /></li>
            )
        }
    }
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
