import { React } from 'react';
import Layout from './Layout';
import { createStore } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';

let store = createStore(reducer);

const App = () => {
    return (
        <Provider store={store}>
            <Layout />
        </Provider>
    );
}
export default App;