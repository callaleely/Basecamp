import {connect} from 'react-redux';
import MessageIndex from './message_index';
import {fetchMessages,
        deleteMessage} from '../../actions/message_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return {
    messages: Object.keys(state.entities.messages)
        .map(id => state.entities.messages[id]),
}}

const mapDispatchToProps = dispatch => ({
    fetchMessages: (scopeId) => dispatch(fetchMessages(scopeId)),
    deleteMessage: (scopeId, id) => dispatch(deleteMessage(scopeId, id))
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageIndex))