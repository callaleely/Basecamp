import {connect} from 'react-redux';
import MessageForm from './message_form';
import { updateMessage } from '../../utils/message_api_util';

const mapStateToProps = (state, ownProps) => {
    const formType = 'Edit Message'
}

const mapDispatchToProps = dispatch => {
    return {
        action: message => dispatch(updateMessage(message))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageForm)