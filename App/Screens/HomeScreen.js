import React from 'react';
import {View,AsyncStorage,TouchableOpacity,ScrollView} from 'react-native';
import {Container,Header,Title,Content,Button,Left,Right,Body,Icon,Text} from 'native-base';
import { navigate } from '../Services/Navigator';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import FoodyListItem  from '../Component/FoodyListItem'
import TabItem from '../Component/TabItem'
export default class HomeScreen extends React.Component {
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Login')
  };
  handleClick = () => {
    alert('Button clicked!');
}
    render() {
      return (
        
        <Container>
        <Header>
          <Left>
            <TouchableOpacity onPress={()=>this._signOutAsync()}>
            <Icon name="playlist-add" type="MaterialIcons" />
            </TouchableOpacity>
          </Left>
          <Body>
          </Body>
          <Right >
            <TouchableOpacity>
          <Icon  name="message" type="MaterialIcons" />
          </TouchableOpacity>
          </Right>
        </Header>
        <Content>
        <ScrollView horizontal>
       
       <TabItem />   
       <TabItem/>  
       <TabItem/>  
       
   </ScrollView>
        <ScrollView style={{flex:1,marginTop:5}} >
                <FoodyListItem/>   
                <FoodyListItem/>  
                <FoodyListItem/>  
                 
            </ScrollView>
         
          {/* <Button transparent onPress={this._signOutAsync}>
            <Icon name='add' />
            </Button> */}
        </Content>
        
      </Container>
      );
    }
  }

