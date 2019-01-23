import React from 'react';
import {View,StyleSheet,findNodeHandle} from 'react-native';
import {Container,Item,Input,Header,Title,Content,Button,Left,Right,Thumbnail,  Body,Icon,Text,Image,Form, Row} from 'native-base';
import {connect} from 'react-redux'
import {LoginChanged,LoginMember} from '../Actions';
import Spinner from 'react-native-loading-spinner-overlay';
import LinearGradient from 'react-native-linear-gradient';
// import { BlurView } from 'react-native-blur';
class LoginScreen extends React.Component {
    renderButton()
      {
          
         
      }
      _signIn () {
        const {username, password}=this.props;
        this.props.LoginMember({username,password});
      };
      
    render() {
       console.log(this.props.loading);
      return (
        <Container style={{justifyContent:"center"}}>
        <LinearGradient colors={['blue','red']} style={{flex:1}} useAngle={true} angle={-45} angleCenter= {{ x: 0.5, y: 0.5}}>
        <Content style = {{paddingTop:100,paddingLeft:60,paddingRight:60}}>
        
        <Thumbnail  style={{alignSelf:"center"}} large source={{ uri: 'https://lh5.googleusercontent.com/p/AF1QipP58meJjsw3dokiDtVyZNozyUiuvHIW0W0ak3cU=w319-h160-k-no' }} />

         
      <Form style={{paddingTop:80}}>
          <Item  >
          <Input 
          style={{textAlign:"center",color:'#fff'}}
           value={this.props.username} onChangeText={username1 =>this.props.LoginChanged({ props: 'username', value: username1 })} placeholderTextColor='#fff'  placeholder='Kullanıcı Adı'/>
          

          </Item>
      
          <Item   >    
          <Input 
          style={{textAlign:"center",color:'#fff'}}
          secureTextEntry value={this.props.password} onChangeText={password1=>this.props.LoginChanged({props:'password',value:password1})} placeholderTextColor='#fff' placeholder='Şifre'/>
          </Item>
          </Form>
          <Spinner
                visible={this.props.loading}
                overlayColor={'rgba(0, 0, 0, 0.65)'}
                size="large"
                animation="fade"
              />

            <Form style={{flexDirection:'row',paddingTop:50,justifyContent:"space-between"}}>
            <Button  style={{borderColor:'#fff',paddingLeft:10,paddingRight:10}}  bordered rounded onPress={this._signIn.bind(this)} >
            <Text style={{color:'#fff'}}>
              Giris Yap
            </Text>
            </Button>
            <Button  style={{borderColor:'#fff',paddingLeft:10,paddingRight:10}}  bordered rounded  onPress={()=>this.props.navigation.navigate("SignUp")}>
            <Text style={{color:'#fff'}}>
              Uye Ol
            </Text>
            </Button>
            </Form>
               <Form style={{     
      borderWidth: 0.5,
    borderColor:'white',
      textAlign:'center',
      marginTop:20
  }}/> 
<Form style={{flexDirection:'row',justifyContent:"space-around",paddingLeft:20,paddingRight:20,paddingTop:30} }>
          <Icon color='black'  style={{color:'#fff'}} bordered  name='logo-facebook' />    
          <Icon color='black'  style={{color:'#fff'}} bordered  name='logo-google' />    
</Form>
        </Content>
        </LinearGradient>
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