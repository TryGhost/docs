import React from 'react'
import PropTypes from 'prop-types'
import tocbot from 'tocbot'

class TOC extends React.Component {
    componentDidMount() {
        const props = this.props
        
        tocbot.init({
            // Where to render the table of contents.
            tocSelector: `.toc-list-container`,
            // Where to grab the headings to build the table of contents.
            contentSelector: `.post-content`,
            // Which headings to grab inside of the contentSelector element.
            headingSelector: `h2, h3`,
            headingsOffset: parseInt(props.headingsOffset),
        })
    }

    render() {
        return (
            <>
                <nav className="pl10 miw50 nr5 sticky top-25">
                    <h3 className="f8 fw4 measure-0-4 ma0 pa0 ttu pb2 fw6">On this page</h3>
                    <div className="toc-list-container"></div>
                </nav>
            </>
        )
    }
}

TOC.defaultProps = {
    headingsOffset: `1`,
}

TOC.propTypes = {
    headingsOffset: PropTypes.string,
}

export default TOC