import React from 'react';
import { View,Alert, StyleSheet, findNodeHandle,TouchableOpacity,Image } from 'react-native';
import { Container, Label,Item, Input, Header, Title, Content, Button, Left, Right, Thumbnail, Body, Icon, Text, Form, Row } from 'native-base';
import { connect } from 'react-redux'
import { LoginChanged, LoginMember,LoginWithFacebook } from '../Actions';
import Spinner from 'react-native-loading-spinner-overlay';
import LinearGradient from 'react-native-linear-gradient';
import Hr from "react-native-hr-component";
import strings from './Localizations';
import {AccessToken,LoginButton,LoginManager,GraphRequestManager ,GraphRequest} from 'react-native-fbsdk';
import Fonts from '../Utils/Fonts'
import axios from 'axios';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { navigate } from '../Services/Navigator';
import {LOGIN_FACEBOOK_SERVICE_URL} from '../ApiConstants';
// import strings from '../Localizations'
// import Hr from 'react-native-hr'
// import { BlurView } from 'react-native-blur';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isFacebookLogin: false };
  }
  componentWillMount(){
    console.log(AccessToken)
    AccessToken.getCurrentAccessToken().then(
      (data) => {
        if(data) {
 
        }
       }
    )
  }

  
renderInfoText(){
  if(this.props.isTried && this.props.password && this.props.username){
    return(
      <Text style={{fontFamily:'Quicksand-Regular',color:'#000'}}>{strings.infoWrongUsernameAndPassword}</Text>
    );
  }
  

  };
  LoginWithFacebook1(){
    const { username, password } = this.props;

    this.props.LoginWithFacebook({username});
  }

  renderUserPasswordText() {
    if (this.props.isTried && !this.props.password) {

      return (

        <Item  style={styles.inputContainer}  floatingLabel regular >
              <Label style={{bottom:15,color:'#4C2BDC',marginLeft:5,fontSize:14}}>{strings.password}</Label>
          <Input

            autoFocus={true}
            style={styles.inputStyle}
            secureTextEntry value={this.props.password} onChangeText={password1 => this.props.LoginChanged({ props: 'password', value: password1 })}  />
          <Icon style={{ color: '#4C2BDC' }} name="alert" />
        </Item>
      );
    }
    else {

      return (

        <Item  style={styles.inputContainer} floatingLabel regular >
              <Label style={{bottom:15,color:'#4C2BDC',marginLeft:5,fontSize:14}}>{strings.password}</Label>
              
          <Input

            style={styles.inputStyle}
            secureTextEntry value={this.props.password} onChangeText={password1 => this.props.LoginChanged({ props: 'password', value: password1 })}  />

        </Item>
      );
    }
  };
  renderUsernameText() {
    if (this.props.isTried && !this.props.username) {
      return (

        <Item  style={styles.inputContainer} floatingLabel regular >
              <Label style={{bottom:15,color:'#4C2BDC', fontFamily:'Quicksand-Regular', marginLeft:5,fontSize:14}}>{strings.username}</Label>
          <Input
            autoFocus={true}
            style={styles.inputStyle}
            value={this.props.username} onChangeText={username1 => this.props.LoginChanged({ props: 'username', value: username1 })}  />
          <Icon style={{ color: '#4C2BDC'}} name="alert" />
        </Item>
      );
    }
    else {
      return (
        <Item  style={styles.inputContainer} floatingLabel regular >
              <Label style={{bottom:15,color:'#4C2BDC',fontFamily:'Quicksand-Regular',marginLeft:5,fontSize:14}}>{strings.username}</Label>
          <Input

            style={styles.inputStyle}
            value={this.props.username} onChangeText={username1 => this.props.LoginChanged({ props: 'username', value: username1 })}  />

        </Item>
      );
    }
  };

  _signIn() {
    const { username, password } = this.props;
    this.props.LoginMember({ username, password });
  };
