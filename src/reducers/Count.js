import {
    ADD_COUNT,
    DEC_COUNT,
    ASYNC_TEST,
    ASYNC_DATA
} from "../actionTypes";

const initialState = {
    count: 0
}

export function Count(state = initialState, action) {
    const count = state.count
    switch (action.type) {
        case ADD_COUNT:
            return {
                count: count + 1
            }
        case DEC_COUNT:
            return {
                count: count - 1
            }
        case ASYNC_DATA:
            return{
                count:action.count
            }
            break;
        default:
            return state

    }
}