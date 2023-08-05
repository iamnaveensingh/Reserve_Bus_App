import { combineReducers, createStore } from "redux";
import reducer from "./reducer";

const rootReducers = combineReducers({ reducer });

const store = createStore(rootReducers);
export default store;
