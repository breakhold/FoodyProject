import LocalizedStrings from 'react-native-localization';
 
// CommonJS syntax
// let LocalizedStrings  = require ('react-native-localization');
 
let strings = new LocalizedStrings({
 "en-US":{
   signIn:"Sign In",
   signUp:"Sign Up",
   login:"Login",
   email:"Email",
   password:"Password",
   username:"Username",
   or:"Or",
   name:"Name",
   surname:"Surname",
   continue:"Continue",
   infoNullUsername:"Please write your username",
   infoNullPassword:"Please write your password",
   infoWrongUsernameAndPassword:"Your username or password is wrong"

 },
 "en":{
    signIn:"Sign In",
    signUp:"Sign Up",
    email:"Email",
    password:"Password",
    username:"Username",
    or:"Or",
    name:"Name",
    surname:"Surname",
    continue:"Continue",
    infoNullUsername:"Please write your username",
   infoNullPassword:"Please write your password",
   infoWrongUsernameAndPassword:"Your username or password is wrong"


  },
  "tr":{
    signIn:"Giriş Yap",
    signUp:"Üye Ol",
    email:"Email",
    password:"Şifre",
    username:"Kullanıcı Adı",
    or:"Ya da",
    name:"İsim",
    surname:"Soy İsim",
    continue:"Devam Et",
    infoNullUsername:"Lütfen kullanıcı adınızı giriniz",
   infoNullPassword:"Lütfen şifrenizi giriniz",
   infoWrongUsernameAndPassword:"Kullanıcı adınız veya şifreniz yanlış"


  },

});

export default strings