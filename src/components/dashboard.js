import React, { Component } from 'react';
import { Logout } from '../components/logout';
import { decode } from '../utils/jwtDecode';

export const Dashboard = (props) => {
  let userInfo = {};
  let firstName = '';
  let lastName = '';
  if(localStorage.jwtToken) {
    userInfo = decode(localStorage.jwtToken);
    firstName = userInfo.user.firstName;
    lastName = userInfo.user.lastName;
  } else {
    console.log('unauthorized');
  }
  console.log(userInfo)
  return(
    <nav className="navbar navbar-dark bg-primary">
      <a className="navbar-brand" href="#">Navbar</a>
      <span><strong className="text-light">{firstName} {lastName} | </strong><Logout /></span>
    </nav>
  )
}