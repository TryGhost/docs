import React from 'react'
import { Spirit } from '../../spirit-styles'
import { Link } from 'gatsby'
import Logo from '../../global/logo'
import Icon from '../../global/icon'

const listItemClass = `mb2 lh-1-65` // Probably should go to spirit-styles.js
const linkClass = `link pa2 midgrey hover-blue dib mr5`

// Empty for now...
const Footer = () => (
    <footer className="pt-vw4 pt-vw1-l pb-vw3 bt b--whitegrey">

        <section className={ Spirit.page.xl + `flex` }>

            <a href="https://ghost.org/pricing" className="db w-50 pr20 pt7 pb7 pl30 relative tdn br b--whitegrey">
                <Icon name="cloud-upload" className="absolute top-10 left-10 w13 h-auto fill-green" />
                <h4 className={ Spirit.h4 + `darkgrey` }>Ready to upgrade to the best?</h4>
                <p className={ Spirit.small + `midgrey mt1`}>Spend less time running your servers and more time running your site. <strong className="blue">Ghost(Pro)</strong> has got you covered.</p>
            </a>

            <a href="https://ghost.org/pricing" className="db w-50 pr20 pt7 pb7 pl30 relative tdn">
                <Icon name="chat-double-bubble" className="absolute top-10 left-10 w13 h-auto fill-purple" />
                <h4 className={ Spirit.h4 + `darkgrey` }>Looking for help or advice?</h4>
                <p className={ Spirit.small + `midgrey mt1` }>Join the <strong>Ghost community</strong>  and meet thousands of other professional users and developers now</p>
            </a>

        </section>

        <section className={ Spirit.page.xl + `mt-vw4 mt-vw1-l`}>

            <div className="bt b--whitegrey flex justify-between items-center pt4">
                <ul className="flex list pa0 ma0 items-center">
                    <li className={ listItemClass }><a href="https://ghost.org" className="dib pt2 mr6"><Logo /></a></li>
                    <li className={ listItemClass }><Link to="/" className={ linkClass }>Docs Home</Link></li>
                    <li className={ listItemClass }><a href="https://help.ghost.org" className={ linkClass }>Help Center</a></li>
                    <li className={ listItemClass }><a href="https://status.ghost.org" className={ linkClass }>Status</a></li>
                    <li className={ listItemClass }><a href="https://twitter.com/tryghost" className={ linkClass }>@TryGhost</a></li>
                </ul>

                <ul className="flex list pa0 ma0 items-center">
                    <li className={ listItemClass }><a href="http://ghost.org" className="link pa2 midgrey hover-blue dib mr0">Ghost.org</a></li>
                </ul>
            </div>

        </section>
    </footer>
)

export default Footer
