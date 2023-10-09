import { actionTypes } from "../Actiontypes/actiontypes";
import { ToDoActions, ToDoState } from "../types/types";

const initialState: ToDoState = {
  isloading: false,
  todos: [],
  error: null,
};

const toDoReducer = (state = initialState, action: ToDoActions) => {
  switch (action.type) {
    case actionTypes.LOAD_ALL_TODO_START:
    case actionTypes.DELETE_TODO_START:
    case actionTypes.ADD_TODO_START:
    case actionTypes.TOGGLE_TODO_START:
      return {
        ...state,
        isloading: true,
      };
    case actionTypes.LOAD_ALL_TODO_SUCCESS:
      return {
        ...state,
        isloading: false,
        todos: action.payload.todos,
        error: null,
      };
    case actionTypes.DELETE_TODO_SUCCESS:
      return {
        ...state,
        isloading: false,
        todos: state.todos.filter((todo) => todo._id !== action.payload),
      };
    case actionTypes.ADD_TODO_SUCCESS:
      return {
        ...state,
        isloading: false,
      };
    case actionTypes.TOGGLE_TODO_SUCCESS:
      return {
        ...state,
        isloading: false,
        todos: state.todos.map(todo=>(todo._id === action.payload ? {...todo, done: !todo.done} : todo))
      };
    case actionTypes.LOAD_ALL_TODO_ERROR:
    case actionTypes.DELETE_TODO_ERROR:
    case actionTypes.ADD_TODO_ERROR:
    case actionTypes.TOGGLE_TODO_ERROR:
      return {
        ...state,
        isloading: false,
        error: action.payload.error,
      };

    default:
      return {
        ...state,
      };
  }
};

export default toDoReducer;
