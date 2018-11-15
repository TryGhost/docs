import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import NavBar from '../common/NavBar'
import { SearchModal } from '../common/search'
import { Icon } from '../common'
import { Spirit } from '../../styles/spirit-styles'

class MainBox extends React.Component {
    render() {
        return (
            <Link className="col-12 col-4-ns pa5 pa8-ns pa10-l pt8-l flex flex-column-ns items-start tdn content-stretch home-main-box-shadow db br4 bg-white" to={ this.props.to }>
                <Icon name={ this.props.icon } className={`w10 h-auto w12-ns stroke-w--1-5 mr3 mb2 stroke-${this.props.color}`} />
                <div className="flex flex-column justify-between flex-auto">
                    <div>
                        <h2 className={ Spirit.h4 + `mt0 mt2-ns darkgrey flex-shrink-1` }>{ this.props.title }</h2>
                        <p className={ Spirit.small + `midgrey` }>{ this.props.children }</p>
                    </div>
                    <span className={ `${this.props.color} dib mt2 link fw5 f7 f5-ns flex items-center` }>
                        Learn more <Icon name="arrow-right" className={ `w3 h3 ml2 fill-${this.props.color}` } />
                    </span>
                </div>
            </Link>
        )
    }
}

MainBox.propTypes = {
    to: PropTypes.string,
    title: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.string,
    children: PropTypes.any,
}

// Custom headings must be react components. You should include the <NavBar /> component
// somewhere in it. You can optionally set the theme of the navbar to `dark` or `light`.
class HomeHeader extends React.Component {
    render() {
        return (
            <div className="gh-bg-home bb b--whitegrey">
                <header className="top-0 left-0 right-0 z-9999">
                    <NavBar theme="light" searchField={ true } />
                </header>
                <div className={Spirit.page.xl + `pb5 pt10 pt15-ns pt20-l pb10-ns pb15-l flex flex-column items-center bt bn-ns b--white-10`}>
                    <h1 className="ma0 pa0 f2 f1-ns f-headline-l white header-heading-shadow">Ghost Documentation</h1>
                    {/* <p className="ma0 mt2 f4 white-80">All your favourite apps and tools, integrated with Ghost</p> */}
                    <SearchModal isHome />

                    <section className={ `grid-12 gutter-row-20 gutter-36-ns mt10 mt20-ns mt25-l miw-100 miw-auto-ns home-main-box-margin-ns z-999` }>
                        <MainBox
                            to="/concepts/introduction/"
                            title="Core Concepts"
                            icon="blocks"
                            color="purple">
                            Understand the fundamentals of Ghost development.</MainBox>

                        <MainBox
                            to="/setup/"
                            title="Setup Guide"
                            icon="rocket"
                            color="blue">
                            Setting up a Ghost site on a server or locally.</MainBox>

                        <MainBox
                            to="/tutorials/"
                            title="Tutorials"
                            icon="typing"
                            color="tutorial-green">
                            Browse tutorials for most common setup and development use-cases.</MainBox>
                    </section>
                </div>
            </div>
        )
    }
}

export default HomeHeader
