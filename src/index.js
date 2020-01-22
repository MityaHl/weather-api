import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./AppContainer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import * as serviceWorker from "./serviceWorker";
import createSagaMiddleware from "redux-saga";
import reducer from "./store/reducers";
import thunk from "redux-thunk";
import { watchLoad } from "./sagas";
import "./index.css";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(watchLoad);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
