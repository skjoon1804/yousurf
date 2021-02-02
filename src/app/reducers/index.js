import { combineReducers } from 'redux';
import queryReducer from './query';
import loginReducer from './login';

const reducer = combineReducers({
    query: queryReducer,
    login: loginReducer
})
export default reducer;