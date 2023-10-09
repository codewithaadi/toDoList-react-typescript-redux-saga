import { actionTypes } from "../Actiontypes/actiontypes";
import {all,call,put,takeEvery,fork,take, takeLatest} from 'redux-saga/effects';

import { loadToDoSuccess,loadToDoError } from "../actions/todoAction";
import { deleteToDoSuccess,deleteToDoError } from "../actions/todoAction";
import { addToDoSuccess,addToDoError } from "../actions/todoAction";

import { getAllToDo,deleteToDo,createToDo } from "../../api/api";

function* onLoadToDoSaga():Generator{
    try {
        const response:any = yield call(getAllToDo);
        yield put(loadToDoSuccess({todos: response.data}))
    } catch (error:any) {
        yield put(loadToDoError({error:error}))
    }
}

function* onDeleteToDoSaga(_id):Generator {
    // console.log(_id);
    try {
        const response:any = yield call(deleteToDo, _id);
        if (response.status === 200) {
            yield put(deleteToDoSuccess(_id))
        }
    } catch (error:any) {
        yield put(deleteToDoError({error:error}))
    }
}

function* onAddToDoSaga(data):Generator{
    try{
        const response:any = yield call(createToDo,data.payload);
        if(response.status === 200){
            yield put(addToDoSuccess())
        }
    }catch(error:any){
        yield put(addToDoError({error:error}))
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

function* onAddToDo(){
    yield takeLatest(actionTypes.ADD_TODO_START,onAddToDoSaga)
}

const toDoSagas = [fork(onLoadToDo),fork(onDeleteToDo),fork(onAddToDo)];

export default function* rootSaga(){
    yield all([...toDoSagas])
}