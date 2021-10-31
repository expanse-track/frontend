import { addAccount, changeAccount, removeAccount, setAccounts } from '../actions/account';

const intialState = {
    accounts: []
}

export const accountReducer = (state = intialState, action) => {
    switch (action.type) {
        case setAccounts: {
            return {
                ...state,
                accounts: action.payload
            }
        }
        case addAccount:
            return {
                ...state,
                accounts: [action.payload, ...state.accounts]
            }
        case removeAccount:
            return {
                ...state,
                accounts: state.accounts.filter(account => account._id !== action.payload._id)
            }
        case changeAccount:
            const fliteredAccounts = state.accounts.filter(account => account._id !== action.payload._id)
            return {
                ...state,
                accounts: [action.payload, ...fliteredAccounts]

            }

        default:
            return state
    }
}