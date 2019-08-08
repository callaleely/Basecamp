import {connect} from 'react-redux';
import MessageIndex from './message_index';
import {fetchMessages} from '../../actions/message_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
    messages: Object.keys(state.entities.messages)
        .map(id => state.entities.messages[id]),
}}

const mapDispatchToProps = dispatch => ({
    fetchMessages: (scopeId) => dispatch(fetchMessages(scopeId))
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageIndex))