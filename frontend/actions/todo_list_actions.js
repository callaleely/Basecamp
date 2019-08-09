import * as ApiUtil from '../utils/todolist_api_util';

export const RECEIVE_TODOLISTS = "RECEIVE_TODOLISTS";
export const RECEIVE_TODOLIST = "RECEIVE_TODOLIST";
export const REMOVE_TODOLIST = "REMOVE_TODOLIST";

export const fetchLists = scopeId => dispatch => (
    ApiUtil.fetchLists(scopeId)
        .then(todolists => dispatch({type: RECEIVE_TODOLISTS, todolists: todolists}))
)

export const fetchList = (scopeId, id) => dispatch => (
    ApiUtil.fetchList(scopeId, id)
        .then(todolist => dispatch({type: RECEIVE_TODOLIST, todolist}))
)

export const createList = (scopeId, todolist) => dispatch => {
    return(
        ApiUtil.createList(scopeId, todolist)
        .then(todolist => dispatch({type: RECEIVE_TODOLIST, todolist}))
        )
    }

export const updateList = todolist => dispatch => (
    ApiUtil.updateList(todolist)
        .then(todolist => dispatch({type: RECEIVE_TODOLIST, todolist}))
)

export const deleteList = (scopeId, id) => (
    ApiUtil.deleteList(scopeId, id)
        .then(todolist => dispatch({type: REMOVE_TODOLIST, todolist}))
)