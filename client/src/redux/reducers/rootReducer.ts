import {combineReducers} from 'redux';
import toDoReducer from './toDoReducer';
import tabReducer from './tabReducer';

const rootReducer = combineReducers({
    data: toDoReducer,
    // currentTab: tabReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;