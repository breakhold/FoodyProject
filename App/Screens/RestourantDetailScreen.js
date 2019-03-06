import React, { Component } from 'react';
 import {View,Text,Image,TouchableOpacity} from 'react-native'
 import {Icon} from 'native-base'
import { ScrollView } from 'react-native-gesture-handler';
export default class RestourantDetailScreen extends Component {
  render() {
    return (
      <ScrollView>

    
      <View style={{ flex:1}}  >
      <View style={{borderBottomLeftRadius:80,overflow:'hidden', height:250,width:'100%'}}>
      <Image  style={{ height:'100%',width:'100%'}}source={require('../src/images1.jpg')} />
    
      </View>
      <View style={{position:'absolute',marginLeft:'80%',marginTop:227 }}>
      <TouchableOpacity  style={{shadowColor: '#e16666',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: .9,borderRadius:25,width:50,height:50,backgroundColor:'#fff',alignItems:'center'}}>
    <Icon name="heart" type='MaterialCommunityIcons' style={{fontSize:50,color:'#7f0000'}} />
      </TouchableOpacity>
    

    </View>
    <View style={{marginTop:10,backgroundColor:'#f2f2f2',zIndex:-1,marginLeft:5,marginRight:5,borderRadius:10}}>
    <Text style={{fontSize:20,marginLeft:'20%'}}>
      Pablo, <Text style={{color:'#5a5a5a'}}>Izmir Bornova</Text>
    </Text>
    <View style={{flexDirection:'row',marginLeft:'15%'}}>
    <Icon name="star" type='MaterialCommunityIcons' style={{fontSize:20,color:'#eac117',marginLeft:'5%',marginTop:'2%'}}>
    </Icon>
    <Text style={{color:'#000',marginTop:'2.5%'}}>
      3.5</Text>
      <Icon name="time" type="Ionicons" style={{fontSize:20,color:'#000',marginLeft:'10%',marginTop:'2%'}}>
    </Icon>
    <Text style={{color:'#000',marginTop:'2.5%',marginLeft:'1%'}}>
      9.00 - 19.00</Text>
    </View>
    
    </View>
    <View style={{marginLeft:'5%'}}>
      <Text  style={{fontWeight:"bold",fontSize:20,marginTop:10}}>
        Tanitim
      </Text>
      <Text>and Steamboat Grand Hotels, One Steamboat Place, and most condos proximate to the ski slopes. Ample free parking is available to restaurant patrons in the Torian Plum underground parking garage.
      </Text>
    </View>
    <View style={{marginTop:15,backgroundColor:'#f2f2f2',height:50,borderBottomEndRadius:50,flexDirection:'row'}}>
      <Text style={{fontSize:18,marginTop:10,marginLeft:'10%',flex:.9}}>
        Etkinlik Duzenle 
      </Text>
      <TouchableOpacity style={{backgroundColor:'#40e0d0',marginLeft:'22%',borderBottomEndRadius:50,paddingLeft:'5%'}}>
      <Icon name="add" type="Ionicons" style={{fontSize:50,color:'#000',marginLeft:'15%'}}/>
      </TouchableOpacity>
      
    
    </View>
      </View>
      </ScrollView>
    );
  }
}