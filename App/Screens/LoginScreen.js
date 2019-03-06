import React from 'react';
import { View,Alert, StyleSheet, findNodeHandle,TouchableOpacity } from 'react-native';
import { Container, Item, Input, Header, Title, Content, Button, Left, Right, Thumbnail, Body, Icon, Text, Image, Form, Row } from 'native-base';
import { connect } from 'react-redux'
import { LoginChanged, LoginMember,LoginWithFacebook } from '../Actions';
import Spinner from 'react-native-loading-spinner-overlay';
import LinearGradient from 'react-native-linear-gradient';
import Hr from "react-native-hr-component";
import strings from './Localizations';
import {AccessToken,LoginManager,GraphRequestManager ,GraphRequest} from 'react-native-fbsdk';
import Fonts from '../Utils/Fonts'
import axios from 'axios';

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
      <Text style={{fontFamily:'Quicksand-Regular',color:'#fff'}}>{strings.infoWrongUsernameAndPassword}</Text>
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

        <Item style={{ borderColor: '#fff' }}>
          <Input

            autoFocus={true}
            style={{ fontFamily: 'Quicksand-Regular', paddingLeft: '10%', textAlign: "center", color: '#fff' }}
            secureTextEntry value={this.props.password} onChangeText={password1 => this.props.LoginChanged({ props: 'password', value: password1 })} placeholderTextColor='#fff' placeholder={strings.password} />
          <Icon style={{ color: '#fff' }} name="alert" />
        </Item>
      );
    }
    else {

      return (

        <Item style={{ borderColor: '#fff' }}>
          <Input

            style={{ fontFamily: 'Quicksand-Regular', textAlign: "center", color: '#fff' }}
            secureTextEntry value={this.props.password} onChangeText={password1 => this.props.LoginChanged({ props: 'password', value: password1 })} placeholderTextColor='#fff' placeholder={strings.password} />

        </Item>
      );
    }
  };
  renderUsernameText() {
    if (this.props.isTried && !this.props.username) {
      return (

        <Item >
          <Input
            autoFocus={true}
            style={{ fontFamily: 'Quicksand-Regular', paddingLeft: '10%', textAlign: "center", color: '#fff', }}
            value={this.props.username} onChangeText={username1 => this.props.LoginChanged({ props: 'username', value: username1 })} placeholderTextColor='#fff' placeholder={strings.username} />
          <Icon style={{ color: '#fff' }} name="alert" />
        </Item>
      );
    }
    else {
      return (
        <Item >
          <Input

            style={{ fontFamily: 'Quicksand-Regular', textAlign: "center", color: '#fff', }}
            value={this.props.username} onChangeText={username1 => this.props.LoginChanged({ props: 'username', value: username1 })} placeholderTextColor='#fff' placeholder={strings.username} />

        </Item>
      );
    }
  };

  _signIn() {
    const { username, password } = this.props;
    this.props.LoginMember({ username, password });
  };
_postLogin=async({email,surname,name})=>{
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

      <Container style={{ justifyContent: "center" }}>
        <LinearGradient colors={['blue', 'red']} style={{ flex: 1 }} useAngle={true} angle={-45} angleCenter={{ x: 0.5, y: 0.5 }}>
          <Content style={{ paddingTop: '20%', marginLeft: '10%', marginRight: '10%', flex: 1 }}>
            <Form style={{ flex: 0.1 }}>
              <Thumbnail style={{ alignSelf: "center" }} large source={{ uri: 'https://lh5.googleusercontent.com/p/AF1QipP58meJjsw3dokiDtVyZNozyUiuvHIW0W0ak3cU=w319-h160-k-no' }} />
            </Form>
            <Form style={{ paddingTop: '20%', flex: 0.1 }}>


              {this.renderUsernameText()}
              {this.renderUserPasswordText()}
              <View style={{ alignSelf: 'center', paddingTop: '3%' }}>
                {this.renderInfoText()}
              </View>
              {this.renderSpinner()}
            </Form>
       
            <Form style={{ flexDirection: 'row', paddingTop: '15%', paddingLeft: '2%', paddingRight: '2%', flex: 0.2,justifyContent:'center' }}>
              <Button style={{ borderColor: '#fff' }} bordered rounded onPress={this._signIn.bind(this)} >


                <Text style={{ fontFamily: 'Quicksand-Regular', color: '#fff' }}>
                  {strings.signIn}
                </Text>
              </Button>
              <Button style={{ borderColor: '#fff',marginLeft:'3%' }} bordered rounded onPress={() => this.props.navigation.navigate("SignUp")}>

                <Text style={{ fontFamily: 'Quicksand-Regular', color: '#fff' }}>
                  {strings.signUp}

                </Text>

              </Button>

            </Form>
            <Form style={{ paddingLeft: '5%', paddingRight: '2%', flex: 0.05, paddingTop: 30, paddingBottom: 30 }}>
              <Hr lineColor="#eee" width={1} text={strings.or} textStyles={styles.customStylesHere} />
            </Form>


            <Form style={{ flexDirection: 'row', paddingTop:10,justifyContent: "center",flex:0.3 }}>

            <TouchableOpacity onPress={this.handleFacebookLogin.bind(this)} >
              <Icon color='black' style={{ color: '#fff', paddingRight: '20%' }} bordered name='logo-facebook' />
            </TouchableOpacity >
            <TouchableOpacity onPress={this.LoginWithFacebook1.bind(this)} >

              <Icon color='black' style={{ color: '#fff' }} bordered name='logo-google' />
              </TouchableOpacity >
            </Form>
            {/* <Text>{this.props.Facebookname}</Text> */}
          </Content>
        </LinearGradient>
      </Container>

    );
  }
}




const styles = StyleSheet.create({
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
    fontWeight: "bold",
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