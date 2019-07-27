import {
    ADD_COUNT,
    DEC_COUNT,
    ASYNC_TEST,
    ASYNC_DATA
} from "../actionTypes";

export function addCount() {
    return {
        type: ADD_COUNT
    }
}
export function decCount() {
    return {
        type: DEC_COUNT
    }
}
export function asyncTest() {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(asyncData())
        }, 2000);
    }
}
export function asyncData(data) {
    return {
        type: ASYNC_DATA,
        count: -100
    }
}