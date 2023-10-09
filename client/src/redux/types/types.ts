import { iTodo } from "../models/iTodo";
import { actionTypes } from "../Actiontypes/actiontypes";

export interface ToDoState {
    isloading : boolean;
    todos : iTodo[];
    error : string | null;
}

export interface LoadToDoSuccessPayload{
    todos: iTodo[];
}

export interface LoadToDoErrorPayload{
    error: string;
}

export interface DeleteToDoStartPayload{
    _id : string;
}

// export interface DeleteToDoSuccessPayload{
//     _id : string;
// }

export interface DeleteToDoErrorPayload{
    error: string;
}

export type LoadToDoStart = {
    type : typeof actionTypes.LOAD_ALL_TODO_START;
}

export type LoadToDoSuccess ={
    type: typeof actionTypes.LOAD_ALL_TODO_SUCCESS;
    payload: LoadToDoSuccessPayload
}

export type LoadToDoError ={
    type: typeof actionTypes.LOAD_ALL_TODO_ERROR;
    payload: LoadToDoErrorPayload
}

export type DeleteToDoStart={
    type: typeof actionTypes.DELETE_TODO_START;
    payload: DeleteToDoStartPayload
}

export type DeleteToDoSuccess={
    type: typeof actionTypes.DELETE_TODO_SUCCESS;
    payload : string
}

export type DeleteToDoError={
    type: typeof actionTypes.DELETE_TODO_ERROR;
    payload: DeleteToDoErrorPayload
}
export type ToDoActions = LoadToDoStart | LoadToDoSuccess | LoadToDoError | DeleteToDoStart | DeleteToDoSuccess | DeleteToDoError;
