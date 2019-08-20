import React from 'react';
import {withRouter, Link} from 'react-router-dom';

class ScopeIndexItem extends React.Component {
    constructor(props) {
        super(props);
        // this.handleClick = this.handleClick.bind(this);
    }

    render () {
        return (
            <div className="card-content">
                <Link className="card-title" to={`/scopes/${this.props.scope.id}`}>
                    {this.props.scope.name}
                    <br/>
                    <p>{this.props.scope.description}</p>
                </Link>

            </div>
        )
    }
}

export default ScopeIndexItem; 