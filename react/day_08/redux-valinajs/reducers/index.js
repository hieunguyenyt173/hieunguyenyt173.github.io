import counterReducer from "./counterReducer.js";
import todoReducer from "./todoReducer.js";
const { combineReducers } = window.Redux;

const rootReducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer
})

export default rootReducer