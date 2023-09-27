import { combineReducers } from "redux";
import testReducer from "./testReducer";
import errorReducer from "./errorReducer";
import batchReducer from "./batchReducer";


export default combineReducers({
    tests:testReducer,
    errors:errorReducer,
    batchs:batchReducer,
})