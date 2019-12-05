import React, { Component } from 'react';
import { Logout } from '../components/logout';

export class Dashboard extends Component {
  render() {
    return(
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="#">Navbar</a>
        <Logout />
      </nav>
    )
  }
}