import React from 'react';
import {withRouter, Link} from 'react-router-dom';

class MessageIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.props.deleteMessage(this.props.message.scope_id, this.props.message.id)
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
                <input type="submit" value="Delete"
                onClick={() => this.handleSubmit()}/>
            </div>
        )
    }
}

export default MessageIndexItem; 