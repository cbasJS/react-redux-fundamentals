import { createStore, applyMiddleware } from "redux";

import { createLogger } from "redux-logger";

import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers";

//Compone las reduces dev tools con las middlewares
const enhancer = composeWithDevTools(applyMiddleware(createLogger()));

const configureStore = initialState =>
  createStore(rootReducer, initialState, enhancer);

  

export default configureStore;
