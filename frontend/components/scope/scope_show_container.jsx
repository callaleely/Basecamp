import {connect} from 'react-redux';
import ScopeShow from './scope_show';
import {fetchScope} from '../../actions/scope_actions'


const mapStateToProps = (state, ownProps) => {
    return({
        scope: state.entities.scopes[ownProps.match.params.scopeId] 
    });
}

const mapDispatchToProps = dispatch => {
    return ({
    fetchScope: id => dispatch(fetchScope(id))
})
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScopeShow);