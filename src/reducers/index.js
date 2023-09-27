import { combineReducers } from "redux";
import testReducer from "./testReducer";
import errorReducer from "./errorReducer";


export default combineReducers({
    tests:testReducer,
    errors:errorReducer,
})