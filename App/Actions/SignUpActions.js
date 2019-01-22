import {REGISTER_CHANGE,REGISTER_CREATE,REGISTER_CREATE_SUCCESS,REGISTER_CREATE_FAILED,REGISTER_CREATE_FAILED_EMAIL} from './types'

export const RegisterChanged = ({props, value}) =>{
    console.log(value)
    return(dispath) =>{
        dispath({
            type:REGISTER_CHANGE,
            payload: {props, value}
        });
    };
};