import {connect} from 'react-redux';
import TodolistIndex from './todolist_index';
import {
    fetchLists
} from '../../actions/todo_list_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return {
    todolists: Object.keys(state.entities.todolists)
        .map(id => state.entities.todolists[id])
}};

const mapDispatchToProps = dispatch => ({
    fetchLists: (scopeId) => dispatch(fetchLists(scopeId))
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(TodolistIndex));