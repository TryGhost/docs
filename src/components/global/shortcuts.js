import React from 'react'

import SearchModal from './search-modal'

class Shortcuts extends React.Component {
    constructor() {
        super()

        this.state = {
            showModal: false,
        }

        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.openModal = this.openModal.bind(this)
    }

    openModal() {

    }

    handleKeyDown = (e) => {
        // TODO: don't enter the typed letter into the input field
        // e.preventDefault() <- this didn't work
        if ((e.key.match(/s/) || e.key.match(/\\/)) && !this.state.showModal) {
            this.setState(() => {
                console.log(`open fucking modal`, this.state.showModal)

                return { showModal: true }
            })
        }

        return null
    }

    componentDidMount() {
        document.addEventListener(`keydown`, this.handleKeyDown)
    }

    render() {
        return (<SearchModal isOpen={this.state.showModal} />)
    }
}

export default Shortcuts
