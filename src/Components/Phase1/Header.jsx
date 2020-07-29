import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AuthenticationService from '../Authentication/AuthenticationService.js'
import { withRouter } from 'react-router'

class Header extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn()
        return(
            <header>
                <nav className="navbar navbar-expand-md nav">
                    <ul className="navbar-nav navbar-collapse justify-content-start">
                        {!isUserLoggedIn && <li><img className="img" src={ require('../../images/nhlLogo.png') } /></li>}
                        {isUserLoggedIn && <li><img className="img" src={ require('../../images/bruinsLogo.png') } /></li>}
                    </ul>

                    <ul className="navbar-nav navbar-collapse justify-content-end li">
                        {!isUserLoggedIn && <li className="li"><Link className="nav-link header-text" to="/login">Login</Link></li>}
                        {!isUserLoggedIn && <li className="li"><Link className="nav-link header-text" to="/register">Register</Link></li>}
                        {isUserLoggedIn && <li className="li"><Link className="nav-link header-text" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(Header);