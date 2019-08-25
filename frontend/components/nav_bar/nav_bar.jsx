import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
     <div className="main-top-nav">
        <div>
            <Link to="/scopes">
            <img className="nav-logo" src="https://help.basecamp.com/images/logo-bc.png"/>
            </Link>
        </div>
        <div className="logout_button">
            <button onClick={this.props.logout}>Logout</button>
        </div>
    </div>

    )
  }
}

export default NavBar; 