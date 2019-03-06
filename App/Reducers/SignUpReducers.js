import {REGISTER_CHANGE,REGISTER_EVENT_SECOND_EMPTY,USER_SECOND_STEP_STARTED,REGISTER_FIRST_SUCCEED,REGISTER_CREATE,REGISTER_CREATE_SUCCESS,REGISTER_EVENT_EMPTY,REGISTER_CREATE_FAILED_EMAIL} from '../Actions/types'



const INITIAL_STATE = {
    name:'',
    surname:'',
    email:'',
    password:'',
    isEmpty:false,
    sex:'',
    birthDate: '',  
    phoneNumber:'',
    City:'',
    phoneIsVerificated:false,
    spinner:false



}

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case REGISTER_CHANGE:
        return {...state,[action.payload.props]:action.payload.value};
        break;
        case REGISTER_FIRST_SUCCEED:
        return {...state,isEmpty:false};
        break;
        case REGISTER_EVENT_SECOND_EMPTY:
        return{...state,isEmpty:true}
        case USER_SECOND_STEP_STARTED:
        return{...state,spinner:true};
        default :
        return state
    }
}