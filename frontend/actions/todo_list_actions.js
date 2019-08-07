import * as ApiUtil from '../utils/todolist_api_util';

export const RECEIVE_TODOLISTS = "RECEIVE_TODOLISTS";
export const RECEIVE_TODOLIST = "RECEIVE_TODOLIST";
export const REMOVE_TODOLIST = "REMOVE_TODOLIST";

export const fetchLists = scopeId => dispatch => (
    ApiUtil.fetchLists(scopeId)
        .then(lists => dispatch({type: RECEIVE_TODOLISTS, lists}))
)

export const fetchList = (scopeId, id) => dispatch => (
    ApiUtil.fetchList(scopeId, id)
        .then(list => dispatch({type: RECEIVE_TODOLIST, list}))
)

export const createList = list => dispatch => {
    debugger
    return(
        ApiUtil.createList(list)
        .then(list => dispatch({type: RECEIVE_TODOLIST, list}))
        )
    }

export const updateList = list => dispatch => (
    ApiUtil.updateList(list)
        .then(list => dispatch({type: RECEIVE_TODOLIST, list}))
)

export const deleteList = (scopeId, id) => (
    ApiUtil.deleteList(scopeId, id)
        .then(list => dispatch({type: REMOVE_TODOLIST, list}))
)