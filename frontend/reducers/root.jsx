import {combineReducers} from 'redux';
import sessionReducer from './session';
import errorsReducer from './errors';
import entities_reducer from './entities_reducer';


export default combineReducers({
    session: sessionReducer,
    errors: errorsReducer,
    entities: entities_reducer
})

