import merge from 'lodash';
import {
    RECEIVE_EVENTS,
    RECEIVE_EVENT,
    REMOVE_EVENT
} from '../actions/event_actions';

export const EventsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_EVENTS:
            return Object.assign({}, action.events);
        case RECEIVE_EVENT:
            return Object.assign({}, state, {[action.event.id]: action.event})
        case REMOVE_EVENT:
            let newState = Object.assign({}, state);
            delete newState[action.event.id];
            return newState;
        default:
            return state; 
    }
}