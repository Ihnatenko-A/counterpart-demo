import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, Store } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from "react-redux"

import App from './App';
import reducer from "./store/reducer"
import reportWebVitals from './reportWebVitals';

import './index.css';
import 'fontsource-roboto';

const composeEnhancers = composeWithDevTools({});

const store: Store<PersonalInfoState, PersonalInfoAction> & {
  dispatch: any
} = createStore(reducer, composeEnhancers(
  applyMiddleware()
))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
