import {REGISTER_CHANGE,REGISTER_CREATE,REGISTER_CREATE_SUCCESS,REGISTER_EVENT_EMPTY,REGISTER_CREATE_FAILED_EMAIL} from '../Actions/types'



const INITIAL_STATE = {
    name:'',
    surname:'',
    username:'',
    email:'',
    password:'',
    isEmpty:false
}

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case REGISTER_CHANGE:
        return {...state,[action.payload.props]:action.payload.value};
        break;
        case REGISTER_EVENT_EMPTY:
        return {...state,isEmpty:true};
        break;
        default :
        return state
    }
}