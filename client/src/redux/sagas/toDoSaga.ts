import { actionTypes } from "../Actiontypes/actiontypes";
import {all,call,put,takeEvery,fork} from 'redux-saga/effects';

import { iTodo } from "../models/iTodo";
import { loadToDoSuccess,loadToDoError } from "../actions/todoAction";

import { getAllToDo } from "../../api/api";

function* onLoadToDoSaga():Generator{
    try {
        const response:any = yield call(getAllToDo);
        yield put(loadToDoSuccess({todos: response.data}))
    } catch (error:any) {
        yield put(loadToDoError({error:error}))
    }
}

function* onLoadToDo() {
    yield takeEvery(actionTypes.LOAD_ALL_TODO_START,onLoadToDoSaga)
}

const toDoSagas = [fork(onLoadToDo)];

export default function* rootSaga(){
    yield all([...toDoSagas])
}