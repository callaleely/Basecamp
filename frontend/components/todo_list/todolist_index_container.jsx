import {connect} from 'react-redux';
import TodolistIndex from './todolist_index';
import {
    fetchLists,
    deleteList
} from '../../actions/todo_list_actions';
import {withRouter} from 'react-router-dom';
import {fetchScopes} from '../../actions/scope_actions';

const mapStateToProps = (state, ownProps) => {
    return {
    todolists: Object.keys(state.entities.todolists)
        .map(id => state.entities.todolists[id]),
    scopes: Object.values(state.entities.scopes),
    id: ownProps.match.params.scopeId,
}};

const mapDispatchToProps = dispatch => ({
    fetchScopes: () => dispatch(fetchScopes()),
    fetchLists: (scopeId) => dispatch(fetchLists(scopeId)),
    deleteList: (scopeId, id) => dispatch(deleteList(scopeId, id))
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(TodolistIndex));