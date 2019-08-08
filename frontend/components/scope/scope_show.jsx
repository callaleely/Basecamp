import React from 'react';
import {Link} from 'react-router-dom';

class ScopeShow extends React.Component {

    componentDidMount() {
        this.props.fetchScope(this.props.match.params.scopeId)
    }

    render() {
        if (!this.props.scope) return null;
        let messages = '/scopes/'+this.props.scope.id+'/messages'
        let todoLists = '/scopes/'+this.props.scope.id+'/todo_lists'
        let schedules = '/scopes/'+this.props.scope.id+'/schedules'
        
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
                    <div className="flex-items">
                        
                        <Link to={messages} className="card-items">
                            <h3>Message Board</h3>
                            <div className="card-items-img">
                            <img src={window.images.message} height="100" />
                            </div>
                            <p>Post announcements, pitch, ideas, progress updates, etc. and keep feedback on-topic.</p>
                        </Link>
                        
                        <Link to={todoLists} className="card-items">
                            <h3>To-dos</h3>
                            <div className="card-items-img">
                            <img src={window.images.todo} height="100" />
                            </div>
                            <p>Make lists of work that needs to get done, assign items, set due dates, and discuss.</p>
                        </Link>
                        <Link to={schedules} className="card-items">
                            <h3>Schedule</h3>
                            <div className="card-items-img">
                            <img src={window.images.schedule} height="100"/>
                            </div>
                            <p>Set important dates on a shared schedule. Subscribe to events in Google Cal, iCal, or Outlook.</p>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ScopeShow;