import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import RootReducer from '../reducers/root.jsx';

const configureStore = (preloadedState ={}) => {
    return createStore(
        RootReducer,
        preloadedState,
        applyMiddleware(logger)
    )
};

export default configureStore;