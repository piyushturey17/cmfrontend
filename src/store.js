import {createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers"
import { composeWithDevTools } from "redux-devtools-extension";

const initialState={};

const middleware=[thunk];



const composedEnhancer = composeWithDevTools(
    compose(applyMiddleware(...middleware))
);
const store = createStore(rootReducer, composedEnhancer);

export default store;