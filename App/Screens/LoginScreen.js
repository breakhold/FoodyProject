import React from 'react';
import {View,StyleSheet,findNodeHandle} from 'react-native';
import {Container,Item,Input,Header,Title,Content,Button,Left,Right,Thumbnail,  Body,Icon,Text,Image} from 'native-base';
import {connect} from 'react-redux'
import {LoginChanged,LoginMember} from '../Actions/LoginActions';
import Spinner from 'react-native-loading-spinner-overlay';
// import { BlurView } from 'react-native-blur';
class LoginScreen extends React.Component {
    
    
    renderButton()
      {
          
         
      }
      _signIn () {
        const {username, password}=this.props;
        console.log(username+password);
        this.props.LoginMember({username,password});
      };
      
    render() {
        console.log(this.props.loading)
      return (
        
        <Container style={{justifyContent:"center",paddingTop:100}}>

        <Content>
        
        <Thumbnail  style={{marginLeft:130,marginBottom:10}} large source={{ uri: 'https://lh5.googleusercontent.com/p/AF1QipP58meJjsw3dokiDtVyZNozyUiuvHIW0W0ak3cU=w319-h160-k-no' }} />

        
          <Text style={styles.loginText}>
              Kullanici Adi
          </Text>
          <Item rounded style={styles.loginInput} >
          <Input  value={this.props.username} onChangeText={username1 =>this.props.LoginChanged({ props: 'username', value: username1 })} placeholderTextColor='#fff'  placeholder='Kullanıcı Adı'/>
        
          </Item>
          <Text style={styles.loginText}>
              Sifre
          </Text>
                
          <Item rounded style={styles.loginInput} >    
          <Input secureTextEntry value={this.props.password} onChangeText={password1=>this.props.LoginChanged({props:'password',value:password1})} placeholderTextColor='#fff' placeholder='Şifre'/>
          </Item>
          <Spinner
                visible={this.props.loading}
                overlayColor={'rgba(0, 0, 0, 0.65)'}
                size="large"
                animation="fade"
              />
           <Button full iconLeft rounded style={styles.loginButton} onPress={this._signIn.bind(this)}  >
          <Icon style={{color:'white'}} name='arrow-forward' /> 
          <Text style={{color:'white'}}>GİRİŞ YAP</Text>
          </Button>
          <Button full iconLeft rounded style={styles.loginButton}  >
          <Icon style={{color:'white'}} name='arrow-forward' /> 
          <Text style={{color:'white'}}>FACEBOOKLA BAGLAN</Text>
          </Button>
          <Button full iconLeft rounded style={styles.loginButton} >
          <Icon style={{color:'white'}} name='arrow-forward' /> 
          <Text style={{color:'white'}}>GOOGLELA BAGLAN</Text>
          </Button>
          <Button full iconLeft rounded style={styles.loginButton} onPress={()=>this.props.navigation.navigate("SignUp")} >
          <Icon style={{color:'white'}} name='arrow-forward' /> 
          <Text style={{color:'white'}}>UYE OL</Text>

          </Button>
        </Content>
        
      </Container>
      );
    }
  }



  const styles = StyleSheet.create({
    mBackground:{
        backgroundColor:"#FF2F63",
        flex: 1,
        flexDirection: 'column',
    },
    loginButton:{
        marginTop:20,
        marginLeft:20,
        marginRight:20,
    },
    loginText:{
        marginLeft:20,

    },
    loginInput :{
        marginLeft:20,
        marginRight:20
    },
    spinner:{
        marginBottom:250,  
    }
  });
  const mapToStateProps=({LoginResponse})=>{
    const{username,password,loading,success}=LoginResponse;
    return {
    username,
    password,
    loading,
    success
        
    };
  };

export default connect(mapToStateProps,{LoginChanged,LoginMember})(LoginScreen)