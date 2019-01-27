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
   infoWrongUsernameAndPassword:"Your username or password is wrong",
   man:"Man",
   woman:"Woman",
   sex:"Sex",
   birthDate:'Birth Date',
   selectYourBirtDay: 'Select Your Birth Date',
   city:'City',
   phone:'Phone number',
   finish:'Finish'


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
   infoWrongUsernameAndPassword:"Your username or password is wrong",
   man:"Man",
   woman:"Woman",
   sex:"Sex",
   birthDate:'Birth Date',
   selectYourBirtDay: 'Select Your Birth Date',
   city:'City',
    phone:'Phone number',
    finish:'Finish'

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
   infoWrongUsernameAndPassword:"Kullanıcı adınız veya şifreniz yanlış",
   man:"Erkek",
   woman:"Kadın",
   sex:"Cinsiyet",
   birthDate:'Doğum Tarihi',
   selectYourBirtDay: 'Doğum tarihinizi seçiniz',
   city:'Şehir',
   phone:'Telefon numarası',
   finish:'Bitir'



  },

});

export default strings