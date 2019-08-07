import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TodolistForm from './todolist_form';
import { fetchList, updateList } from '../../actions/todo_list_actions';

const mapStateToProps = (state, ownProps) => {
  const defaultTodolist = { title: '', body: '' };
  const todolist = state.todolists[ownProps.match.params.todolistId] || defaultTodolist;
  const formType = 'Update Post';

  return { todolist, formType };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchList: (scopeId, id) => dispatch(fetchList(scopeId,id)),
    action: todolist => dispatch(updateList(todolist)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodolistForm);