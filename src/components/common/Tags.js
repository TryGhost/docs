import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import path from 'path'

import { removeInternalTags, getPrimaryTag } from '../../utils/tag-utils'

function filterTags(tags, internal) {
    // Get rid of internal tags
    return internal ? tags : removeInternalTags(tags)
}

/*
* Tags helper
* Returns tags for a post
* Options:
*   - post [required, the post object]
*   - internal [optional, default false, returns internal tags if set to true]
*   - limit [optional, default "1", limits the number of tags to be returned]
*   - separator [optional, default ", ", sets the separator to concat the tags, can be prevented completely by setting "false"]
*   - html [optional, default false, returns tags and separators in html span elements when set to true]
*   - classes [optional when html, default "darkgrey fw5", classNames used for the html tags]
*   - separatorClasses [optional when html, default "mr1 ml1 f8 midgrey", classNames used for the html separator tags]
*   - linkToPrefix: [optional, only for html, will render tags as a link to their archive pages],
*   - linkClasses: [optional when linkToPrefix, default "link dim white fw3", classNames used for the anchor tags]
*/
// TODO: this should really be a helper using Ghost SDK
const Tags = (props) => {
    const post = props.post
    let tags = post.tags || []
    const output = []
    const separator = props.separator && props.separator === `false` ? false : props.separator

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
                if (props.linkToPrefix) {
                    // Render tags as links
                    const tagLink = path.join(props.linkToPrefix, tag.slug, `/`)

                    output.push(
                        <span className={props.classes} key={tag.slug}>
                            <Link to={tagLink} className={props.linkClasses}>{tag.name}</Link>
                        </span>
                    )

                    if (separator && i < tags.length - 1) {
                        output.push(<span className={props.separatorClasses} key={`sep-${tag.slug}`}>{separator}</span>)
                    }
                } else {
                    // Render tags as span elements
                    output.push(<span className={props.classes} key={tag.slug}>{tag.name}</span>)

                    if (separator && i < tags.length - 1) {
                        output.push(<span className={props.separatorClasses} key={`sep-${tag.slug}`}>{separator}</span>)
                    }
                }
            })
        } else { // only one tag left
            if (props.linkToPrefix) {
                const tagLink = path.join(props.linkToPrefix, tags.slug, `/`)

                output.push(
                    <span className={props.classes} key={tags.slug}>
                        <Link to={tagLink} className={props.linkClasses}>{tags.name}</Link>
                    </span>
                )
            } else {
                output.push(<span className={props.classes} key={tags.slug}>{tags.name}</span>)
            }
        }

        return (
            output
        )
    } else {
        // We have more than one tag left
        if (tags.length > 1) {
            tags = tags.map(tag => tag.name)
            output.push(tags.join(`${separator}`))
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
    linkClasses: `link`,
}

Tags.propTypes = {
    post: PropTypes.shape({
        tags: PropTypes.array.isRequired,
    }).isRequired,
    internal: PropTypes.bool,
    limit: PropTypes.number,
    separator: PropTypes.string,
    html: PropTypes.bool,
    classes: PropTypes.string,
    linkToPrefix: PropTypes.string,
    linkClasses: PropTypes.string,
}

export default Tags
