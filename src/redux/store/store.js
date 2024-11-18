import { createStore } from "redux";
import { reducerTodo } from "../reducer/Reducer";

export const store = createStore(reducerTodo)