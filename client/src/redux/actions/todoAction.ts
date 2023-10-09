import { actionTypes } from "../Actiontypes/actiontypes";

import {LoadToDoError,LoadToDoErrorPayload,LoadToDoStart,LoadToDoSuccessPayload,LoadToDoSuccess} from '../types/types';

export const loadToDoStart = ():LoadToDoStart =>({
    type: actionTypes.LOAD_ALL_TODO_START
})

export const loadToDoSuccess = (payload:LoadToDoSuccessPayload) : LoadToDoSuccess =>({
    type: actionTypes.LOAD_ALL_TODO_SUCCESS,
    payload
});

export const loadToDoError = (payload:LoadToDoErrorPayload) :LoadToDoError=>({
    type: actionTypes.LOAD_ALL_TODO_ERROR,
    payload
});