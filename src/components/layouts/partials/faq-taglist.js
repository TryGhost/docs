import React from 'react'
import { Link } from 'gatsby'
import { Spirit } from '../../spirit-styles'
import PropTypes from 'prop-types'

const tags = [
    {
        name: `All`,
        link: `/faq/`,
    },
    {
        name: `General`,
        link: `/faq/general/`,
    },
    {
        name: `Errors`,
        link: `/faq/errors/`,
    },
    {
        name: `Using Ghost`,
        link: `/faq/using-ghost/`,
    },
    {
        name: `Ghost(Pro)`,
        link: `/faq/ghost-pro/`,
    },
    {
        name: `Self-hosting`,
        link: `/faq/self-hosting/`,
    },
]

class FAQTagList extends React.Component {
    render() {
        return (
            <>
                <h4 className={ Spirit.h5 + `midgrey` }>FAQ topics</h4>
                <div className="mt4">
                    { tags.map((item, i) => (
                        <Link key={ i } to={ item.link } className={ (this.props.location.pathname === item.link ? `bg-faq-color white fw5` : `bg-whitegrey middarkgrey hover-bg-lightgrey-l2`) + ` dib pa2 pl3 pr3 br3 mb3 mr3 f8  link` }>{ item.name }</Link>
                    )) }
                </div>
            </>
        )
    }
}

FAQTagList.propTypes = {
    location: PropTypes.object.isRequired,
}

export default FAQTagList
