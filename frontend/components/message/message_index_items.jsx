import React from 'react';
import {withRouter, Link} from 'react-router-dom';

class MessageIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <h3> {this.props.message.title}</h3>
                <br/>
                <p>{this.props.message.body}</p>
            </div>
        )
    }
}

export default MessageIndexItem; 