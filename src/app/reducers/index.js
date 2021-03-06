import { combineReducers } from 'redux';
import { query } from './query';
import { login } from './login';
import {results, nextPageToken } from './results';
import { users } from './users';
import { session } from './session';

const reducer = combineReducers({
    login,
    query,
    results,
    nextPageToken,
    users,
    session
})
export default reducer;