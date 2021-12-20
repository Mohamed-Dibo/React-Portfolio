import { combineReducers, createStore } from "redux";
import {todoReducer} from './todo/todoReducer'
import {counterReducer} from './counter/counterReducer'

const rootStore = combineReducers({
    todoReducer,
    counterReducer
  })

export const store = createStore(rootStore);