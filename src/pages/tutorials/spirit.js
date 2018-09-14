import React from 'react'

import Layout from '../../components/layouts/default'
import { SpiritStyle } from '../../components/spirit/styles';

import "prismjs/themes/prism.css"

class SpiritDemo extends React.Component {

    render() {
        return(
            <Layout>
                <div className="pa10">
                    <h1>Gatsby - Spirit Demo</h1>

                    <div className="mb15">
                        <h2 className={ SpiritStyle.heading.h2 }>Inline Spirit (Tachyons) CSS classes</h2>
                        <p>Using Spirit CSS classes in <code>className</code> attribute. Typically for non-reusable, custom componenets where Spirit classes are sufficiently let you style the component.</p>
                        <p>Example:</p>
                        <pre><code className="language-html">{`
<div className="flex justify-between pa10"></div>
                        `}</code></pre>
                    </div>

                    <div className="mb15">
                        <h2 className={ SpiritStyle.heading.h2 }>SpiritStyle</h2>
                        <p><code>SpiritStyle</code> object returns a predefined combination of Spirit CSS classes. This is useful for all the reusable components that look the same everywhere, like a link or a heading.</p>
                        <p>Example:</p>
                        <pre className="mb10"><code className="language-html">{`
<h2 className={ SpiritStyle.heading.h2 }></h2> <!-- Returns "f4 fw5 bb b--lightgrey pb3 mb7 mt10" -->
                        `}</code></pre>

                        <p>You can append further Spirit CSS classes to SpiritStyle.</p>
                        <p>Example:</p>
                        <pre className="mb10"><code className="language-html">{`
<h2 className={ SpiritStyle.heading.h2 + " pa5"}></h2>
                        `}</code></pre>
                    </div>

                    <div className="mb15">
                        <h2 className={ SpiritStyle.heading.h2 }>Styled Components + CSS classes or SpiritStyle</h2>
                        <p>Use <a href="https://next.gatsbyjs.org/docs/styled-components/" target="_blank" className="blue link">styled-components</a> combined with Spirit styles to apply custom CSS within the context of the component.</p>
                        <p>Example:</p>
                        <pre><code className="language-javascript">{`
const Header = () => (
    <Container></Container>
)

const Container = styled.header.attrs({
        className: "shadow-2"
})
    margin: 10px;
                        `}</code></pre>
                    </div>

                </div>

            </Layout>
        )
    }

}

export default SpiritDemo
