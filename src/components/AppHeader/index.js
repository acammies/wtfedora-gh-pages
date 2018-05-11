import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../../images/logos/redhahahtnew.png';
import './AppHeader.css';
class AppHeader extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to={'/'}>
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <h1 className="App-title"><code>WhatTheFedora.com</code></h1>
        </header>
      </div>
    );
  }
}

export default AppHeader;
