import React from 'react';
import {Link} from 'react-router-dom';

export default ({ currentUser, logout }) => {
  // const display = currentUser ? (
  //     <p>
  //       Hello, {currentUser.name}
  //     </p>)
  //     :
  //   (<div>
  //     <Link to="/signup">Sign Up</Link>
  //     <Link to="/login">Log In</Link>
  //   </div> )
  // }

  return (
     <div className="main-top-nav">
        <div>
            <Link to="/scopes">
            <img className="nav-logo" src="https://help.basecamp.com/images/logo-bc.png"/>
            </Link>
        </div>
        <div className="logout_button">
            <button>Logout</button>
        </div>
    </div>
  )
};