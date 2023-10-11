import { actionTypes } from "../Actiontypes/actiontypes";
import {all,call,put,takeEvery,fork,take, takeLatest} from 'redux-saga/effects';

import { loadToDoSuccess,loadToDoError } from "../actions/todoAction";
import { deleteToDoSuccess,deleteToDoError } from "../actions/todoAction";
import { addToDoSuccess,addToDoError } from "../actions/todoAction";
import { toggleToDoSuccess,toggleToDoError } from "../actions/todoAction";
import { updateToDoSuccess,upadateToDoError } from "../actions/todoAction";

import { getAllToDoApi,deleteToDoApi,createToDoApi, toggleToDoApi,updateToDoApi } from "../../api/api";

function* onLoadToDoSaga():Generator{
    try {
        const response:any = yield call(getAllToDoApi);
        yield put(loadToDoSuccess({todos: response.data}))
    } catch (error:any) {
        yield put(loadToDoError({error:error}))
    }
}

function* onDeleteToDoSaga(payload) {
    const _id = payload.payload;
    try {
      const response = yield call(deleteToDoApi, _id);
      if (response.status === 200) {
        yield put(deleteToDoSuccess(_id));
      }
    } catch (error) {
      yield put(deleteToDoError({ error }));
    }
  }

function* onAddToDoSaga(data):Generator{
    try{
        const response:any = yield call(createToDoApi,data.payload);
        if(response.status === 200){
            yield put(addToDoSuccess())
        }
    }catch(error:any){
        yield put(addToDoError({error:error}))
    }
}

function* onToggleToDoSaga(data):Generator{
    try {
        yield call(toggleToDoApi,data.payload);
        yield put(toggleToDoSuccess(data.payload))
    } catch (error:any) {
        yield put(toggleToDoError({error:error}))
    }
}

function* onUpdateToDoSaga(data):Generator{
    try{
        console.log(data);
        const response:any = yield call(updateToDoApi,data.payload._id,data.payload.content);
        if (response.status === 200) {
            yield put(updateToDoSuccess({_id:data.payload._id,content:data.payload.content}))
        }
    }catch(error:any){
        yield put(upadateToDoError({error:error}))
    }
}

function* onLoadToDo() {
    yield takeEvery(actionTypes.LOAD_ALL_TODO_START,onLoadToDoSaga)
}

function* onDeleteToDo(){
    yield takeEvery(actionTypes.DELETE_TODO_START,onDeleteToDoSaga)
}

function* onAddToDo(){
    yield takeEvery(actionTypes.ADD_TODO_START,onAddToDoSaga)
}

function* onToggleToDo(){
    yield takeLatest(actionTypes.TOGGLE_TODO_START,onToggleToDoSaga);
}

function* onUpdateToDo(){
    yield takeLatest(actionTypes.UPDATE_TODO_START,onUpdateToDoSaga);
}

const toDoSagas = [fork(onLoadToDo),fork(onDeleteToDo),fork(onAddToDo),fork(onToggleToDo),fork(onUpdateToDo)];

export default function* rootSaga(){
    yield all([...toDoSagas])
}