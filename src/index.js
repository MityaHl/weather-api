import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';
import { Provider } from 'react-redux';
import  { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as serviceWorker from './serviceWorker'
import reducer from './store/reducers';
import thunk from 'redux-thunk';
import './index.css';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);


serviceWorker.register()


