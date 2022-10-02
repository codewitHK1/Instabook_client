import { combineReducers } from "redux";

import authreducer from "./authreducer";
import postReducer from "./postReducer";
export const reducers = combineReducers({ authreducer, postReducer });
