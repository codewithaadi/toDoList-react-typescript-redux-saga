import { actionTypes } from "../Actiontypes/actiontypes";
import { ToDoActions,ToDoState } from "../types/types";

const initialState : ToDoState = {
    isloading : false,
    todos : [],
    error : null,
}

const toDoReducer = (state = initialState,action:ToDoActions)=>{
    switch(action.type){
        case actionTypes.LOAD_ALL_TODO_START:
            return {
                ...state,
                isloading: true,
            };
        case actionTypes.LOAD_ALL_TODO_SUCCESS:
            return{
                ...state,
                isloading: false,
                todos: action.payload.todos,
                error: null
            };
        case actionTypes.LOAD_ALL_TODO_ERROR:
            return{
                ...state,
                isloading:false,
                error: action.payload.error
            }
        case actionTypes.DELETE_TODO_START:
            return{
                ...state,
                isloading: true,
            }
        case actionTypes.DELETE_TODO_SUCCESS:
            return{
                ...state,
                isloading:false,
                todos: state.todos.filter((todo)=> todo._id !== action.payload) 
            }
        case actionTypes.DELETE_TODO_ERROR:
            return{
                ...state,
                isloading:false,
                error: action.payload.error
            }
        default:
            return{
                ...state
            };
    }
}

export default toDoReducer;