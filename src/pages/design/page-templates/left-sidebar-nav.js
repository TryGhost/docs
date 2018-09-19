import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../../components/layouts/default'

export default () => (
    <Layout title="Home" headerDividerStyle="shadow">
        <div className="center flex flex-start">
            <nav className="mr5 mt8 miw50">
                <ul className="ma0 pa0 list">
                    <li className="mb5">Navigation item 1</li>
                    <li className="mb5">Navigation item 2</li>
                </ul>
            </nav>
            <section className="flex-auto flex bg-white br4 shadow-1 pa12 pr8">
                <nav className="ml5 miw40 w40 order-2 f8">
                    <ul className="ma0 pa0 list">
                        <li className="mb4">Navigation item 1</li>
                        <li className="mb4">Navigation item 2</li>
                    </ul>
                </nav>
                <div className="order-1">
                    <h1 className="f-subheadline fw3 mt0">Left sidebar</h1>
                    <div className="post-content">
                        <h1>Kitsch retro Disrupt aliqua Brooklyn church-key lo-fi dreamcatcher.</h1>

                        <h2>Typewriter delectus cred Disrupt aliqua Brooklyn church-key lo-fi dreamcatcher.</h2>

                        <p>Bushwick Schlitz. Est Shoreditch small batch, dolor Schlitz sapiente twee stumptown ex. Duis Carles pickled, cornhole Thundercats McSweeney's minim PBR vegan Tumblr irony. Kogi eu Thundercats, sed scenester before they sold out et aesthetic. Elit cred Vice ethical pickled sartorial. Stumptown roof party freegan High Life vero, ea sed minim meggings.</p>

                        <p>McSweeney's minim PBR vegan Tumblr irony. Kogi eu Thundercats, sed scenester before they sold out et aesthetic. Elit cred Vice ethical pickled sartorial. Stumptown roof party freegan High Life vero, ea sed minim meggings.</p>

                        <h3>Truffaut disrupt sartorial deserunt Disrupt aliqua Brooklyn church-key lo-fi dreamcatcher.</h3>

                        <p>Cosby sweater plaid shabby chic kitsch pour-over ex. Try-hard fanny pack mumblecore cornhole cray scenester. Assumenda narwhal occupy, Blue Bottle nihil culpa fingerstache. Meggings kogi vinyl meh, food truck banh mi Etsy magna 90's duis typewriter banjo organic leggings Vice.</p>

                        <h4>Fingerstache nesciunt lomo nostrud hoodie Disrupt aliqua Brooklyn church-key lo-fi dreamcatcher.</h4>
                        Laboris selfies occaecat umami, forage Tumblr American Apparel. Retro Terry Richardson culpa id swag polaroid Intelligentsia American Apparel eu, esse non post-ironic fugiat master cleanse. Direct trade gluten-free blog, fanny pack cray labore skateboard before they sold out adipisicing non magna id Helvetica freegan. Disrupt aliqua Brooklyn church-key lo-fi dreamcatcher.
                    </div>
                </div>
            </section>
        </div>
    </Layout>
)
