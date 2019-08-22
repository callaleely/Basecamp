import {connect} from 'react-redux';
import MessageForm from './message_form';
import {createMessage} from '../../actions/message_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    const message = {title:"", body:"", scope_id: ownProps.match.params.scopeId}
    const formType = "Post this message";
    return {message, formType};
}

const mapDispatchToProps = dispatch => {
    return {
    action: (scopeId, message) => dispatch(createMessage(scopeId, message))
}}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageForm));