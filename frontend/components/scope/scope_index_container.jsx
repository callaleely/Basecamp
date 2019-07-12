import {connect} from 'react-redux';
import ScopeIndex from './scope_index';
import {
    fetchScopes
} from '../../actions/scope_actions'

const mapStateToProps = state => {
    return ({
    scopes: Object.keys(state.entities.scopes)
        .map(id => state.entities.scopes[id])
    })}

const mapDispatchToProps = dispatch => ({
    fetchScopes: () => dispatch(fetchScopes())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScopeIndex);