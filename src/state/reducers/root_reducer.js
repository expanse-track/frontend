import { combineReducers } from 'redux';
import { todoReducer } from './todo_reducer';
import { accountReducer } from './accountReducer';
import { intentReducer } from './intentReducer';


export const rootReducer = combineReducers({
    todo: todoReducer,
    account: accountReducer,
    intent: intentReducer
});