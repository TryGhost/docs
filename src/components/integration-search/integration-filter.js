import React from 'react'
import PropTypes from 'prop-types'
import { connectMenu } from 'react-instantsearch-dom'

class IntegrationMenu extends React.Component {
    static propTypes = {
        refine: PropTypes.func.isRequired,
        items: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string.isRequired,
                value: PropTypes.string.isRequired,
                count: PropTypes.number.isRequired,
                isRefined: PropTypes.bool.isRequired,
            })
        ),
    }

    state = {
        query: ``,
    }

    selectItem = (item) => {
        this.resetQuery()
        this.props.refine(item.value)
    };

    resetQuery = () => {
        this.setState({ query: `` })
    };

    renderItem = item => (<a
        key={item.label}
        className="link pa2 pl0 midgrey"
        onClick={(e) => {
            e.preventDefault()
            this.selectItem(item)
        }}
    >{item.label}</a>)

    render() {
        let items = this.props.items
        return (
            <>
                <a
                    className="link pa2 pl0 blue fw6"
                    onClick={(e) => {
                        e.preventDefault()
                        this.resetQuery()
                    }}
                >All integrations</a>
                {items.map(this.renderItem)}
            </>
        )
    }
}

const IntegrationFilterMenu = connectMenu(IntegrationMenu)

export default IntegrationFilterMenu
