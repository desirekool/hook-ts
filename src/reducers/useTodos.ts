import { globalReducer } from "react-hook-utils";

import { guid } from "../utils";

export const newTodo = (label : string) => ({
  done: false,
  id: guid(),
  label: (label || "").trim()
});
export interface IState {
    done: boolean,
    id: string,
    label: string
}
export const reducer = {
  // Delete a todo by id
  deleteTodo: (state : Array<IState>, id: string) => state.filter(i => i.id !== id),

  // Create a new item
  addTodo: (state: Array<IState>, label: string) => [newTodo(label), ...state],

  // Set the done state of an item
  setDone: (state: Array<IState>, id: string, done: boolean) =>
    state.map(i =>
      i.id === id
        ? {
            ...i,
            done
          }
        : i
    ),

  // Set the label of an item
  setLabel: (state: Array<IState>, id: string, label: string) =>
    state.map(i =>
      i.id === id
        ? {
            ...i,
            label
          }
        : i
    ),

  // Toggle an item done
  toggleDone: (state: Array<IState>, id: string) =>
    state.map(i =>
      i.id === id
        ? {
            ...i,
            done: !i.done
          }
        : i
    )
};

export default globalReducer(
  // Load todos from local storage
  JSON.parse(localStorage.getItem("todos") || "[]"),
  reducer,
  // On state change, persist to local storage
  todos => localStorage.setItem("todos", JSON.stringify(todos))
);
