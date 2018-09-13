import React from 'react'

import Layout from '../../components/layouts/default'
import Post from '../../components/post'
import { SpiritStyle } from '../../components/spirit/styles';

import Prism from 'prismjs'
import "prismjs/themes/prism-coy.css"

const SpiritDemo = ({ data }) => {
    return (
        <Layout>
            <div className="pa10">
                <h1>Gatsby - Spirit Demo</h1>
                
                <div className="mb15">
                    <h2 className={ SpiritStyle.heading.h2 }>Inline Spirit (Tachyons) CSS classes</h2>
                    <p>Using Spirit CSS classes using <code>className</code></p>
                    <p>Example:</p>
                    <pre>&lt;div className="flex justify-between pa10"&gt;&lt;/div&gt;</pre>
                </div>

                <div className="mb15">
                    <h2 className={ SpiritStyle.heading.h2 }>SpiritStyle</h2>
                    <p>Using <code>SpiritStyle</code> object would return a predefined combination of Spirit CSS classes.</p> 
                    <p>Example:</p>
                    <pre className="mb10">&lt;h2 className=&#123; SpiritStyle.heading.h2 &#125;&gt;&lt;/h2&gt; // Returns "f4 fw5 bb b--lightgrey pb3 mb7 mt10"</pre>

                    <p>You can append further Spirit CSS classes to SpiritStyle.</p>
                    <p>Example:</p>
                    <pre>&lt;h2 className=&#123; SpiritStyle.heading.h2 + " pa5" &#125;&gt;&lt;/h2&gt;</pre>
                </div>

                <div className="mb15">
                    <h2 className={ SpiritStyle.heading.h2 }>Styled Components + CSS classes or SpiritStyle</h2>
                    <p>Use <a href="https://next.gatsbyjs.org/docs/styled-components/" target="_blank" className="blue link">styled-components</a> combined with Spirit styles to apply custom CSS within the context of the component.</p>
                    <p>Example:</p>
<pre><code className="langauage-javascript">const Header = () => (
    &lt;Container&gt;...&lt;/Container&gt;
)

const Container = styled.header.attrs(&#123;
        className: "shadow-2"
)`
    margin: 10px;
`
</code></pre>
                </div>

            </div>

        </Layout>
    )
}

export default SpiritDemo
