import { combineReducers } from 'redux';
import { query } from './query';
import { login } from './login';
import {results, nextPageToken } from './results';

const reducer = combineReducers({
    query,
    login,
    results,
    nextPageToken
})
export default reducer;