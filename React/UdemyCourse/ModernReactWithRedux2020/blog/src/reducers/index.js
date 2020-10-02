import {combineReducers} from 'redux';
import postReducer from './postReducer';
import userReducer from './userReducer';
import resultReducer from './resultReducer';

export default combineReducers({
    result: resultReducer,
    post: postReducer,
    user: userReducer
});