import {connect} from 'react-redux';
import MessageForm from './message_form';
import {createMessage} from '../../actions/message_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    const message = {title:"", body:""}
    const formType = "Create Message";
    return {message, formType};
}

const mapDispatchToProps = dispatch => {
    return {
    action: message => dispatch(createMessage(message))
}}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageForm));