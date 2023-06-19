import {createStore, combineReducers} from "redux";
import {filterReducer} from "./filterReducer";
import {typeReducer} from "./typeReducer";
import {postsReducer} from "./postsReducer";

const rootReducer = combineReducers({
    filter: filterReducer,
    type: typeReducer,
    posts: postsReducer
})

export const store = createStore(rootReducer)