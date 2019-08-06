import {connect} from 'react-redux';
import ScopeIndex from './scope_index';
import {
    fetchScopes
} from '../../actions/scope_actions';
import { logout } from '../../actions/session';

const mapStateToProps = state => {
    return ({
    scopes: Object.keys(state.entities.scopes)
        .map(id => state.entities.scopes[id]),
    currentUser: state.session.currentUser,
    })}

const mapDispatchToProps = dispatch => ({
    fetchScopes: () => dispatch(fetchScopes()),
    logout: (user) => dispatch(logout(user))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScopeIndex);