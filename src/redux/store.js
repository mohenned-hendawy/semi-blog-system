import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";


let middleWares =  [thunk];

let intialState = {
    count:0,
    posts:[]
}
let store = createStore(rootReducer, intialState,
    compose(applyMiddleware(...middleWares), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );

export default store;