import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

class Box extends React.Component {
    render() {
        const children = this.props.children
        var boxClass = ` bg-white `
        var boxStyle = {}

        // Setting shadows
        switch (this.props.elevation) {
        case `1`:
            boxClass = boxClass + ` shadow-1 ` + (this.props.onWhite !== `false` ? ` on-white ` : ` `) + (this.props.href || this.props.to ? ` box-shadow-hover shadow-1-hover ` : ` `)
            break
        
        case `2`:
            boxClass = boxClass + ` shadow-2 ` + (this.props.onWhite !== `false` ? ` on-white ` : ` `) + (this.props.href || this.props.to ? ` box-shadow-hover shadow-2-hover  ` : ` `)
            break
        
        case `3`:
            boxClass = boxClass + ` shadow-3 ` + (this.props.onWhite !== `false` ? ` on-white ` : ` `) + (this.props.href || this.props.to ? ` box-shadow-hover shadow-3-hover ` : ` `)
            break
        }

        // Border radius
        switch (this.props.radius) {
        case `1`:
            boxClass = boxClass + ` br1 `
            break

        case `2`:
            boxClass = boxClass + ` br2 `
            break

        case `3`:
            boxClass = boxClass + ` br3 `
            break

        case `4`:
            boxClass = boxClass + ` br4 `
            break

        case `5`:
            boxClass = boxClass + ` br5 `
            break
        }

        if (this.props.to) {
            boxClass = boxClass + ` db `
            
            return (
                <Link to={ this.props.to } className={ boxClass + this.props.className } style={ boxStyle }>
                    { children }
                </Link>
            )
        } else if (this.props.href) {
            boxClass = boxClass + ` db `

            return (
                <a href={ this.props.href } className={ boxClass + this.props.className } style={ boxStyle } target="_blank" rel="noopener noreferrer">
                    { children }
                </a>
            )
        } else {
            return (
                <>
                    <div className={ boxClass + this.props.className }>
                        { children }
                    </div>
                </>
            )
        }
    }
}

Box.defaultProps = {
    to: ``,
    href: ``,
    elevation: `2`,
    radius: `3`,
    onWhite: `false`,
    linkClassName: `link`,
}

Box.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    elevation: PropTypes.string,
    radius: PropTypes.string,
    onWhite: PropTypes.string,
    className: PropTypes.any,
}

export default Box
