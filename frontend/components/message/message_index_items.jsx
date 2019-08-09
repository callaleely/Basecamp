import React from 'react';
import {withRouter, Link} from 'react-router-dom';

class MessageIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="message_index-contents">
                <div className="message_index-title">
                    {this.props.message.title}
                </div>
                <div className="message_index-body">
                    {this.props.message.body}
                </div>
            </div>
        )
    }
}

export default MessageIndexItem; 