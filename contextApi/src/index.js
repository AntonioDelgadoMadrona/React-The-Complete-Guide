import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

// WITH REDUX
// import { Provider } from 'react-redux';  
// import { combineReducers, createStore } from 'redux';
// import productReducer from './store/reducers/products';  
// const rootReducer = combineReducers({
//   shop: productReducer
// });
// const store = createStore(rootReducer);



 // WITH API CONTEXT
// import ProductsProvider from './context/products-context'; 


// WITH CUSTOM HOOKS
import configureStore from './hooks-store/products-store'; 
configureStore();


ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);
