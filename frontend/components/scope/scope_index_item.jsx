import React from 'react';
import {withRouter} from 'react-router-dom';

class ScopeIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render () {
        return (
            <div>
                <Link to={`/scopes/${scope.id}`}>
                    {scope.name}
                </Link>
                <br/>
                <p>{scope.description}</p>
            </div>
        )
    }
}

export default ScopeIndexItem; 