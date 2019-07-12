import {connect} from 'react-redux';
import TodolistIndex from './todolist_index';
import {
    fetchLists
} from '../../actions/todo_list_actions';

const mapStateToProps = (state, ownProps) => ({
    todolists: state.entities.todolists
});

const mapDispatchToProps = dispatch => ({
    fetchLists: () => dispatch(fetchLists())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodolistIndex);