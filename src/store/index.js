import {createStore, combineReducers} from "redux";
import {filterReducer} from "./filterReducer";

const rootReducer = combineReducers({
    filter: filterReducer
})

export const store = createStore(rootReducer)