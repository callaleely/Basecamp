import {connect} from 'react-redux';
import {createScope} from '../../actions/scope_actions';
import {closeModal} from '../../actions/modal_actions';
import ScopeForm from './scope_form'

const mapDispatchToProps = (dispatch) => ({
    createScope: scope => dispatch(createScope(scope)),
    closeModal: () => dispatch(closeModal())
});

export default connect(
    null,
    mapDispatchToProps
)(ScopeForm)