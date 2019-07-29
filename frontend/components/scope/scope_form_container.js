import {connect} from 'react-redux';
import {createScope} from '../../actions/scope_actions'
import ScopeForm from './scope_form'

const mapDispatchToProps = (dispatch) => ({
    createScope: scope => dispatch(creatScope(scope))
});

export default connect(
    null,
    mapDispatchToProps
)(ScopeForm)