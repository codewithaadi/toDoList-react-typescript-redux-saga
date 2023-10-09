import { actionTypes } from "../Actiontypes/actiontypes";
import {all,call,put,takeEvery,fork,take} from 'redux-saga/effects';

import { loadToDoSuccess,loadToDoError } from "../actions/todoAction";
import { deleteToDoSuccess,deleteToDoError } from "../actions/todoAction";

import { getAllToDo,deleteToDo } from "../../api/api";

function* onLoadToDoSaga():Generator{
    try {
        const response:any = yield call(getAllToDo);
        yield put(loadToDoSuccess({todos: response.data}))
    } catch (error:any) {
        yield put(loadToDoError({error:error}))
    }
}

function* onDeleteToDoSaga(_id):Generator {
    try {
        const response:any = yield call(deleteToDo, _id);
        if (response.status === 200) {
            console.log(_id);
            yield put(deleteToDoSuccess(_id))
        }
    } catch (error:any) {
        yield put(deleteToDoError({error:error}))
    }
}

function* onLoadToDo() {
    yield takeEvery(actionTypes.LOAD_ALL_TODO_START,onLoadToDoSaga)
}

function* onDeleteToDo(){
    while(true){
        const {payload: _id} = yield take(actionTypes.DELETE_TODO_START);
        yield call(onDeleteToDoSaga,_id);
    }
}

const toDoSagas = [fork(onLoadToDo),fork(onDeleteToDo)];

export default function* rootSaga(){
    yield all([...toDoSagas])
}