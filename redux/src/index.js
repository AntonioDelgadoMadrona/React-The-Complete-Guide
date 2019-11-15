import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer';

// CREATE THE STORE
const store = createStore(reducer);

// WRAPP THE APP WITH THE PROVIDER WITH STORE PROPS FOR TO ACCES TO REDUCER FROM ALL THE APP
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();