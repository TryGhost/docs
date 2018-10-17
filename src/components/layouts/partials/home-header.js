import React from 'react'
import NavBar from './navbar'
// import SectionHeading from './section-heading'
import Search from '../../search'
import Icon from '../../global/icon'
import Box from '../../layouts/partials/box'
import { Spirit } from '../../spirit-styles'
import PropTypes from 'prop-types'

class MainBox extends React.Component {
    render() {
        return (
            <Box className="col-12 col-4-ns pa5 pa10-l pt8-l flex flex-column tdn content-stretch" to={ this.props.to } radius="4" elevation="2">
                <Icon name={ this.props.icon } className={`w10 h10 w12-ns h12-ns stroke-w--1-5 mr2 mb2 stroke-${this.props.color}`} />
                <div className="flex flex-column justify-between flex-auto">
                    <div>
                        <h2 className={ Spirit.h4 + `mt0 mt2-ns darkgrey flex-shrink-1` }>{ this.props.title }</h2>
                        <p className={ Spirit.p + `mt2 midgrey` }>{ this.props.children }</p>
                    </div>
                    <span className={ `${this.props.color} dib mt5 link fw5 f5 flex items-center` }>
                        Learn more <Icon name="arrow-right" className={ `w3 h3 ml2 fill-${this.props.color}` } />
                    </span>
                </div>
            </Box>
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
                    <NavBar theme="dark" searchField={ true } />
                </header>
                <div className={Spirit.page.xl + `pa-vw3 flex flex-column items-center`}>
                    <h1 className="ma0 pa0 f-headline">Ghost Documentation</h1>
                    {/* <p className="ma0 mt2 f4 white-80">All your favourite apps and tools, integrated with Ghost</p> */}
                    <div className="pa4 pl5 pr5 mt6 w-100 mw-s f4 br-pill bg-white shadow-3 center flex items-center justify-between">
                        <Icon name="search" className="fill-lightgrey-d2 h6" />
                        <label htmlFor="homesearch" className="clip">Search</label>
                        <Search />
                    </div>
                    <section className={ `grid-12 gutter-row-20 gutter-36-ns mt15` }>
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
