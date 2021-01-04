import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, Store } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from "react-redux"

import App from './App';
import reducer from "./store/reducer"

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

