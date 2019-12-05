import React, { Component } from 'react';
import { Logout } from '../components/logout';

export const Dashboard = (props) => {
  let firstName = props.user.firstName;
  let lastName = props.user.lastName;
  let id = props._id;
  return(
    <nav className="navbar navbar-dark bg-primary">
      <a className="navbar-brand" href="#">Navbar</a>
      <span><strong className="text-light">{firstName} {lastName} | </strong><Logout /></span>
    </nav>
  )
}