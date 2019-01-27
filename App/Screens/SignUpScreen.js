import React from 'react';
import {View,StyleSheet,Image} from 'react-native';
import {Container,Header,Form,Title,Content,Button,Left,Right,Body,Icon,Text,Item,Input} from 'native-base';
import { connect } from 'react-redux';
import {RegisterChanged} from '../Actions'
import LinearGradient from 'react-native-linear-gradient'
import strings from './Localizations'
class SignUpScreen extends React.Component {
    render() {
      return (
        <Container style={{justifyContent:"center"}}>
        <LinearGradient colors={['#ff8383','#d3d7ff','#ffbaba','#C5D5FF']} style={{flex:1}} useAngle={true} angle={-45} angleCenter= {{ x: 2, y: 0.5}}>
        <Image

     source={require('../src/Vector.png')}
     style={{flexDirection:'row',alignSelf:'flex-end'}}
  >
   </Image>
        {/* <View style={{flex:0.1}}></View> */}
        
        <Item  style={{flex:0.1,justifyContent:'center'}}>
            <Text style={{fontFamily:'Quicksand-Regular',fontSize:30}}>
                {strings.signUp.toUpperCase()}
            </Text>
        </Item>
        <View style={{flex:0.05}}></View>
            <View style={{alignItems:"center",flex:0.45,paddingTop:'5%',paddingLeft:'8%',paddingRight:'12%',justifyContent:'space-between'}}>
        <Item style={{borderColor:'#000000'}}>
          <Input 
          style={{fontFamily:'Quicksand-Regular',textAlign:"center",color:'#000000'}}
            placeholderTextColor='#000000'  placeholder={strings.name}/>
        
        </Item>
          <Item style={{borderColor:'#000000'}}>
          <Input 
          style={{fontFamily:'Quicksand-Regular',textAlign:"center",color:'#000000'}}
            placeholderTextColor='#000000'  placeholder={strings.surname}/>
        
          </Item>
          <Item style={{borderColor:'#000000'}}>
          <Input 
          keyboardType="email-address"
          style={{fontFamily:'Quicksand-Regular',textAlign:"center",color:'#000000'}}
            placeholderTextColor='#000000'  placeholder={strings.email}/>
        
          </Item>
        
          <Item style={{borderColor:'#000000'}}  >    
          <Input 
          style={{fontFamily:'Quicksand-Regular',textAlign:"center",color:'#48009A'}}
          secureTextEntry  placeholderTextColor='#000000' placeholder={strings.password}/>
          </Item>
          </View>
         
            {/* <View style={{flex:0.2}}/> */}
            <View style={{flex:0.4,justifyContent:"center"}}>
            <View style={{flexDirection:'row',justifyContent:'flex-end',paddingRight:'4%',paddingTop:'2%'}}>
            <Button iconRight style={{backgroundColor:'#48009A'}}  onPress={()=> this.props.navigation.navigate("SignUpSecond")} rounded >
            <Text style={{fontFamily:'Quicksand-Regular',color:'#fff'}}>
              {strings.continue}
            </Text>
            <Icon name='arrow-round-forward'/>
            </Button>
            </View>
            </View>
          
           

          

            
               

        
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