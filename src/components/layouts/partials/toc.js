import React from 'react'

class TOC extends React.Component {
    render() {
        const children = this.props.children

        return (
            <>
                <nav className="pl10 miw50 nr5 sticky top-25">
                    <h3 className="f8 fw4 measure-0-4 ma0 pa0 ttu pb2 fw6">On this page</h3>
                    <div className="toc-list-container" dangerouslySetInnerHTML={ {
                        __html: children,
                    } } />
                </nav>
            </>
        )
    }
}

export default TOC