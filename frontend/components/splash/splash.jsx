import React from 'react';
import {Link} from 'react-router-dom';

const greeting = (currentUser, logout) => (
  <hgroup className="header-group">
    <h2 className="header-name">Welcome Back, {currentUser.name} </h2>
    <button className="logout-button" onClick={logout}>Log Out</button>
  </hgroup>
);

const Splash = ({currentUser, logout, dummyLogin}) => (
  currentUser ? greeting(currentUser, logout) : sessionLinks(dummyLogin)
);

export default Splash;