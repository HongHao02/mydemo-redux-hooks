import { combineReducers } from 'redux';

import counterReducer from './counter/counterSlice';
import hobbyReducer from './hobby/hobbySlice';
const rootReducer = combineReducers({
    counter: counterReducer,
    hobby: hobbyReducer,
});

export default rootReducer;
