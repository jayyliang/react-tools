const initialState = {
    goods: [{
        price: 100,
        size: 'M',
        id: 0
    }, {
        price: 200,
        size: 'L',
        id: 1
    }]
}
export function Goods(state = initialState, action) {
    return state
}