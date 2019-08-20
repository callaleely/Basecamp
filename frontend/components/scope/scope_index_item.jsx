import React from 'react';
import {withRouter, Link} from 'react-router-dom';

class ScopeIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.deleteScope = this.deleteScope.bind(this);
        // this.handleClick = this.handleClick.bind(this);
    }

    deleteScope() {
        this.props.deleteScope(this.props.scope.id)
    }

    render () {
        return (
            <div className="card-content">
                <div className="card-content-flex">
                <Link className="card-title" to={`/scopes/${this.props.scope.id}`}>
                    {this.props.scope.name}
                </Link>
                <button onClick={this.deleteScope}>
                <img src={window.images.delete} height="12" />
                </button>
                </div>
                    <br/>
                    <p>{this.props.scope.description}</p>

            </div>
        )
    }
}

export default ScopeIndexItem; 