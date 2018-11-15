import React from 'react'
import Modal from 'react-modal'
import PropTypes from 'prop-types'

import Search from '../search'
import Icon from './Icon'

class SearchModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            modalIsOpen: false,
        }

        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
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
                        <div className="pa3 pa4-ns pl4 pr4 pl5-ns pr5-ns mt4 mt6-ns mb5 mb0-ns w-100 mw-s mw-100 f4 br-pill bg-white-20 shadow-3 center flex items-center justify-between">
                            <Icon name="search" className="fill-white w5 w6-ns h-auto" />
                            <label htmlFor="homesearch" className="clip">Search</label>
                            <input
                                id="homesearch"
                                name="homesearch"
                                type="text"
                                className="input-reset form-text ba b--transparent flex-auto ml2 whitney lh-normal f4 f4-ns bg-transparent white-placeholder"
                                placeholder="Search documentation..."
                                autoComplete="off"
                                onFocus={this.openModal}
                                onClick={this.openModal}
                            />
                        </div>
                    </> : null }
                {theme ?
                    <div className="relative h8 h-auto-l" onClick={ this.openModal }>
                        <Icon name="search" className={`${theme.icon} w4 h-auto absolute top-2 right-3 left-3-l`} />
                        <label htmlFor="globalnavsearch" className="clip">Search</label>
                        <input
                            id="globalnavsearch"
                            name="globalnavsearch"
                            type="text"
                            className={ theme.searchBox + ` search-navbar-input-field f8 pa2 pl8 pr4 ba f8 fw4 br3 whitney form-text bn br-pill w-sidebar dn db-l lh-normal`}
                            placeholder="Search documentation..."
                            autoComplete="off"
                            onFocus={this.openModal}
                        />
                    </div> : null}
                <Modal
                    isOpen={this.state.modalIsOpen }
                    // style={customStyles}
                    onAfterOpen={ this.afterOpenModal }
                    onRequestClose={ this.closeModal }
                    // closeTimeoutMS={0}
                    shouldFocusAfterRender
                    contentLabel="Search"
                    shouldCloseOnEsc
                    shouldReturnFocusAfterClose={false}
                    className="search-modal br5 mw-m center left-5 right-5 top-5 left-15-ns right-15-ns top-15-ns bg-white absolute mb10 pa5 pt10 pb10 pa10-ns shadow-3"
                    overlayClassName="search-modal-overlay fixed absolute--fill flex flex-column items-center z-999"
                    bodyOpenClassName="body-modal-open z-9999"
                    // portalClassName=``
                >
                    <div className="absolute pa4 top-0 right-0 pointer" onClick={this.closeModal} data-cy="close-modal"><Icon name="close" className="fill-midgrey w3 h-auto" /></div>
                    {/* <div className="pa4 pl5 pr5 mt5 w-100 mw-s f4 br-pill bg-white shadow-3 center flex items-center justify-between"> */}
                    {/* <Icon name="search" className="fill-lightgrey-d2 h6" /> */}
                    <div className="relative">
                        <Icon name="search" className="fill-midgrey-l1 w4 h-auto absolute search-modal-input-field left-3" />
                        <label htmlFor="globalsearch" className="clip">Search</label>
                        <Search />
                    </div>
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
