import React from 'react'
import { Spirit } from '../../spirit-styles'
import { Link } from 'gatsby'
import Logo from '../../global/logo'

const listItemClass = `mb2 lh-1-65` // Probably should go to spirit-styles.js

// Empty for now...
const Footer = () => (
    <footer className="pt-vw6 pt-vw2-l pb-vw3 bt b--whitegrey">
        <section className={ Spirit.page.xl + `grid-12 gutter-row-20 gutter-32-l`}>

            <div className="col-12 col-3-l">
                <a href="https://ghost.org"><Logo /></a>
                <p className={ Spirit.tiny + `mt1 midgrey` }>Ghost Foundation &copy; 2008 - 2018</p>
            </div>

            <div className="col-12 col-3-l">
                <h3 className={ Spirit.h5 + `col-8` }>Setup</h3>
                <div>
                    <ul className="f7 list pa0 ma0 mt3 mr20">
                        <li className={ listItemClass }><Link to="/" className="link midgrey dim">On Ghost(Pro)</Link></li>
                        <li className={ listItemClass }><Link to="/" className="link midgrey dim">1-click Image</Link></li>
                        <li className={ listItemClass }><Link to="/" className="link midgrey dim">Install from CLI</Link></li>
                        <li className={ listItemClass }><Link to="/" className="link midgrey dim">Local development</Link></li>
                        <li className={ listItemClass }><Link to="/" className="link midgrey dim">Contribution</Link></li>
                    </ul>
                </div>
            </div>

            <div className="col-12 col-3-l">
                <h3 className={ Spirit.h5 + `col-8` }>API</h3>
                <div>
                    <ul className="f7 list pa0 ma0 mt3 mr20">
                        <li className={ listItemClass }><Link to="/" className="link midgrey dim">Frontend SDKs</Link></li>
                        <li className={ listItemClass }><Link to="/" className="link midgrey dim">Client Libraries</Link></li>
                        <li className={ listItemClass }><Link to="/" className="link midgrey dim">Rest API</Link></li>
                        <li className={ listItemClass }><Link to="/" className="link midgrey dim">Tools</Link></li>
                    </ul>
                </div>
            </div>

            <div className="col-12 col-3-l">
                <h3 className={ Spirit.h5 + `col-8` }>Contact</h3>
                <ul className="f7 list pa0 ma0 mt3">
                    <li className={ listItemClass }><a href="https://forum.ghost.org" className="link midgrey dim">Forum</a></li>
                    <li className={ listItemClass }><a href="https://ghost.org/contact" className="link midgrey dim">Contact</a></li>
                </ul>
            </div>
        </section>
    </footer>
)

export default Footer
