import { createStore, applyMiddleware, compose } from "redux";
import { storiesReducer } from "../reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

let store;
//* Configures store with redux-thunk in production
//* and with redux-thunk, redux-devtools, and logger in development
if (process.env.NODE_ENV === "production") {
  store = createStore(storiesReducer, applyMiddleware(thunk));
} else {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(
    storiesReducer,
    composeEnhancers(applyMiddleware(thunk, logger))
    // composeEnhancers(applyMiddleware(thunk))
  );
}

export default store;
