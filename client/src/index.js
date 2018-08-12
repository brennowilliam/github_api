import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Redux
import configureStore from "./store/configureStore"
// React Redux
import { Provider } from "react-redux"

// CSS 
import "normalize.css/normalize.css"

const store = configureStore()
store.subscribe(() => {
  const state = store.getState();
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
