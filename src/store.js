import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import {
    Count
} from './reducers/Count';
import {
    Goods
} from './reducers/Goods'
const rootReducers = combineReducers({
    Count,
    Goods
})
const store = createStore(rootReducers, applyMiddleware(thunk))
store.subscribe(() => {
    console.log('数据改变')
})
export default store