_postLogin=async({email,surname,name})=>{
  console.log(email,surname,name)
  this.props.LoginWithFacebook({email,surname,name});
}


  
  handleFacebookLogin () {
    var _this=this;
    let result1=null;
    LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(  
      function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled')
        } else {       
          console.log('Login success with permissions: ' + result.grantedPermissions.toString())
          AccessToken
        .getCurrentAccessToken()
        .then((data) => {
          let accessToken = data.accessToken;

          const responseInfoCallback = (error, result) => {
            result1 = result
            if (error) {
              console.log(error);
              // alert('Error fetching data: ' + error.toString());
            } else {
             
              let email  = result["email"].toString();
              let name=result["first_name"].toString();
              let surname=result["last_name"].toString();
              // let photo=result["picture.type(large)"].toString();
              console.log(name+surname);
               console.log(email)
               console.log(result);
              if(email){            
                  _this._postLogin({email,name,surname});


              }
            }
          }
     
         
          const infoRequest = new GraphRequest('/me',
          {
            accessToken: accessToken,
            parameters: {
              fields: {
                string: 'email,first_name,middle_name,last_name,picture.type(large)',
              }
            }
          }
          , responseInfoCallback);

          // Start the graph request.
          new GraphRequestManager()
            .addRequest(infoRequest)
            .start();
           
        })
        
    }
  },
      function (error) {  
        console.log('Login fail with error: ' + error)
      }

    )
      
  }
  renderSpinner()
  {
    if(this.props.loading){
      return (<Spinner
        visible={true}
        overlayColor={'rgba(0, 0, 0, 0.65)'}
        size="large"
        animation="fade"
      />);
    }
    else{
      return (<Spinner
        visible={false}
        overlayColor={'rgba(0, 0, 0, 0.65)'}
        size="large"
        animation="fade"
      />);
    }
  }
  
  render() {
    return (

      <Container style={{ flex:1}}>
  <Image style={{ width:'100%'}} source={require('../src/LoginScreen/Vector.png')} />

<Image style={{ position:'absolute',marginTop:7.65,  width:'100%'}} source={require('../src/LoginScreen/Vector2.png')} />
<KeyboardAwareScrollView>
<View style={{alignItems:'center'}}>
  <Text  style={{color:'#4C2BDC',marginTop:'4%',fontFamily:'QuickSand',fontWeight:'bold',fontSize:25}}>
    Hosgeldin
  </Text>
  <Text style={{fontSize:16,marginTop:'2%',color:'#4C2BDC',fontFamily:'QuickSand'}}>
    Hemen Giriş Yap!
  </Text>
  </View>
  <View style={{marginTop:'10%'}}>
  </View>


              {this.renderUsernameText()}
              <View style={{marginTop:'5%'}}/>
              {this.renderUserPasswordText()}
              
                {this.renderInfoText()}

              {this.renderSpinner()}
              <View style={{marginTop:'5%'}}>

</View>
              <Button onPress={this._signIn.bind(this)} style={{borderRadius:5,backgroundColor:'#4C2BDC',width:'80%',justifyContent:'center',marginLeft:'10%',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        
        elevation: 9,
        borderWidth:1}}>
              <Text style={{fontFamily:'QuickSand',alignContent:"center"}}>
              {strings.signIn}
              </Text>

            </Button>
      
            <View style={{marginTop:'5%'}}/>

            <View style={{flexDirection:'row',fontSize:14,justifyContent:'center'}} >
<Text style={{fontSize:14,color:'#4C2BDC'}}>
            Hesabiniz yok mu </Text><TouchableOpacity onPress={() => this.props.navigation.navigate("SignUp")}>
              <Text style={{fontWeight:'500',fontSize:14,color:'#4C2BDC'}}>
              {strings.signUp}
              </Text>
            </TouchableOpacity>
</View>

<View style={{marginLeft:'15%',marginRight:'15%',marginTop:5}} >
<Hr lineColor="#c9bff4" width={1} text={strings.or} textStyles={{fontWeight: "bold",
    color: "#4C2BDC",
    fontFamily: 'Quicksand-Regular'}}  />
</View>
<View style={{marginTop:'5%'}}>

</View>

<View style={{alignItems:'center'}}>
<LoginButton onPress={this.handleFacebookLogin.bind(this)} />
</View>
</KeyboardAwareScrollView>

               

      </Container>

    );
  }
}




const styles = StyleSheet.create({
  inputContainer:{
    borderColor:'blue',
    borderRadius:5,
    marginLeft:'7%',
    marginRight:'7%',
    height:'10%'
    ,
    borderWidth:1

  },
  inputStyle:{
    fontFamily: 'Quicksand-Regular', color: '#000' 
  },
  mBackground: {
    backgroundColor: "#FF2F63",
    flex: 1,
    flexDirection: 'column',
  },
  loginButton: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,

  },
  loginText: {
    marginLeft: 20,

  },

  spinner: {
    marginBottom: 250,
  },
  customStylesHere: {
    fontWeight: "600",
    color: "#fff",
    fontFamily: 'Quicksand-Regular'
  }
});
const mapToStateProps = ({ LoginResponse }) => {
  const { username, password, loading, success, isTried } = LoginResponse;
  return {
    username,
    password,
    loading,
    success,
    isTried,
  };
};

export default connect(mapToStateProps, { LoginChanged, LoginMember,LoginWithFacebook })(LoginScreen)