import React from 'react'
import Prism from 'prismjs'
import Link from 'gatsby-link'

import Layout from '../../components/layouts/default'

import 'prismjs/themes/prism-coy.css'

class IndexPage extends React.Component {

    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        return (
            <Layout>
            <div>
                <h1>Hi people</h1>
                <p>Welcome to your new Gatsby site.</p>
                <p>Now go build something great.</p>
                <Link to="/page-2/">Go to page 2</Link>

                <div>
                    <pre><code className="language-javascript">{ `
onSubmit(e) {
  e.preventDefault();
  const job = {
    title: 'Developer',
    company: 'Facebook' 
  };
}
      `}</code></pre>
                </div>

            </div>
            </Layout>
        )
    }

}

export default IndexPage
