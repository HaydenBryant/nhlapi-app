import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from '../Authentication/AuthenticatedRoute.js'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Login from './Login.jsx'
import Logout from './Logout.jsx'
import Welcome from './Welcome.jsx'


class HockeyApp extends Component{
    render() {
        return (
            <div className="HockeyApp">
                <Router>
                    <>
                    <Header/>
                        <Switch>
                            <Route path="/" exact component={Login} />
                            <Route path="/login" component={Login} />

                            <AuthenticatedRoute path="/welcome/:name" component={Welcome} />
                            <AuthenticatedRoute path="/logout" component={Logout} />
                        </Switch>
                    <Footer/>
                    </>
                </Router>
            </div>
        )
    }
}

export default HockeyApp