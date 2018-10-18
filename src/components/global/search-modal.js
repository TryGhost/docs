import React from 'react'
import Modal from 'react-modal'
import PropTypes from 'prop-types'

import Search from '../search'
// import { Spirit } from '../spirit-styles'
import Icon from './icon'

class SearchModal extends React.Component {
    constructor() {
        super()

        this.state = {
            modalIsOpen: false,
        }

        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.afterOpenModal = this.afterOpenModal.bind(this)
    }

    openModal() {
        this.setState(() => {
            return { modalIsOpen: true }
        })
    }

    closeModal() {
        this.setState(() => {
            return { modalIsOpen: false }
        })
    }

    afterOpenModal() {

    }

    componentDidMount() {
        Modal.setAppElement(`#___gatsby`)
    }

    render() {
        const { theme, isHome } = this.props

        return (
            <>
                {/* TODO: this can probably be simplyfied so we wouldn't need this conditional */}
                {isHome ?
                    <>
                        <div className="pa4 pl5 pr5 mt5 w-100 mw-s f4 br-pill bg-white shadow-3 center flex items-center justify-between">
                            <Icon name="search" className="fill-lightgrey-d2 h6" />
                            <label htmlFor="homesearch" className="clip">Search</label>
                            <input
                                id="homesearch"
                                name="homesearch"
                                type="text"
                                className="input-reset form-text ba b--transparent flex-auto ml2 whitney lh-1-0"
                                placeholder="Search documentation..."
                                autoComplete="off"
                                onFocus={this.openModal}
                                onClick={this.openModal}
                            />
                        </div>
                    </> :
                    <>
                        <label htmlFor="globalnavsearch" className="clip">Search</label>
                        <input
                            id="globalnavsearch"
                            name="globalnavsearch"
                            type="text"
                            className={theme.searchBox + ` f8 pa2 pl4 pr4 ba f8 fw4 br3 whitney form-text bn br-pill w-sidebar dn db-l lh-1-0`}
                            placeholder="Search documentation..."
                            autoComplete="off"
                            onFocus={this.openModal}
                            onClick={this.openModal}
                        />
                    </>
                }
                <Modal
                    isOpen={ this.state.modalIsOpen }
                    // style={customStyles}
                    onAfterOpen={ this.afterOpenModal }
                    onRequestClose={ this.closeModal }
                    // closeTimeoutMS={0}
                    shouldFocusAfterRender
                    contentLabel="Search"
                    shouldCloseOnEsc
                    shouldReturnFocusAfterClose={false}
                    className="search-modal br5 mw-m center left-0 right-0 top-14 bg-white absolute mb10 pa10 shadow-3"
                    overlayClassName="search-modal-overlay fixed absolute--fill flex flex-column items-center z-999"
                    bodyOpenClassName="body-modal-open z-9999"
                    // portalClassName=``
                >
                    <div className="absolute pa4 top-0 right-0" onClick={this.closeModal}><Icon name="close" className="fill-midgrey w3 h-auto" /></div>
                    {/* <div className="pa4 pl5 pr5 mt5 w-100 mw-s f4 br-pill bg-white shadow-3 center flex items-center justify-between"> */}
                    {/* <Icon name="search" className="fill-lightgrey-d2 h6" /> */}
                    <label htmlFor="globalsearch" className="clip">Search</label>
                    <Search />
                    {/* </div> */}
                </Modal>
            </>
        )
    }
}

SearchModal.defaultProps = {
    isHome: false,
}

SearchModal.propTypes = {
    theme: PropTypes.object,
    isHome: PropTypes.bool,
}

export default SearchModal
