import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Card, CardItem, Text, Icon, Left, Body, Button, Thumbnail, Right, Content, Item } from 'native-base'


export default class FoodyListItem extends Component {
  render() {
    return (
      <Content style={{ marginTop: '1%', marginLeft: '1%', marginRight: '1%', flex: 1 }}>

        <Thumbnail style={{ position: "absolute" }} source={require('../src/listimage.png')} />

        <Card style={{ flex: 0, marginLeft: '6%', zIndex: -1, borderRadius: 8 }}>

          <CardItem style={{ marginLeft: 25, borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
            <Body >
              {/* <Image source={{uri: 'Image URL'}} style={{height: 200, width: 200, flex: 1}}/> */}
              <View style={{flexDirection:'row'}}>
                  <View>
                <Text>
                  Kullanici Adi

                </Text>
                <View style={{flexDirection:'row'}}>
                <Icon name="time" type="Ionicons" style={{fontSize:15,marginTop:3}} >
                
                </Icon>
                <Text style={{ fontSize: 10,marginTop:5,marginLeft:'2%'}}>
                  24 saat once
                </Text>
              </View>
                </View>
                <Item style={{ borderColor: '#898888' ,flex:1,marginBottom:20,marginLeft:'2%'}} >
                
                <View style={{position:'absolute',flexDirection:'row',marginLeft:'5%',marginRight:'20%'}}>
                <Thumbnail  style={{ width: 40, height: 40, borderRadius: 40/2,marginTop:20}} source={require('../src/listimage.png')} />
                <Thumbnail  style={{ width: 30, height: 30, borderRadius: 30/2,marginTop:25,marginLeft:10}} source={require('../src/listimage.png')} />
               
                </View>

                </Item>
          <TouchableOpacity style={{marginLeft:10,marginTop:5}}>         
                   <Icon name="arrow-dropright" />
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft:10,marginTop:5}}>         
                   <Icon name="more" />
          </TouchableOpacity>
              </View>

            </Body>
            {/* <Right>
              <TouchableOpacity>
                <Icon type="MaterialCommunityIcons" name="dots-horizontal" />
              </TouchableOpacity>
            </Right> */}

          </CardItem>
          <Item style={{ borderColor: '#898888' ,flex:1,marginBottom:20,marginLeft:40}} />

          <View style={{ flexDirection: 'row', marginLeft: '4%', marginRight: '1%' }}>

            <TouchableOpacity>
              <Icon name="pin" />
            </TouchableOpacity>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 18 }}>Konum bilgisi</Text>
              <Text style={{ color: '#474747', fontSize: 15, marginRight: '10%' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac sollicitudin libero, nisl orci viverra


                </Text>

            </View>

          </View>

          <Image style={{ marginLeft: 35, marginRight: 10, height: 200, width: null, flex: 1, borderRadius: 8, marginTop: '2%' }} source={require('../src/yeni.png')} />
          {/* <View style={{flexDirection:'row',marginLeft:35,marginTop:5}}>
              <Icon name="time" type="Ionicons" style={{fontSize:25}} >
                
                </Icon>
                <Text style={{ fontSize: 10,marginTop:7,marginLeft:'2%'}}>
                  07.02.19 | Persembe
                </Text>

                <Icon name="time" type="Ionicons" style={{marginLeft:'20%',fontSize:30,marginRight:'5%'}} >
                
                </Icon>
                <Icon name="time" type="Ionicons" style={{fontSize:30,marginRight:'5%'}} >
                
                </Icon>
                <Icon name="time" type="Ionicons" style={{fontSize:30,marginRight:'25%'}} >
                
                </Icon>


              </View> */}
          <CardItem style={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}>
              <Left>
              <Icon name="time" type="Ionicons" style={{fontSize:25,marginLeft:20}} >
                
                </Icon>
                <Text style={{ fontSize: 10,marginTop:7,marginLeft:'2%',marginBottom:10}}>
                  07.02.19 | Persembe
                </Text>
              </Left>
              <Right>
                <View style={{flexDirection:'row'}}>
              <Icon name="heart-outline" type='MaterialCommunityIcons' style={{fontSize:30,marginRight:'10%'}} >

                </Icon>
                <Icon name="comment-outline" type="MaterialCommunityIcons" style={{fontSize:30,marginRight:'10%'}} >
                
                </Icon>
                <Icon name="share" type="MaterialCommunityIcons" style={{fontSize:30}} >
                
                </Icon>
                </View>
              </Right>
          </CardItem>
        </Card>
      </Content>
    );
  }
}