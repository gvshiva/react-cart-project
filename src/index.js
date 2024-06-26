import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import cart from './ducks/cart';
import products from './ducks/product';
import logger from 'redux-logger';
import productsData from './data/product';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rootReducer = combineReducers({
  cart: cart,
  products: products
});

const store = createStore(rootReducer, {products:productsData},
  applyMiddleware(logger));

root.render(
  <React.StrictMode>
    <Provider store ={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
