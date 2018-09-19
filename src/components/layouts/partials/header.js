import React from 'react'
import NavBar from './navbar';

class Header extends React.Component {

    render() {

        var headerShadow

        switch (this.props.divider) {
            case "hairline":
                headerShadow = "bb b--whitegrey"
                break;

            case "shadow":
                headerShadow = "shadow-2"
                break;

            case "none":
            default:
                headerShadow = ""
                break;
        }

        return (
            <header className={ headerShadow + " bg-white top-0 left-0 right-0 z-9999 mb10" }>
                <NavBar theme="dark" />
            </header>
        )
    }

}


export default Header
