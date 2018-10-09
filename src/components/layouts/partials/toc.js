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
                <nav className={ this.props.className + ` nr3 sticky top-25` }>
                    <h3 className="f4 measure--0-2 middarkgrey ma0 pa0 fw4 mt8 nudge-bottom--2">On this page</h3>
                    <div className="toc-list-container mt4"></div>
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
    className: PropTypes.string,
}

export default TOC