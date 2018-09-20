import React from 'react'
import PropTypes from 'prop-types'

// TODO: define allowed HTML tags to wrap the tags
const ALLOWED_HTML_TAGS = [`span`, `div`]

function filterTags(tags, internal) {
    // Get rid of internal tags
    return internal ? tags : tags.filter(tag => !tag.name.match(/^#/))
}

function getPrimaryTag(tags) {
    // If any tags left, use the first tag name and fallback to `General`
    if (!tags.length) {
        return `General`
    } else {
        const [{ name }] = tags
        return name
    }
}

/*
* Tags helper
* Returns tags for a post
* Options:
*   - post [required, the post object]
*   - internal [optional, default false, returns internal tags if set to true]
*   - limit [optional, default "1", limits the number of tags to be returned]
*   - separator [optional, default ", ", sets the separator to concat the tags]
*   - html [optional, the desired html tag can be passed, e. g. "span" or "div", if nothing is passed, we return a string]
*   - classes [optional when html, default "darkgrey fw5", classNames used for the html tags]
*   - separatorClasses [optional when html, default "mr1 ml1 f8 midgrey", classNames used for the html separator tags]
*/
const Tags = (props) => {
    const post = props.post
    const primaryTag = post.primary_tag || ``
    let tags = post.tags || []
    const internal = (props.internal === `true`) || false
    const limit = parseInt(props.limit) || 1
    const separator = props.separator || `, `
    const html = ALLOWED_HTML_TAGS.includes(props.html) ? props.html : false || false
    const classes = props.classes || `darkgrey fw5`
    const separatorClasses = props.separatorClasses || `mr1 ml1 f8 midgrey`

    let output

    // remove internal tags if not wanted
    tags = filterTags(tags, internal)

    // If the limit is one, only one tag left, or no tag left after filtering we only want the primary tag
    if (limit === 1 || !tags.length || tags.length === 1) {
        output = primaryTag || getPrimaryTag(tags)
    } else if (limit > 1) {
        output = tags.map(tag => `${tag.name}`)
    }

    if (html) {
        // We have more than one tag left
        if (typeof output === `object`) {
            output = output.map((tag, i) => {
                let markup = `<${html} className=${classes}>${tag}</${html}>`

                {
                    if (separator && i < output.length - 1) {
                        markup += `<${html} className=${separatorClasses}>${separator}</${html}>`
                    }
                }

                return markup
            })

            output = output.join(``)
        } else if (typeof output === `string`) { // only one tag left
            output = `<${html} className=${classes}>${output}</${html}>`
        }

        return (
            // TODO: Style the wrapper here
            <div dangerouslySetInnerHTML={{ __html: output }} />
        )
    } else {
        // We have more than one tag left
        if (typeof output === `object`) {
            output = output.join(`${separator}`)
        }

        return (
            output
        )
    }
}

Tags.propTypes = {
    post: PropTypes.object.isRequired,
    internal: PropTypes.string,
    limit: PropTypes.string,
    separator: PropTypes.string,
    html: PropTypes.string,
    classes: PropTypes.string,
}

export default Tags
