import {connect} from 'react-redux';
import ScopeShow from './scope_show';
import {fetchScope} from '../../actions/scope_actions'


const mapStateToProps = state => ({
    scopes: state.entities.scopes 
});

const mapDispatchToProps = dispatch => ({
    fetchScope: id => dispatch(fetchScope(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScopeShow);