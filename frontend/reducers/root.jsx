import {combineReducers} from 'redux';
import sessionReducer from './session';
import errorsReducer from './errors';
import entities_reducer from './entities_reducer';
import ui from './ui_reducer';


export default combineReducers({
    session: sessionReducer,
    entities: entities_reducer,
    ui,
    errors: errorsReducer,
})

