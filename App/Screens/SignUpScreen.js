import React from 'react';
import {View,StyleSheet} from 'react-native';
import {Container,Header,Form,Title,Content,Button,Left,Right,Body,Icon,Text,Item,Input} from 'native-base';
import { connect } from 'react-redux';
import {RegisterChanged} from '../Actions'
import LinearGradient from 'react-native-linear-gradient'
class SignUpScreen extends React.Component {
    render() {
      return (
        <Container style={{justifyContent:"center"}}>
        <LinearGradient colors={['#ff8383','#d3d7ff','#ffbaba','#C5D5FF']} style={{flex:1}} useAngle={true} angle={-45} angleCenter= {{ x: 2, y: 0.5}}>
        <Content style = {{paddingTop:100,paddingLeft:60,paddingRight:60}}>
        
        
         
      <Form style={{paddingTop:30,alignItems:"center"}}>
        <Item>
            <Text style={{fontSize:30}}>
                UYE OL
            </Text>
        </Item>
        <Item style={{paddingTop:40,borderColor:'#000000'}}>
          <Input 
          style={{textAlign:"center",color:'#000000'}}
            placeholderTextColor='#000000'  placeholder='Isim'/>
        
          </Item>
          <Item style={{paddingTop:20,borderColor:'#000000'}}>
          <Input 
          style={{textAlign:"center",color:'#000000'}}
            placeholderTextColor='#000000'  placeholder='Soyisim'/>
        
          </Item>
          <Item style={{paddingTop:20,borderColor:'#000000'}}>
          <Input 
          style={{textAlign:"center",color:'#000000'}}
            placeholderTextColor='#000000'  placeholder='Email'/>
        
          </Item>
        
          <Item style={{paddingTop:20,borderColor:'#000000'}}  >    
          <Input 
          style={{textAlign:"center",color:'#48009A'}}
          secureTextEntry  placeholderTextColor='#000000' placeholder='Şifre'/>
          </Item>
          <Item style={{paddingTop:60}}>
          <Button iconRight style={{backgroundColor:'#48009A',paddingRight:5,paddingLeft:5}}   rounded >
            <Text style={{color:'#fff'}}>
              Devam Et
            </Text>
            <Icon name='arrow-round-forward'/>
            </Button>
            </Item>
          </Form>
          

            
               

        </Content>
        </LinearGradient>
      </Container>
      );
    }
  }

  const styles = StyleSheet.create({
   contentStyle: {
       paddingTop:30,
       paddingLeft:10,
       paddingRight:10
   },
   
  });

  const mapStateToProps = ({RegisterResponse}) =>{
      const {name,surname,username,email,password}= RegisterResponse;
      return{
        name,
          surname,
          username,email,password
      };
  };


  export default connect(mapStateToProps,{RegisterChanged})(SignUpScreen)