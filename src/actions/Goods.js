import {
    ADD_GOODS,
    DEL_GOODS
} from "../actionTypes";

export function addGoods(good) {
    return {
        type: ADD_COUNT,
        payload: {
            good
        }
    }
}
export function delGoods(id) {
    return {
        type: DEC_COUNT,
        payload: {
            id
        }
    }
}