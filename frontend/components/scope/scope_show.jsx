import React from 'react';
import {Link} from 'react-router-dom';

class ScopeShow extends React.Component {

    componentDidMount() {
        this.props.fetchScope(this.props.match.params.scopeId)
    }

    render() {
        if (!this.props.scope) return null;
        return (
            <div className="scope-index">
                <div className="flex-items">
                <div className="main-top-nav">
                    <div>
                        <Link to="/scopes">
                        <img className="nav-logo" src="https://help.basecamp.com/images/logo-bc.png"/>
                        </Link>
                    </div>
                    <div className="top-nav-div">
                        <div className="top-navi">
                            <Link to="/scopes">Home</Link>
                        </div>
                        <div className="top-navi">
                            Company
                        </div>
                        <div className="top-navi">
                            Teams
                        </div>
                        <div className="top-navi">
                            Projects
                        </div>
                    </div>
                    <div className="place-holder">
                    </div>
                </div>
                </div>
                <div className="flex-items">
                <div className="scope-show">
                    <div className="flex-items">
                        <Link to='/scopes'
                        className="show-title">
                            {this.props.scope.name}
                        </Link>
                    </div>
                    <div className="flex-items">
                        {this.props.scope.description}
                    </div>
                    <div>
                        <Link to="">
                        <h3>Message Board</h3>
                        </Link>
                    </div>
                    <div>
                        <h3>To-dos</h3>
                    </div>
                    <div>
                        <h3>Schedule</h3>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ScopeShow;