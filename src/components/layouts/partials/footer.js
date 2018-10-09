import React from 'react'
import { Spirit } from '../../spirit-styles'
import { Link } from 'gatsby'
import Logo from '../../global/logo'

const listItemClass = `mb2 lh-1-65` // Probably should go to spirit-styles.js
const linkClass = `link pa2 pl0 midgrey dim`

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
                        <li className={ listItemClass }><Link to="/" className={ linkClass }>On Ghost(Pro)</Link></li>
                        <li className={ listItemClass }><Link to="/" className={ linkClass }>1-click Image</Link></li>
                        <li className={ listItemClass }><Link to="/" className={ linkClass }>Install from CLI</Link></li>
                        <li className={ listItemClass }><Link to="/" className={ linkClass }>Local development</Link></li>
                        <li className={ listItemClass }><Link to="/" className={ linkClass }>Contribution</Link></li>
                    </ul>
                </div>
            </div>

            <div className="col-12 col-3-l">
                <h3 className={ Spirit.h5 + `col-8` }>API</h3>
                <div>
                    <ul className="f7 list pa0 ma0 mt3 mr20">
                        <li className={ listItemClass }><Link to="/" className={ linkClass }>Frontend SDKs</Link></li>
                        <li className={ listItemClass }><Link to="/" className={ linkClass }>Client Libraries</Link></li>
                        <li className={ listItemClass }><Link to="/" className={ linkClass }>Rest API</Link></li>
                        <li className={ listItemClass }><Link to="/" className={ linkClass }>Tools</Link></li>
                    </ul>
                </div>
            </div>

            <div className="col-12 col-3-l">
                <h3 className={ Spirit.h5 + `col-8` }>Contact</h3>
                <ul className="f7 list pa0 ma0 mt3">
                    <li className={ listItemClass }><a href="https://forum.ghost.org" className={ linkClass }>Forum</a></li>
                    <li className={ listItemClass }><a href="https://ghost.org/contact" className={ linkClass }>Contact</a></li>
                </ul>
            </div>
        </section>
    </footer>
)

export default Footer
