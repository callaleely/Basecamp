import merge from 'lodash';
import {
    RECEIVE_MESSAGES,
    RECEIVE_MESSAGE,
    REMOVE_MESSAGE
} from '../actions/message_actions';

export const MessagesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_MESSAGES:
            return Object.assign({}, action.messages);
        case RECEIVE_MESSAGE:
            return Object.assign({}, state, {[action.message.id]: action.message})
        case REMOVE_MESSAGE:
            let newState = Object.assign({}, state);
            delete newState[action.message.id];
            return newState;
        default:
            return state; 
    }
}