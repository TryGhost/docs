import React from 'react'
import PropTypes from 'prop-types'

function filterTags(tags, internal) {
    // Get rid of internal tags
    return internal ? tags : tags.filter(tag => !tag.name.match(/^#/))
}

function getPrimaryTag(tags) {
    // If any tags left, use the first tag name and fallback to `General`
    if (!tags.length) {
        return {
            name: `General`,
            slug: `general`,
        }
    } else {
        return tags[0]
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
*   - html [optional, default false, returns tags and separators in html span elements when set to true]
*   - classes [optional when html, default "darkgrey fw5", classNames used for the html tags]
*   - separatorClasses [optional when html, default "mr1 ml1 f8 midgrey", classNames used for the html separator tags]
*/
const Tags = (props) => {
    const post = props.post
    let tags = post.tags || []
    const output = []

    // remove internal tags if not wanted
    tags = filterTags(tags, props.internal)

    // If the limit is one, only one tag left, or no tag left after filtering we only want the primary tag
    if (props.limit === 1 || !tags.length || tags.length === 1) {
        tags = getPrimaryTag(tags)
    }

    if (props.html) {
        // We have more than one tag left
        if (tags.length > 1) {
            tags = tags.map((tag, i) => {
                output.push(<span className={props.classes} key={tag.slug}>{tag.name}</span>)

                {
                    if (props.separator && i < tags.length - 1) {
                        output.push(<span className={props.separatorClasses}>{props.separator}</span>)
                    }
                }
            })
        } else { // only one tag left
            output.push(<span className={props.classes} key={tags.slug}>{tags.name}</span>)
        }

        return (
            output
        )
    } else {
        // We have more than one tag left
        if (tags.length > 1) {
            tags = tags.map(tag => tag.name)
            output.push(tags.join(`${props.separator}`))
        } else {
            output.push(tags.name)
        }

        return (
            output
        )
    }
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
    internal: PropTypes.bool,
    limit: PropTypes.number,
    separator: PropTypes.string,
    html: PropTypes.bool,
    classes: PropTypes.string,
}

export default Tags
