import React from 'react'
import NavBar from '../../components/layouts/partials/navbar'
import SectionHeading from '../../components/layouts/partials/section-heading'

// Custom headings must be react components. You should include the <NavBar /> component
// somewhere in it. You can optionally set the theme of the navbar to `dark` or `light`.
class MyHeader extends React.Component {
    render() {
        return (
            <div className="bg-blue mb10">
                <header className="top-0 left-0 right-0 z-9999">
                    <NavBar theme="light" />
                </header>
                <SectionHeading title="Custom Section Landing Page" subtitle="Subtitle here" theme="light" />
            </div>
        )
    }
}

export default MyHeader
