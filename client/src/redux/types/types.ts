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

export interface ErrorPayload{
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
    payload: ErrorPayload
}

export type DeleteToDoStart={
    type: typeof actionTypes.DELETE_TODO_START;
    payload: string
}

export type DeleteToDoSuccess={
    type: typeof actionTypes.DELETE_TODO_SUCCESS;
    payload : string
}

export type DeleteToDoError={
    type: typeof actionTypes.DELETE_TODO_ERROR;
    payload: ErrorPayload
}

export type AddToDoStart={
    type: typeof actionTypes.ADD_TODO_START;
    payload: string
}

export type AddToDoSuccess={
    type: typeof actionTypes.ADD_TODO_SUCCESS;
}

export type AddToDoError={
    type: typeof actionTypes.ADD_TODO_ERROR;
    payload: ErrorPayload
}

export type ToggleToDoStart={
    type: typeof actionTypes.TOGGLE_TODO_START;
    payload: string
}

export type ToggleToDoSuccess={
    type: typeof actionTypes.TOGGLE_TODO_SUCCESS;
    payload: string
}

export type ToggleToDoError={
    type: typeof actionTypes.TOGGLE_TODO_ERROR;
    payload: ErrorPayload
}

export type ToDoActions = LoadToDoStart | LoadToDoSuccess | LoadToDoError | DeleteToDoStart | DeleteToDoSuccess | DeleteToDoError | AddToDoStart | AddToDoSuccess | AddToDoError | ToggleToDoStart | ToggleToDoSuccess | ToggleToDoError;
