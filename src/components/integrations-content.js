import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import Layout from './layouts/default'
import Integration from "./integration"
import { Spirit } from './spirit-styles'
import IntegrationsHeader from './layouts/partials/integrations-header'
import IntegrationsTagList from './layouts/partials/integrations-taglist'

class IntegrationsContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: this.props.posts,
            activeSorting: `date`,
        }
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

    render() {
        const { posts } = this.state

        return (
            <>
                <Layout title="Integrations" headerDividerStyle="shadow" header={<IntegrationsHeader />}>
                    <div className={Spirit.page.xl + `pt10`}>
                        <div className="flex br4">
                            <div className="gh-integration-sidebar flex-shrink-0 w50 mr5">
                                <div className="flex flex-column mb6">
                                    {/* TODO: make sortable fn here */}
                                    <h3 className="ma0 mb2">Sort by</h3>
                                    <a className={`link pa2 pl0 ${this.state.activeSorting === `date` ? `blue fw6` : `midgrey`}`} href="#" onClick={this.sortBy.bind(this, `date`)}>Most popular</a>
                                    <a className={`link pa2 pl0 ${this.state.activeSorting === `title` ? `blue fw6` : `midgrey`}`} href="#" onClick={this.sortBy.bind(this, `title`)}>A – Z</a>
                                </div>
                                <div className="flex flex-column mb6">
                                    <IntegrationsTagList location={this.props.location} />
                                </div>
                            </div>
                            <div className="gh-integrations w-100">
                                {posts.map(({ node }) => (
                                    <Integration key={node.id} post={node} />
                                ))}
                            </div>
                        </div>
                    </div>
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
