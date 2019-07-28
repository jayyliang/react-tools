import {
    combineReducers
} from 'redux';
import loginReducer from './login-reducer';

const allReducers = {
    login: loginReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;