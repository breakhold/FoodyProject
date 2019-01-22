import React from 'react';
import {LOGIN_CHANGE, LOGIN_USER,LOGIN_USER_FAILED,LOGIN_USER_SUCCESS} from '../Actions/types';

const INITIAL_STATE={
    username:'',
    password:'',
    loading:false,
    success:false
}

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case LOGIN_CHANGE:
        return {...state,[action.payload.props]:action.payload.value};
        case LOGIN_USER:
        return{...state,loading:true};
        case LOGIN_USER_FAILED:
        return{...state, loading:false};
        default:
        return state;
    }
}
