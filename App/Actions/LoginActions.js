import {Alert,AsyncStorage} from 'react-native';
import axios from 'axios';
import {LOGIN_CHANGE,LOGIN_USER,LOGIN_USER_SUCCESS, LOGIN_USER_FAILED, REGISTER_CREATE_FAILED, REGISTER_CREATE_SUCCESS} from './types';
import { navigate } from '../Services/Navigator';
import qs from 'qs';
import {LOGIN_SERVICE_URL} from '../ApiConstants';

export const LoginChanged = ({ props, value }) => {
  
  return (dispatch) => {
    dispatch({
      type: LOGIN_CHANGE,
      payload: { props, value }
    });
    

  };
  };

export const LoginMember=({username,password})=>{
  
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
    axios.post(LOGIN_SERVICE_URL,{userName:username,Password:password}).then((response)=>{
      console.log(response.data);
      if(response.data.isSuccess){
        AsyncStorage.setItem('Id',response.data.userId.toString());
        AsyncStorage.setItem('token',response.data.token);
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
      setTimeout(() => {
        Alert.alert('Oops!', 'Böyle Bir Kullanıcı Bulunamadı.Lütfen üye olunuz');
      }, 100);

      console.log(error);
    });;
  }


  };
};
