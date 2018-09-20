import React from 'react'
import NavBar from './navbar'
import SectionHeading from './section-heading'

// Custom headings must be react components. You should include the <NavBar /> component
// somewhere in it. You can optionally set the theme of the navbar to `dark` or `light`.
class HomeHeader extends React.Component {
    render() {
        return (
            <div className="bg-blue mb10">
                <header className="top-0 left-0 right-0 z-9999">
                    <NavBar theme="light" />
                </header>
                <SectionHeading title="Ghost Documentation" subtitle="All the resources to work with Ghost" theme="light">
                    <input id="search" className="input-reset form-text pa4 pl5 pr5 mt8 w-100 mw-s f4 br-pill ba b--transparent bg-white shadow-2" type="text" placeholder="Search documentation..." name="query" autoComplete="off" />
                </SectionHeading>
            </div>
        )
    }
}

export default HomeHeader
