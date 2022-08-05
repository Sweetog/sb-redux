import counterReducer from './counter';
import loggedReducer from './logger';
import {combineReducers} from 'redux';


export default combineReducers({counterReducer, loggedReducer});