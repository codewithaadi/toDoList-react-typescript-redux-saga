export enum actionTypes {
    LOAD_ALL_TODO_START = 'LOAD_ALL_TODO_START',
    LOAD_ALL_TODO_SUCCESS = 'LOAD_ALL_TODO_SUCCESS',
    LOAD_ALL_TODO_ERROR = 'LOAD_ALL_TODO_ERROR',

    DELETE_TODO_START = 'DELETE_TODO_START',
    DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS',
    DELETE_TODO_ERROR = 'DELETE_TODO_ERROR',

    ADD_TODO_START = 'ADD_TODO_START',
    ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS',
    ADD_TODO_ERROR = 'ADD_TODO_ERROR',

    TOGGLE_TODO_START = 'TOGGLE_TODO_START',
    TOGGLE_TODO_SUCCESS = 'TOGGLE_TODO_SUCCESS',
    TOGGLE_TODO_ERROR = 'TOGGLE_TODO_ERROR',

    UPDATE_TODO_START = 'UPDATE_TODO_START',
    UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS',
    UPDATE_TODO_ERROR = 'UPDATE_TODO_ERROR',
}

export const ALL_TODOS = 'All Todos';
export const ACTIVE_TODOS = 'Active Todos';
export const DONE_TODOS = 'Done Todos';
export const TABS_LIST = [ALL_TODOS,ACTIVE_TODOS,DONE_TODOS];