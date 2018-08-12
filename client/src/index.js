import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import configureStore from "./store/configureStore"
// React Redux
import { Provider } from "react-redux"
// Router
import AppRouter from "./routers/AppRouter"

// CSS 
import "normalize.css/normalize.css"

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>, 
  document.getElementById('root')
);
