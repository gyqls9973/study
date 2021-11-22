import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./Module/RootReducer";
import {Provider} from "react-redux";
import promiseMiddlerware from 'redux-promise';
import reduxThunk from 'redux-thunk';

const createStoreWidthMiddleware = applyMiddleware(promiseMiddlerware, reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWidthMiddleware(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())} >
        <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
