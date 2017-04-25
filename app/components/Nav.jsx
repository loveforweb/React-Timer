import React from 'react';
import {Link, IndexLink } from 'react-router';

class Nav extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Timer App</li>
                        <li><IndexLink to="/" activeClassName="active">Timer</IndexLink></li>
                        <li><Link to="/" activeClassName="active">Countdown</Link></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    Jag
                </div>
            </div>
        )
    }
}

export default Nav;