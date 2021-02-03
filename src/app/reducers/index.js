import { combineReducers } from 'redux';
import { query } from './query';
import { login } from './login';
import { results } from './results';

const reducer = combineReducers({
    query,
    login,
    results
})
export default reducer;