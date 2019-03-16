import React from 'react';
import {View,TouchableOpacity,StyleSheet,Image} from 'react-native';
import {Container,Header,Form,Title,Content,Button,Left,Right,Body,Label,Icon,Text,Item,Input} from 'native-base';
import { connect } from 'react-redux';
import {RegisterChanged} from '../Actions'
import LinearGradient from 'react-native-linear-gradient'
import Hr from "react-native-hr-component";
import {AccessToken,LoginManager,GraphRequestManager ,GraphRequest,LoginButton} from 'react-native-fbsdk';
export default class NewScreen extends React.Component {
    render() {
      return (
        <Container style={{ flex:1}}  >

<Image style={{ width:'100%'}} source={require('../src/LoginScreen/Vector.png')} />

<Image style={{ position:'absolute',marginTop:7.65,  width:'100%'}} source={require('../src/LoginScreen/Vector2.png')} />
 
<Image style={{position:'absolute',marginTop:34.44, width:'100%'}} source={require('../src/LoginScreen/Vector1.png')} />
  <View style={{alignItems:'center'}}>
  <Text  style={{color:'#4C2BDC',marginTop:'4%',fontFamily:'QuickSand',fontWeight:'bold',fontSize:25}}>
    Hosgeldiniz
  </Text>
  <Text style={{fontSize:16,marginTop:'2%',color:'#4C2BDC',fontFamily:'QuickSand'}}>
    Hemen Giris Yapiniz
  </Text>

       


        
  

  
  </View>
  <View style={{marginTop:'10s%'}}></View>
  <Item  style={{borderColor:'blue',borderRadius:5,marginLeft:'5%',marginRight:'5%'
,shadowColor: "#000",
shadowOffset: {
	width: 4,
	height: 8,
},
shadowOpacity: 1.58,
shadowRadius: 16.00,elevation:5,
borderWidth:1
}} floatingLabel regular >
              <Label style={{bottom:15,color:'#4C2BDC',marginLeft:5,fontSize:14}}>Kullanisci adi</Label>
              <Input  />
            </Item>

            <View style={{marginTop:'10%'}}>

            </View>
            <Item  style={{borderColor:'blue',borderRadius:5,marginLeft:'5%',marginRight:'5%'
,shadowColor: "#000",
shadowOffset: {
	width: 4,
	height: 8,
},
shadowOpacity: 1.58,
shadowRadius: 16.00,elevation:5,
borderWidth:1
}} floatingLabel regular >
              <Label style={{bottom:15,color:'#4C2BDC',marginLeft:5,fontSize:14}}>Sifre</Label>
              <Input  />
            </Item>
            <View style={{marginTop:'10%'}}>

            </View>
            <Button  style={{borderRadius:5,backgroundColor:'#4C2BDC',width:'80%',justifyContent:'center',marginLeft:'10%',
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
                Giris Yap
              </Text>
            </Button>
<View style={{marginTop:'5%'}}>

</View>
<View style={{flexDirection:'row',fontSize:14,justifyContent:'center'}} >
<Text style={{fontSize:14,color:'#4C2BDC'}}>
            Hesabiniz yok mu </Text><TouchableOpacity>
              <Text style={{fontWeight:'500',fontSize:14,color:'#4C2BDC'}}>
                Hemen Kayit Ol!
              </Text>
            </TouchableOpacity>
</View>
<View style={{marginLeft:'15%',marginRight:'15%',marginTop:5}} >
<Hr lineColor="#c9bff4" width={1} text='Ya da' textStyles={{fontWeight: "bold",
    color: "#4C2BDC",
    fontFamily: 'Quicksand-Regular'}}  />
</View>
<View style={{marginTop:'5%'}}>

</View>
<View style={{alignItems:'center'}}>
<LoginButton />
</View>



            
           
            
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


