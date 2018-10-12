import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { Spirit } from '../spirit-styles'
import Box from '../layouts/partials/box'
import Icon from '../global/icon'

class PrevNext extends React.Component {
    render() {
        const { prev, next } = this.props

        return (
            <div className="grid-12 mt20">
                
                {prev ? 
                    <Link to={ prev.link } className={ (next ? `br--left col-6` : `col-12`) + ` bg-white flex pa5 pr8 tdn justify-between items-center blue br3 nudge-left--1 prevnext-hover ba b--whitegrey` }>
                        <Icon name="arrow-left" className="w4 h4 fill-blue" />
                        <div className="tr">
                            { prev.group ? <h6 className="ma0 pa0 f-supersmall fw4 midgrey lh-1-5">{ prev.group }</h6> : null }
                            <p className={ Spirit.excerpt + `nt1 di` }>{ prev.title }</p>
                        </div>
                    </Link>
                    : <div className="col-6 nudge-left--1"></div>}

                { next ?
                    <Link to={ next.link } className={ (prev ? `br--right col-6` : `col-12`) + ` bg-white flex pa5 pl8 tdn justify-between items-center blue br3 prevnext-hover ba b--whitegrey` }>
                        <div>
                            { next.group ? <h6 className="ma0 pa0 f-supersmall fw4 midgrey lh-1-5">{ next.group }</h6> : null }
                            <p className={ Spirit.excerpt + `nt1 di` }>{ next.title }</p>
                        </div>
                        <Icon name="arrow-right" className="w4 h4 fill-blue" />
                    </Link>
                    : <div className="col-6 bl b--whitegrey"></div> }
            </div>
            // <div className="flex">
            //     {prev ?
            //         <Box className="col-12 col-4-ns pa8 tdn middarkgrey setup-box-min-height" radius="4" to={prev.link}>
            //             <Icon name="arrow-left" className="w10 h10" />
            //             {prev.group ? <p>{prev.group}</p> : null }
            //             <h4 className={Spirit.h4 + `middarkgrey mt2`}>{prev.title}</h4>
            //         </Box>
            //         : null
            //     }
            //     {next ?
            //         <Box className="col-12 col-4-ns pa8 tdn middarkgrey setup-box-min-height" radius="4" to={next.link}>
            //             <Icon name="arrow-right" className="w10 h10" />
            //             {next.group ? <p>{next.group}</p> : null}
            //             <h4 className={Spirit.h4 + `middarkgrey mt2`}>{next.title}</h4>
            //             {next.description ? <p>{next.description}</p> : null}
            //         </Box>
            //         : null
            //     }
            // </div>
        )
    }
}

PrevNext.propTypes = {
    prev: PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        group: PropTypes.string,
    }),
    next: PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        group: PropTypes.string,
        description: PropTypes.string,
    }),
}

export default PrevNext
