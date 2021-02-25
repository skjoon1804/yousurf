import React from 'react';
import { Route, Router } from 'react-router-dom';
import { createStore } from 'redux';
import reducer from '../reducers';
import { Provider } from 'react-redux';
import { history } from '../reducers/history';
import { Redirect } from 'react-router';

import { ConnectedLayout } from './Layout/Layout';
import { ConnectedLogin } from './Login/Login';
import { ConnectedSignup } from './Signup/Signup';
import { ConnectedProfile } from './Profile/Profile';
import { ConnectedFavorite } from './Favorite/Favorite';

let store = createStore(reducer);

const RouteGuard = Component => ({match}) =>
    !store.getState().session.authenticated ?
    <Redirect to="/" /> :
    <Component match={match} />

const App = () => {
    return (
        <Router history={history}>
            <Provider store={store}>
                <Route exact path="/" component={props => <ConnectedLogin {...props} />} />
                <Route exact path="/signup" component={props => <ConnectedSignup {...props} />} />
                <Route exact path="/home" render={RouteGuard(ConnectedLayout)} />
                <Route exact path="/profile" render={RouteGuard(ConnectedProfile)} />
                <Route exact path="/favorite" render={RouteGuard(ConnectedFavorite)} />
            </Provider>
        </Router>
    );
}
export default App;



