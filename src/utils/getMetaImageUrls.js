import PropTypes from 'prop-types'
import url from 'url'

// TODO: this should be available as global var without the need to query
// the siteMetadata.
const SITEURL = process.env.SITE_URL || `https://docs.ghost.org`

const imageUrls = {
    faq: url.resolve(SITEURL, `/images/meta/Ghost-FAQ.jpg`),
    integrations: url.resolve(SITEURL, `/images/meta/Ghost-Integrations.jpg`),
    tutorials: url.resolve(SITEURL, `/images/meta/Ghost-Tutorials.jpg`),
}

const getMetaImageUrls = (section) => {
    if (!section || !imageUrls[section]) {
        return url.resolve(SITEURL, `/images/meta/Ghost-Docs.jpg`)
    } else {
        return imageUrls[section]
    }
}

getMetaImageUrls.proptypes = {
    section: PropTypes.string,
}

export default getMetaImageUrls

