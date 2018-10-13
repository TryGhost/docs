import PropTypes from 'prop-types'

export const removeInternalTags = function removeInternalTags(tags) {
    // Get rid of internal tags
    return tags.filter(tag => !tag.name.match(/^#/))
}

removeInternalTags.proptypes = {
    tags: PropTypes.array.isRequired,
}

export const getPrimaryTag = function getPrimaryTag(tags) {
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

getPrimaryTag.proptypes = {
    tags: PropTypes.array.isRequired,
}
