import { combineReducers } from 'redux';
import userReducer from './userReducer';
import weatherReducer from './weatherReducer';

export default combineReducers({
    user: userReducer,
    weather: weatherReducer
});