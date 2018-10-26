import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
            <a href="/" className="navbar-brand">Friends</a>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><Link to="/">< i className="fas fa-user"></i>Home</Link></li>
            <li className="nav-item"><Link to="/about">< i className="fas fa-question"></i>About</Link></li>
          </ul>
        </div>
      </nav>
          
    )
  }
}

export default Navbar;