import React from 'react';
import {Link} from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <p>
        Hello, {currentUser.name}
      </p>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>
    </div>
  )
}

  return (
    <header className="nav-bar">
      <h1 className="logo">BASECAMP</h1>
      <div>
        {display}
      </div>
    </header>
  )
};