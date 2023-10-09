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
    error: any;
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

export type ToDoActions = LoadToDoStart | LoadToDoSuccess | LoadToDoError ;
