import { actionTypes } from "../Actiontypes/actiontypes";

import {LoadToDoError,ErrorPayload,LoadToDoStart,LoadToDoSuccessPayload,LoadToDoSuccess} from '../types/types';
import { DeleteToDoSuccess,DeleteToDoStart,DeleteToDoError,DeleteToDoStartPayload } from "../types/types";
import { AddToDoStart,AddToDoSuccess,AddToDoError } from "../types/types";


export const loadToDoStart = ():LoadToDoStart =>({
    type: actionTypes.LOAD_ALL_TODO_START
})

export const loadToDoSuccess = (payload:LoadToDoSuccessPayload) : LoadToDoSuccess =>({
    type: actionTypes.LOAD_ALL_TODO_SUCCESS,
    payload
});

export const loadToDoError = (payload:ErrorPayload) :LoadToDoError=>({
    type: actionTypes.LOAD_ALL_TODO_ERROR,
    payload
});

export const deleteToDoStart = (payload:DeleteToDoStartPayload) : DeleteToDoStart =>({
    type: actionTypes.DELETE_TODO_START,
    payload
})

export const deleteToDoSuccess = (payload:string) : DeleteToDoSuccess =>({
    type: actionTypes.DELETE_TODO_SUCCESS,
    payload
})

export const deleteToDoError = (payload:ErrorPayload) : DeleteToDoError =>({
    type: actionTypes.DELETE_TODO_ERROR,
    payload
})

export const addToDoStart = (payload:string) =>({
    type: actionTypes.ADD_TODO_START,
    payload
})

export const addToDoSuccess = ()=>({
    type: actionTypes.ADD_TODO_SUCCESS,
})

export const addToDoError = (payload:ErrorPayload)=>({
    type: actionTypes.ADD_TODO_ERROR,
    payload
})