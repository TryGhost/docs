import React from 'react'
import NavBar from '../../components/layouts/partials/navbar';

class MyHeader extends React.Component {

    render() {
        return (
            <div className="bg-blue pb20 mb10">
                <header className="top-0 left-0 right-0 z-9999 mb10">
                    <NavBar theme="light" />
                </header>
                <h1 className="white center tc f-subheadline fw3 ma0 mb3">Custom header</h1>
                <h2 className="white center tc f3 fw3 ma0">With some custom something</h2>
            </div>
        )
    }
}

export default MyHeader
