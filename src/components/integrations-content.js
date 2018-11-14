import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import Layout from './layouts/default'
import Integration from "./integration"
import { Spirit } from './spirit-styles'
import NavBar from './layouts/partials/navbar'
import { IntegrationIndex, IntegrationSearchBox, IntegrationResults } from './integration-search'
import IntegrationsTagList from './IntegrationsTagList'

class IntegrationsContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: this.props.posts,
            activeSorting: `date`,
            searchActive: false,
            currentFilter: ``,
        }

        this.searchSwitch = this.searchSwitch.bind(this)
        this.setCurrentFilter = this.setCurrentFilter.bind(this)
    }

    searchSwitch(val) {
        this.setState((state) => {
            return {
                searchActive: val ? val : !state.searchActive,
            }
        })
    }

    setCurrentFilter(filter) {
        this.setState(() => {
            return { currentFilter: filter }
        })
    }

    sortBy(field) {
        let firstSortField
        let secondSortField

        switch (field) {
        case `date`:
            firstSortField = `node.published_at`
            secondSortField = `node.title`
            this.setState(() => {
                return { activeSorting: `date` }
            })
            break
        case `title`:
            firstSortField = `node.title`
            secondSortField = `node.published_at`
            this.setState(() => {
                return { activeSorting: `title` }
            })
            break
        }

        const sortedPosts = _.sortBy(this.state.posts, [firstSortField, secondSortField])

        this.setState(() => {
            return { posts: sortedPosts }
        })
    }

    componentDidMount() {
        let tagSlug = /(?:\/*?integrations\/)(\S*)(?:\/{1})/.exec(this.props.location.pathname)
        tagSlug = tagSlug && tagSlug.length > 1 ? tagSlug[1] : ``

        this.setCurrentFilter(tagSlug)
    }

    render() {
        const { posts } = this.state

        return (
            <>
                <Layout
                    title="Integrations"
                    headerDividerStyle="shadow"
                    header={
                        <div className="bg-integrations-header-image">
                            <div className="bg-integrations-header-cover">
                                <header className="top-0 left-0 right-0 z-9999">
                                    <NavBar theme="light" />
                                </header>
                                <div className="pa-vw4 tc">
                                    <h1 className="f2-ns f1-m f-headline-l ma0 pa0 white gh-integration-header-shadow">Ghost Integrations</h1>
                                    <p className="ma0 mt2 f5 f4-ns white-80 lh-1-5">All your favourite apps and tools, integrated with Ghost</p>
                                    <IntegrationSearchBox
                                        searchActive={this.searchSwitch}
                                        returnTo={this.props.location.pathname}
                                    />
                                </div>
                            </div>
                        </div>
                    }
                >
                    <IntegrationIndex>
                        <div className={Spirit.page.xl + `pt10`}>
                            <div className="flex items-start br4">
                                <div className="gh-integration-sidebar flex-shrink-0 w50 mr5 dn db-ns">
                                    <div className="flex flex-column mb6" data-cy="sort">
                                        <h3 className="ma0 mb2">Sort by</h3>
                                        <a className={`link pa2 pl0 ${this.state.activeSorting === `date` ? `blue fw6` : `midgrey`}`} href="#" onClick={this.sortBy.bind(this, `date`)}>Most popular</a>
                                        <a className={`link pa2 pl0 ${this.state.activeSorting === `title` ? `blue fw6` : `midgrey`}`} href="#" onClick={this.sortBy.bind(this, `title`)}>A – Z</a>
                                    </div>
                                    <div className="flex flex-column mb6">
                                        <IntegrationsTagList
                                            location={this.props.location}
                                            setFilter={this.setCurrentFilter}
                                            searchActive={this.state.searchActive}
                                        />
                                    </div>
                                </div>
                                {this.state.searchActive ?
                                    <IntegrationResults /> :
                                    <>
                                        <div className="gh-integrations w-100">
                                            {posts.map(({ node }) => (
                                                <Integration key={node.id} post={node} />
                                            ))}
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                    </IntegrationIndex>
                </Layout>
            </>
        )
    }
}

IntegrationsContent.propTypes = {
    posts: PropTypes.array.isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
}

export default IntegrationsContent
