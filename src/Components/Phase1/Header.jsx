import React, {Component} from 'react'

class Header extends Component {
    render() {
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <ul className="navbar-nav">
                            <li>Home</li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}