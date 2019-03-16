import {Alert,AsyncStorage} from 'react-native';
import axios from 'axios';
import {LOGIN_CHANGE,LOGIN_WITH_FACEBOOK_SUCCESS,LOGIN_USER,LOGIN_USER_SUCCESS, LOGIN_USER_FAILED, REGISTER_CREATE_FAILED, REGISTER_CREATE_SUCCESS} from './types';
import { navigate } from '../Services/Navigator';
import qs from 'qs';

import {LOGIN_SERVICE_URL,LOGIN_FACEBOOK_SERVICE_URL} from '../ApiConstants';

export const LoginWithFacebook = ({email,name,surname}) => {
  return(dispatch)=>{
    dispatch({
      type: LOGIN_WITH_FACEBOOK_SUCCESS
    });
    if(email){
      axios.post(LOGIN_FACEBOOK_SERVICE_URL,{Email:email,Name:name,Surname:surname}).then((response)=>{
         if(response.data.isSuccess){
           console.log(response.data+ "facebook login basarili")
           AsyncStorage.setItem('Id',response.data.userId.toString());
           AsyncStorage.setItem('token',response.data.token);
           navigate('Home');
         }
         else{
           Alert.alert(response.data.message);
            
      
         }
       }).catch(function(error){
           console.log(response.error);
    
       });
      }
  };
  
  };

export const LoginChanged = ({ props, value }) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_CHANGE,
      payload: { props, value }
    });
    
  };
  };

export const LoginMember=({username,password})=>{
  console.log(username)
  return(dispatch)=>{
    dispatch({
      type:LOGIN_USER
    }); 

    if(username=='' || password=='')
    {
      dispatch({
        type:LOGIN_USER_FAILED
      })
    }
    else{
    axios.post(LOGIN_SERVICE_URL,{Username:username,Password:password}).then((response)=>{
      console.log(response.data.message)
      if(response.data.isSuccess){
        AsyncStorage.setItem('Id',response.data.userId.toString());
        AsyncStorage.setItem('token',response.data.token);
        console.log("login  "+response.data)
        dispatch({
          type:LOGIN_USER_SUCCESS
        });
        navigate('Home');
      }
      else{
        Alert.alert(response.data.message);
        dispatch({
          type:LOGIN_USER_FAILED
        });
      }
    }).catch(function(error){
      dispatch({
        type:LOGIN_USER_FAILED
      });
      console.log(error);

    });
  }


  };
};
