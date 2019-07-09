import * as ApiUtil from '../utils/event_api_util';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";

export const fetchEvents = scopeId => dispatch => (
    ApiUtil.fetchEvents(scopeId)
        .then(events => dispatch({type: RECEIVE_EVENTS, events: events}))
)

export const fetchEvent = (scopeId, id) => dispatch => (
    ApiUtil.fetchEvent(scopeId, id)
        .then(event => dispatch({type: RECEIVE_EVENT, event}))
)

export const createEvent = event => dispatch => (
    ApiUtil.createEvent(event)
        .then(event => dispatch({type: RECEIVE_EVENT, event}))
)

export const updateEvent = event => dispatch => (
    ApiUtil.updateEvent(event)
        .then(event => dispatch({type: RECEIVE_EVENT, event}))
)

export const deleteEvent = (scopeId, id) => (
    ApiUtil.deleteEvent(scopeId, id)
        .then(event => dispatch({type: REMOVE_EVENT, event}))
)