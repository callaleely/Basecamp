import React from 'react';
import CreateMessageFormContainer from './create_message_form_container';
import MessageIndexItem from './message_index_items';
import {withRouter} from 'react-router-dom';

class MessageIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchMessages(this.props.match.params.scopeId);
    }

    render() {
        let messageRender;
        let messages = this.props.messages;
        if (!messages.length) {
            messageRender = "Post messages"
        } else {
            messageRender = messages.map(message => (
                <MessageIndexItem
                    message = {message}
                    key = {message.id}/>))
        }
        return (
            <div>
                <ul>
                    {messageRender}
                </ul>
                this is the message index page 
                <CreateMessageFormContainer />
            </div>
        )
    }
}

export default withRouter(MessageIndex); 