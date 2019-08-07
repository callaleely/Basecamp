import React from 'react';
import CreateMessageFormContainer from './create_message_form_container';

class MessageIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                this is the message index page 
                <CreateMessageFormContainer />
            </div>
        )
    }
}

export default MessageIndex; 