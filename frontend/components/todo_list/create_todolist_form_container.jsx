import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TodolistForm from './todolist_form';
import { createList } from '../../actions/todo_list_actions';

const mapStateToProps = (state, ownProps) => {
  const todolist = { title: 'test', body: 'test', due_date:'test', scope_id: ownProps.match.params.scopeId};
  const formType = 'Add this list';

  return { todolist, formType };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: todolist => dispatch(createList(todolist)),
  };
};

export default withRouter(connect(
    mapStateToProps, 
    mapDispatchToProps)(TodolistForm));