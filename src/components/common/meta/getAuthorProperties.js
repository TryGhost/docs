import _ from 'lodash'

export const getAuthorProperties = function getAuthorProperties(primaryAuthor, fetchAuthorData) {
    let authorProfiles = []

    if (fetchAuthorData) {
        authorProfiles.push(
            primaryAuthor.website ? primaryAuthor.website : null,
            primaryAuthor.twitter ? `https://twitter.com/${_.trimStart(primaryAuthor.twitter, `@`)}/` : null,
            primaryAuthor.facebook ? `https://www.facebook.com/${primaryAuthor.facebook}/` : null
        )
    } else {
        authorProfiles.push(
            `https://ghost.org/`,
            `https://twitter.com/ghost/`,
            `https://www.facebook.com/ghost/`
        )
    }

    authorProfiles = _.compact(authorProfiles)

    return {
        name: fetchAuthorData ? primaryAuthor.name : `Ghost`,
        sameAsArray: authorProfiles.length ? `["${_.join(authorProfiles, `", "`)}"]` : null,
        image: fetchAuthorData ? primaryAuthor.profile_image : null,
    }
}

export default getAuthorProperties
