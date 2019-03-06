import React, { Component } from 'react';
import { Image, View, TouchableOpacity,ImageBackground } from 'react-native';
import { Card, CardItem, Text, Icon, Left, Body, Button, Thumbnail, Right, Content, Item, Container } from 'native-base'
import { SharedElement } from 'react-native-motion';
import { navigate } from '../Services/Navigator';
export default class TabItem extends Component {
  render() {
    return (
      

      
      <Content style={{width: 250,marginTop:'2%',marginLeft:10,flex:1,height:235}}>
    
          
        <ImageBackground  borderRadius={10} style={{width: '100%', height: '90%'}}source={require('../src/restorant.jpg')} >
        <Card transparent style={{ backgroundColor:'transparent'}}>
              <CardItem style={{ backgroundColor: "transparent" ,borderTopLeftRadius: 8, borderTopRightRadius: 8}}>
                  <Left>
                  
                  
                 
                  </Left>
                  
                  
              </CardItem> 
              <CardItem style={{ backgroundColor: "transparent" }}>
                <View style={{width:150,height:150}}>

                </View>
              </CardItem>
              </Card>
       
              </ImageBackground>
              <View borderRadius={10} style={{shadowColor: '#000', backgroundColor:'#fff',
              
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: .9,
    position:"absolute",marginLeft:'10%',marginTop:'45%',width:'80%',height:'50%'}}>
              <View style={{flexDirection:'row',marginLeft:'5%',marginTop:'5%',}}>
              {/* <Thumbnail  style={{ width: 40, height: 40, borderRadius: 40/2}} source={require('../src/listimage.png')} /> */}
              <Text style={{ marginLeft:'5%',fontWeight:'bold'}}>
                Mediterranean Restourant
              </Text>
              
              
              
              </View>
              <Button  transparent  style={{ marginTop:'4%',marginLeft:'3%'}} onPress={() => navigate("Detail")}>
                <Text style={{color:'#7f0000'}}>Etkinlik Duzenle</Text>
              </Button>
            </View>
        
      </Content>
     

     
    );
  }
}