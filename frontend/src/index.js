import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(() => {
  // reducer,
  // window.__REDUX_DEVTOOLS_EXTENSON__ && window.__REDUX_DEVTOOLS_EXTENSION()
});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
