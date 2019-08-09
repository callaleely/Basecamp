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
            <div className="feature_container">
                <div className="feature_index">
                    <div className="feature_index-container">
                        <div className="feature_index-feature_name">
                            Message Board
                        </div>
                        <ul>
                            {messageRender}
                        </ul>
                            <CreateMessageFormContainer />
                        </div>
                </div>
            </div>
        )
    }
}

export default withRouter(MessageIndex); 