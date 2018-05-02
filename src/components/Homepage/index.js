import React, { Component } from 'react';
import { Link } from "react-router-dom";
import CardWithLink from '../CardWithLink/'

import './Homepage.css'
class Homepage extends Component {
  render() {
    return (
      <div className="Homepage">
        <p className="Homepage-intro">
          Welcome to WhatTheFedora.com. The Homepage.
        </p>
        <CardWithLink title='LinkedIn' link = '/LinkedIn'/>
        <CardWithLink title='GitHub' link = '/GitHub'/>

      </div>
    );
  }
}

export default Homepage;
