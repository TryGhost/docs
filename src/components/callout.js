import React from 'react'
import PropTypes from 'prop-types'

const Callout = (props) => {
    const color = props.color
    const title = props.title
    const text = props.children
    return (
        <div className={color}>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}

Callout.propTypes = {
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isOptional,
    children: PropTypes.node.isRequired,
}

export default Callout
