import React from 'react'

import logo from '../assets/images/logo-transparent.png'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="image"><img src={logo} alt="LR Power Solutions" /></span>
                    <h1>Management consulting services for the power industry</h1>
                    <p>LR Power has extensive experience serving both public and private clients in the power industry</p>
                    <ul className="actions">
                        <li><a href="#about" className="button scrolly">Learn More</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
