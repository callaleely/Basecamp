import React from 'react';
import CreateMessageFormContainer from './create_message_form_container';
import MessageIndexItem from './message_index_items';
import {withRouter} from 'react-router-dom';

class MessageIndex extends React.Component {
    componentDidMount() {
        this.props.fetchMessages(this.props.match.params.scopeId);
    }

    render() {
        debugger
        return (
            <div>
                <ul>
                {this.props.messages.map(message => (
                <MessageIndexItem
                    message = {message}
                key = {message.id}/>))
                }
                </ul>
                this is the message index page 
                <CreateMessageFormContainer />
            </div>
        )
    }
}

export default withRouter(MessageIndex); 