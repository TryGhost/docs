import React from 'react'
import { Link } from 'gatsby'

const tags = [
    {
        name: `General`,
        link: `/faq/general/`,
    },
    {
        name: `Errors`,
        link: `/faq/errors/`,
    },
    {
        name: `Self-hosted`,
        link: `/faq/self-hosted/`,
    },
    {
        name: `Ghost(Pro)`,
        link: `/faq/ghost-pro/`,
    },
]

class FAQTags extends React.Component {
    render() {
        return (
            <>
                { tags.map((item, i) => (
                    <Link key={ i } to={ item.link } className="dib pa1 pl2 pr2 br3 mb2 mr2">{ item.name }</Link>
                )) }
            </>
        )
    }
}

export default FAQTags
