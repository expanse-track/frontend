import { combineReducers } from 'redux';
import { todoReducer } from './todo_reducer';
import { accountReducer } from './accountReducer';


export const rootReducer = combineReducers({
    todo: todoReducer,
    account: accountReducer
});