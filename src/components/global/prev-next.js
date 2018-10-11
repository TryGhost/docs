import React from 'react'
import PropTypes from 'prop-types'

import { Spirit } from '../spirit-styles'
import Box from '../layouts/partials/box'
import Icon from '../global/icon'

class PrevNext extends React.Component {
    render() {
        const { prev, next } = this.props
        return (
            <div className="flex">
                {prev ?
                    <Box className="col-12 col-4-ns pa8 tdn middarkgrey setup-box-min-height" radius="4" to={prev.link}>
                        <Icon name="arrow-left" className="w10 h10" />
                        <h4 className={Spirit.h4 + `middarkgrey mt2`}>{prev.title}</h4>
                    </Box>
                    : null
                }
                {next ?
                    <Box className="col-12 col-4-ns pa8 tdn middarkgrey setup-box-min-height" radius="4" to={next.link}>
                        <Icon name="arrow-right" className="w10 h10" />
                        <h4 className={Spirit.h4 + `middarkgrey mt2`}>{next.title}</h4>
                    </Box>
                    : null
                }
            </div>
        )
    }
}

PrevNext.propTypes = {
    prev: PropTypes.shape({
        title: PropTypes.string,
        link: PropTypes.string,
    }),
    next: PropTypes.shape({
        title: PropTypes.string,
        link: PropTypes.string,
    }),
}

export default PrevNext
