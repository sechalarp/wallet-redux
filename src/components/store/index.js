import { createStore, combineReducers } from "redux";
import balanceReducer from "./balance/reducers";

const reducers = combineReducers({
    balanceReducer,
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;