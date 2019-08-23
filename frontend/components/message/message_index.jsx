import React from 'react';
import CreateMessageFormContainer from './create_message_form_container';
import MessageIndexItem from './message_index_items';
import {withRouter, Link} from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container'

class MessageIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchMessages(this.props.match.params.scopeId);
        this.props.fetchScopes();
    }

    render() {
        let messageRender;
        let messages = this.props.messages;
        let scopeName = this.props.scopes.map(scope => {
            if (scope.id == this.props.id) {
            return scope.name}});
        if (!messages.length) {
            messageRender = "Post messages"
        } else {
            messageRender = messages.map(message => (
                <MessageIndexItem
                    message = {message}
                    key = {message.id}
                    deleteMessage = {this.props.deleteMessage} />))
        }

        let scopePage = '/scopes/'+this.props.match.params.scopeId
        return (
            <div className="feature_page">
                <NavBarContainer />
                <div className="feature_container">
                    <div className="scope_name_container">
                        <Link to={scopePage} className="scope_name">
                            {scopeName}
                        </Link>
                    </div>
                    <div className="feature_index">
                        <div className="feature_index-container">
                            <div className="feature_index-feature_name">
                                Message Board
                            </div>
                            <ul>
                                {messageRender}
                            </ul>
                                <div className="feature_form_container">
                                    <CreateMessageFormContainer />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(MessageIndex); 