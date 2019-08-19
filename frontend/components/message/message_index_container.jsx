import {connect} from 'react-redux';
import MessageIndex from './message_index';
import {fetchMessages,
        deleteMessage} from '../../actions/message_actions';
import {withRouter} from 'react-router-dom';
import {fetchScopes} from '../../actions/scope_actions';

const mapStateToProps = (state, ownProps) => {
    debugger 
    return {
    messages: Object.keys(state.entities.messages)
        .map(id => state.entities.messages[id]),
        scopeName: state.entities.scopes[ownProps.match.params.scopeId].name
}}

const mapDispatchToProps = dispatch => ({
    fetchScopes: () => dispatch(fetchScopes()),
    fetchMessages: (scopeId) => dispatch(fetchMessages(scopeId)),
    deleteMessage: (scopeId, id) => dispatch(deleteMessage(scopeId, id))
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageIndex))