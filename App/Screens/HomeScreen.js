import React from 'react';
import {View,AsyncStorage} from 'react-native';
import {Container,Header,Title,Content,Button,Left,Right,Body,Icon,Text} from 'native-base';
import { navigate } from '../Services/Navigator';
import { createStackNavigator, createAppContainer } from 'react-navigation';
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
            <Button transparent >
              <Icon name='add' />
            </Button>
          </Left>
          <Body>
          <Title>Kesfet</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
            This is Content Section
       
         
          </Text>
          <Button transparent onPress={this._signOutAsync}>
            <Icon name='add' />
            </Button>
        </Content>
        
      </Container>
      );
    }
  }

