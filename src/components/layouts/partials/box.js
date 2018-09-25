import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

class Box extends React.Component {
    render() {
        const children = this.props.children
        var boxStyle = ` bg-white `

        // Setting shadows
        switch (this.props.elevation) {
        case `1`:
            boxStyle = boxStyle + ` shadow-1 ` + (this.props.onWhite != `false` ? ` on-white ` : ` `) + (this.props.href ? ` box-shadow-hover shadow-1-hover ` : ` `)
            break
        
        case `2`:
            boxStyle = boxStyle + ` shadow-2 ` + (this.props.onWhite != `false` ? ` on-white ` : ` `) + (this.props.href ? ` box-shadow-hover shadow-2-hover  ` : ` `)
            break
        
        case `3`:
            boxStyle = boxStyle + ` shadow-3 ` + (this.props.onWhite != `false` ? ` on-white ` : ` `) + (this.props.href ? ` box-shadow-hover shadow-3-hover ` : ` `)
            break
        }

        // Border radius
        switch (this.props.radius) {
        case `1`:
            boxStyle = boxStyle + ` br1 `
            break

        case `2`:
            boxStyle = boxStyle + ` br2 `
            break

        case `3`:
            boxStyle = boxStyle + ` br3 `
            break

        case `4`:
            boxStyle = boxStyle + ` br4 `
            break

        case `5`:
            boxStyle = boxStyle + ` br5 `
            break
        }

        if (this.props.href) {
            boxStyle = boxStyle + ` db `

            return (
                <Link to={ this.props.href } className={ boxStyle + this.props.className }>
                    { children }
                </Link>
            )
        } else {
            return (
                <>
                    <div className={ boxStyle + this.props.className }>
                        { children }
                    </div>
                </>
            )
        }
    }
}

Box.defaultProps = {
    href: ``,
    elevation: `2`,
    radius: `3`,
    onWhite: `false`,
    linkClassName: `link`,
}

Box.propTypes = {
    href: PropTypes.string,
    elevation: PropTypes.string,
    radius: PropTypes.string,
    onWhite: PropTypes.string,
    className: PropTypes.any,
}

export default Box
