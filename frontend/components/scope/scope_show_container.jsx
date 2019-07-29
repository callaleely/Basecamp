import {connect} from 'react-redux';
import ScopeShow from './scope_show';
import {fetchScope} from '../../actions/scope_actions'
import { logout } from '../../actions/session';

const mapStateToProps = (state, ownProps) => {
    return({
        scope: state.entities.scopes[ownProps.match.params.scopeId] 
    });
}

const mapDispatchToProps = dispatch => {
    return ({
    fetchScope: id => dispatch(fetchScope(id)),
    logout: user => dispatch(logout(user))
    
})
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScopeShow);