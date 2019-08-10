import * as ApiUtil from '../utils/message_api_util';

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";

export const fetchMessages = scopeId => dispatch => (
    ApiUtil.fetchMessages(scopeId)
        .then(messages => dispatch({type: RECEIVE_MESSAGES, messages: messages}))
)

export const fetchMessage = (scopeId, id) => dispatch => (
    ApiUtil.fetchMessage(scopeId, id)
        .then(message => dispatch({type: RECEIVE_MESSAGE, message}))
)

export const createMessage = (scopeId, message) => dispatch => {
    return (
    ApiUtil.createMessage(scopeId, message)
        .then(message => dispatch({type: RECEIVE_MESSAGE, message}))
    )}

export const updateMessage = message => dispatch => (
    ApiUtil.updateMessage(message)
        .then(message => dispatch({type: RECEIVE_MESSAGE, message}))
)

export const deleteMessage = (scopeId, id) => dispatch => {
    return (
    ApiUtil.deleteMessage(scopeId, id)
        .then(message => dispatch({type: REMOVE_MESSAGE, message}))
)}