import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TodolistForm from './todolist_form';
import { createList } from '../../actions/todo_list_actions';

const mapStateToProps = (state, ownProps) => {
  const todolist = { title: '', body: '' };
  const formType = 'Create Post';

  return { todolist, formType };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: todolist => dispatch(createList(todolist)),
  };
};

export default connect(
    mapStateToProps, 
    mapDispatchToProps)(TodolistForm);