import { React } from 'react';
import { ConnectedLayout } from './Layout';
import { createStore } from 'redux';
import reducer from '../reducers';
import { Provider } from 'react-redux';

let store = createStore(reducer);

const App = () => {
    return (
        <Provider store={store}>
            <ConnectedLayout />
        </Provider>
    );
}
export default App;