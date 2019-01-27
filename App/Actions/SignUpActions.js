import {REGISTER_CHANGE,REGISTER_CREATE,REGISTER_CREATE_SUCCESS,REGISTER_EVENT_EMPTY,REGISTER_CREATE_FAILED_EMAIL} from './types'
import { navigate } from '../Services/Navigator';


export const RegisterChanged = ({props, value}) =>{
    
    return(dispatch) =>{
        dispatch({
            type:REGISTER_CHANGE,
            payload: {props, value}
        });
    };
};

export const RegisterFirstStepClick=({name,surname,password,email})=>{
    if(name=='' || surname=='' || password=='' || email==''){
        return(dispatch) =>{
        dispatch({
            type:REGISTER_EVENT_EMPTY
        });
    };
    }
    else{
            navigate("SignUpSecond");
    }

    
}