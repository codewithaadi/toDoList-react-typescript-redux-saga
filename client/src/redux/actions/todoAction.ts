import { actionTypes } from "../Actiontypes/actiontypes";

import {LoadToDoError,ErrorPayload,LoadToDoStart,LoadToDoSuccessPayload,LoadToDoSuccess, UpdateToDoSuccessPayload,} from '../types/types';
import { DeleteToDoSuccess,DeleteToDoStart,DeleteToDoError } from "../types/types";
import { AddToDoStart,AddToDoSuccess,AddToDoError } from "../types/types";
import { ToggleToDoStart,ToggleToDoSuccess,ToggleToDoError } from "../types/types";
import { UpdateToDoStartPayload,UpdateToDoStart,UpdateToDoSuccess,UpdateToDoError } from "../types/types";


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

export const deleteToDoStart = (payload:string) : DeleteToDoStart =>({
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

export const addToDoStart = (payload:string):AddToDoStart =>({
    type: actionTypes.ADD_TODO_START,
    payload
})

export const addToDoSuccess = ():AddToDoSuccess=>({
    type: actionTypes.ADD_TODO_SUCCESS,
})

export const addToDoError = (payload:ErrorPayload):AddToDoError=>({
    type: actionTypes.ADD_TODO_ERROR,
    payload
})

export const toggleToDoStart = (payload:string):ToggleToDoStart=>({
    type: actionTypes.TOGGLE_TODO_START,
    payload
})

export const toggleToDoSuccess = (payload:string):ToggleToDoSuccess=>({
    type: actionTypes.TOGGLE_TODO_SUCCESS,
    payload
})

export const toggleToDoError = (payload:ErrorPayload):ToggleToDoError=>({
    type: actionTypes.TOGGLE_TODO_ERROR,
    payload
})

export const updateToDoStart = (payload:UpdateToDoStartPayload) : UpdateToDoStart=>({
    type: actionTypes.UPDATE_TODO_START,
    payload
})

export const updateToDoSuccess = (payload:UpdateToDoSuccessPayload) : UpdateToDoSuccess=>({
    type: actionTypes.UPDATE_TODO_SUCCESS,
    payload
})

export const upadateToDoError = (payload:ErrorPayload):UpdateToDoError=>({
    type: actionTypes.UPDATE_TODO_ERROR,
    payload
})