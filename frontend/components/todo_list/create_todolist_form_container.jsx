import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TodolistForm from './todolist_form';
import { createList } from '../../actions/todo_list_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  const todolist = { title: 'test', body: 'test', due_date:'test'};
  const formType = 'Create List';

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