import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";

import thunk from "redux-thunk";
import { reducers } from "../reducers";

function saveToLocalstorage(store) {
  try {
    const serializedStore = JSON.stringify(store);
    localStorage.setItem("store", serializedStore);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedStore = localStorage.getItem("store");
    if (serializedStore === null) return undefined;
    return JSON.parse(serializedStore);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const composeEnhanceers =
  window.__REDUX_DEVTOOLS_EXTENSTION_COMPOSE__ || compose;
const persistedState = loadFromLocalStorage();

const store = createStore(
  reducers,
  persistedState,
  composeEnhanceers(applyMiddleware(thunk))
);
store.subscribe(() => {
  // saveToLocalstorage(store.getstate());
  console.log("state change", saveToLocalstorage(store.getState()));
});

export default store;
