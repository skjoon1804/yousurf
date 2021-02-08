import { combineReducers } from 'redux';
import { query } from './query';
import { login } from './login';
import {results, nextPageToken } from './results';
import { users } from './users';

const reducer = combineReducers({
    query,
    login,
    results,
    nextPageToken,
    users
})
export default reducer;