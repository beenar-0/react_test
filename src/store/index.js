import {createStore, combineReducers} from "redux";
import {filterReducer} from "./filterReducer";
import {typeReducer} from "./typeReducer";
import {postsReducer} from "./postsReducer";
import {isEditReducer} from "./editReducer";
import {isModalReducer} from "./isModalActiveReducer";

const rootReducer = combineReducers({
    filter: filterReducer,
    type: typeReducer,
    posts: postsReducer,
    edit: isEditReducer,
    modal: isModalReducer
})

export const store = createStore(rootReducer)