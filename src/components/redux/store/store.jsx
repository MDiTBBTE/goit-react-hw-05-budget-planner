import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import allReducers from "../reducers/reducer";

const rootReducer = combineReducers({ store: allReducers });

const store = createStore(rootReducer, composeWithDevTools());

export default store;
