import { setIntent } from '../actions/intent';

const intialState = {
    intents: {}
}

export const intentReducer = (state = intialState, action) => {
    switch (action.type) {
        case setIntent: {
            return {
                ...state,
                intents: { [action.payload.key]: action.payload.value }
            }
        }
        default:
            return state
    }
}