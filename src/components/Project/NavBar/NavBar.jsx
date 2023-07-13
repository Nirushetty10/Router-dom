import React, { Component } from 'react';
import "./NavBar.scss"
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
         <div className='nav-section'>
          <div className="logo">
             FURN
          </div>
          <div className="links">
            <ul>
              <Link to="/" className='link'>Home</Link>
              <Link to="/about" className='link'>About</Link>
              <Link to="/gallery" className='link'>Gallery</Link>
              <Link to="/contact" className='link'>Contact us</Link>
            </ul>
          </div>
         </div>
    )
  }
}
