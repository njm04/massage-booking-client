import React, { Component } from 'react';
import { Logout } from '../components/logout';
import { decode } from '../utils/jwtDecode';

export const Dashboard = (props) => {
  let userInfo = {};
  let firstName = '';
  let lastName = '';
  
  if(localStorage.jwtToken) {
    userInfo = decode(localStorage.jwtToken);
    firstName = userInfo.firstName;
    lastName = userInfo.lastName;
  } else {
    console.log('unauthorized');
  }

  return(
    <nav className="navbar navbar-dark bg-primary">
      <a className="navbar-brand" href="#">Massage Booking</a>
      <span><strong className="text-light">{firstName} {lastName} | </strong><Logout /></span>
    </nav>
  )
}