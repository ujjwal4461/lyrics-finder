import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                  <div className="nav-wrapper blue">
                    <a href="/" className="brand-logo center">LyricsFinder</a>
                  </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
