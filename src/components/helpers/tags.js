import React from 'react'
import PropTypes from 'prop-types'
import tagsHelper from '@tryghost/helpers/tags'
import _ from 'lodash'

/*
* Tags helper
* Returns tags for a post
* Options:
*   - post [required, the post object]
*   - internal [optional, default false, returns internal tags if set to true]
*   - limit [optional, default "1", limits the number of tags to be returned]
*   - separator [optional, default ", ", sets the separator to concat the tags]
*   - html [optional, default false, returns tags and separators in html span elements when set to true]
*   - classes [optional when html, default "darkgrey fw5", classNames used for the html tags]
*   - separatorClasses [optional when html, default "mr1 ml1 f8 midgrey", classNames used for the html separator tags]
*/
const Tags = (props) => {
    let post = props.post
    let opts = _.pick(props, [`separator`, `prefix`, `suffix`, `limit`, `from`, `to`])

    opts.visibility = props.internal ? `public,internal` : `public`

    opts.fn = function process(tag) {
        return props.html ? <span className={props.classes} key={tag.slug}>{tag.name}</span> : tag.name
    }

    if (props.html) {
        opts.separator = <span className={props.separatorClasses}>{props.separator}</span>
    }

    opts.fallback = {
        name: `General`,
        slug: `general`,
        visibility: `public`,
    }

    let output = tagsHelper(post, opts)

    return (
        output
    )
}

Tags.defaultProps = {
    internal: false,
    limit: 1,
    html: false,
    separator: `, `,
    classes: `darkgrey fw5`,
    separatorClasses: `mr1 ml1 f8 midgrey`,
}

Tags.propTypes = {
    post: PropTypes.object.isRequired,
    limit: PropTypes.number,
    from: PropTypes.number,
    to: PropTypes.number,
    separator: PropTypes.string,
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    visibility: PropTypes.string,
    // @TODO: get rid of internal flag?
    internal: PropTypes.bool,
    html: PropTypes.bool,
    classes: PropTypes.string,
}

export default Tags
