import {combineReducers} from 'redux';
import LoginReducers from './LoginReducers';
// import RegisterReducers from './RegisterReducers';
// import MemberReducers from './MemberReducers';

export default combineReducers({
    LoginResponse:LoginReducers,
})