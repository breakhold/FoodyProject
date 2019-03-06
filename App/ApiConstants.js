export const BASEWEBAPI = 'http://lunchsapi20190122085304.azurewebsites.net/api';
/*
Post Method From Body Parameters
Username
Password  
----
*/
export const SIGN_UP_SERVICE_URL=BASEWEBAPI+'/usercreate';

export const SIGN_UP_EMAIL_CHECK_SERVICE_URL = BASEWEBAPI+'/usercreate/EmailCheck'
export const LOGIN_SERVICE_URL= BASEWEBAPI+'/token';
/*
Result
-----
userId,userName,token,isSucess,message
*/

export const LOGIN_FACEBOOK_SERVICE_URL= BASEWEBAPI+'/user/facebookLogin';
export const WEB_TOKEN = BASEWEBAPI+'/token';

