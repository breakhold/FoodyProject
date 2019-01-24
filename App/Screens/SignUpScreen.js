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
        <View style={{flex:0.1}}></View>
        
        <Item  style={{flex:0.1,justifyContent:'center'}}>
            <Text style={{fontSize:30}}>
                UYE OL
            </Text>
        </Item>
        <View style={{flex:0.05}}></View>
            <Form style={{alignItems:"center",flex:0.35,paddingTop:'5%',paddingLeft:'8%',paddingRight:'12%',justifyContent:'space-between'}}>
        <Item style={{borderColor:'#000000'}}>
          <Input 
          style={{textAlign:"center",color:'#000000'}}
            placeholderTextColor='#000000'  placeholder='Isim'/>
        
        </Item>
          <Item style={{borderColor:'#000000'}}>
          <Input 
          style={{textAlign:"center",color:'#000000'}}
            placeholderTextColor='#000000'  placeholder='Soyisim'/>
        
          </Item>
          <Item style={{borderColor:'#000000'}}>
          <Input 
          style={{textAlign:"center",color:'#000000'}}
            placeholderTextColor='#000000'  placeholder='Email'/>
        
          </Item>
        
          <Item style={{borderColor:'#000000'}}  >    
          <Input 
          style={{textAlign:"center",color:'#48009A'}}
          secureTextEntry  placeholderTextColor='#000000' placeholder='Şifre'/>
          </Item>
          </Form>
         
            <View style={{flex:0.2}}/>
            <View style={{flex:0.2,flexDirection:'row',justifyContent:"flex-end",paddingRight:'5%'}}><Button iconRight style={{backgroundColor:'#48009A'}}  onPress={()=> this.props.navigation.navigate("New")} rounded >
            <Text style={{color:'#fff'}}>
              Devam Et
            </Text>
            <Icon name='arrow-round-forward'/>
            </Button></View>
          
           

          

            
               

        
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