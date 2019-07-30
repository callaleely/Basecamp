import {combineReducers} from 'redux';
import ScopesReducer from './scopes_reducer';
import { EventsReducer } from './events_reducer';
import { MessagesReducer } from './messages_reducer';
import { TodolistsReducer } from './todolists_reducer';
import { TodosReducer } from './todos_reducer';

export default combineReducers({
    scopes: ScopesReducer,
    events: EventsReducer,
    messages: MessagesReducer,
    todolists: TodolistsReducer,
    todos: TodosReducer
})

