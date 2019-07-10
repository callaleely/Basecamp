import React from 'react';
import {Link} from 'react-router-dom';

class ScopeShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchScopes(this.props.match.params.scopeId)
    }

    render() {

        return (
            <div>
                
            </div>
        )
    }
}