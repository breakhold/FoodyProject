import {REGISTER_CHANGE,REGISTER_CREATE,REGISTER_CREATE_SUCCESS,REGISTER_CREATE_FAILED,REGISTER_CREATE_FAILED_EMAIL} from '../Actions/types'



const INITIAL_STATE = {
    name:'',
    surname:'',
    username:'',
    email:'',
    password:'',
    
}

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case REGISTER_CHANGE:
        return {...state,[action.payload.props]:action.payload.value};
        default :
        return state
    }
}