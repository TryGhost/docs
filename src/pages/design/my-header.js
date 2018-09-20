import React from 'react'
import NavBar from '../../components/layouts/partials/navbar'

// Custom headings must be react components. You should include the <NavBar /> component
// somewhere in it. You can optionally set the theme of the navbar to `dark` or `light`.
class MyHeader extends React.Component {
    render() {
        return (
            <div className="bg-blue mb10">
                <header className="top-0 left-0 right-0 z-9999">
                    <NavBar theme="light" />
                </header>
                <div className="pa20 pb30 tc">
                    <h1 className="f-headline ma0 mb2 white">Section heading</h1>
                    <h2 className="f4 fw3 ma0 white">Here comes some additional text yo</h2>
                </div>
            </div>
        )
    }
}

export default MyHeader
