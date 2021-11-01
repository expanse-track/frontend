import { addExpense, changeExpense, removeExpense, setExpenses } from '../actions/expense';

const intialState = {
    expenses: []
}

export const  expenceReducer = (state = intialState, action) => {
    switch (action.type) {
        case setExpenses: {
            return {
                ...state,
                expenses: action.payload
            }
        }
        case addExpense:
            return {
                ...state,
                expenses: [action.payload, ...state.expenses]
            }
        case removeExpense:
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense._id !== action.payload._id)
            }
        case changeExpense:
            const fliteredExpenses = state.expenses.filter(expense => expense._id !== action.payload._id)
            return {
                ...state,
                expenses: [action.payload, ...fliteredExpenses]

            }

        default:
            return state
    }
}