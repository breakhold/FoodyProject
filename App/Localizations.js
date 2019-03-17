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
   name:'Name',
   surName:'Surname',
   continue:'Devam Et'

 },
 "en":{
    signIn:"Sign In",
    signUp:"Sign Up",
    email:"Email",
    password:"Password",
    username:"Username",
    or:"Or",
    name:'Name',
    surName:'Surname',
    continue:'Devam Et'
  },
  "tr":{
    signIn:"Giriş Yap",
    signUp:"Üye Ol",
    email:"Email",
    password:"Şifre",
    username:"Kullanıcı Adı",
    or:"Ya da",
    name:'Adınız',
    surName:'Soyadınız',
    continue:'Devam Et'
  },

});

export default strings