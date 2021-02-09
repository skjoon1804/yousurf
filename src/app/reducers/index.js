import { combineReducers } from 'redux';
import { query } from './query';
import { login } from './login';
import {results, nextPageToken } from './results';
import { users } from './users';
import { session } from './session';

const reducer = combineReducers({
    query,
    login,
    results,
    nextPageToken,
    users,
    session
})
export default reducer;