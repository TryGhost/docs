import React from 'react'
import NavBar from '../../components/layouts/partials/navbar';

// Custom headings must be react components. You should include the <NavBar /> component
// somewhere in it. You can optionally set the theme of the navbar to `dark` or `light`.
class MyHeader extends React.Component {

    render() {
        return (
            <div className="bg-blue mb10">
                <header className="top-0 left-0 right-0 z-9999">
                    <NavBar theme="light" />
                </header>
                <div className="pa20 pb30">
                    <h1 className="white center tc f-subheadline fw3 ma0 mb3 o-30">Custom header</h1>
                    <h2 className="white center tc f3 fw3 ma0 o-40">With some custom something</h2>
                </div>
            </div>
        )
    }
}

export default MyHeader
