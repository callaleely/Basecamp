import * as ApiUtil from '../utils/todo_api_util';

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const fetchTodos = (scopeId, todoListId) => dispatch => (
    ApiUtil.fetchTodos(scopeId, todoListId)
        .then(todos => dispatch({type: RECEIVE_TODOS, todos}))
)

export const fetchTodo = (scopeId, todoListId, id) => dispatch => (
    ApiUtil.fetchTodo(scopeId, todoListId, id)
        .then(todo => dispatch({type: RECEIVE_TODO, todo}))
)

export const createTodo = todo => dispatch => (
    ApiUtil.createTodo(todo)
        .then(todo => dispatch({type: RECEIVE_TODO, todo}))
)

export const updateTodo = todo => dispatch => (
    ApiUtil.updateTodo(todo)
        .then(todo => dispatch({type: RECEIVE_TODO, todo}))
)

export const deleteTodo = (scopeId, todoListId, id) => dispatch => (
    ApiUtil.deleteTodo(scopeId, todoListId, id)
        .then(todo => dispatch({type: REMOVE_TODO, todo}))
)