import {connect} from 'react-redux';
import TodolistIndex from './todolist_index';
import {
    fetchLists,
    deleteList
} from '../../actions/todo_list_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return {
    todolists: Object.keys(state.entities.todolists)
        .map(id => state.entities.todolists[id]),
        scopeName: state.entities.scopes[ownProps.match.params.scopeId].name
}};

const mapDispatchToProps = dispatch => ({
    fetchLists: (scopeId) => dispatch(fetchLists(scopeId)),
    deleteList: (scopeId, id) => dispatch(deleteList(scopeId, id))
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(TodolistIndex));