import React from 'react';
import {View,Text} from 'react-native';
import {Button} from 'native-base';

export default class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button onPress={()=>this.props.navigation.navigate("Details")}
          >
  <Text>Hello </Text>
          </Button>
        </View>
      );
    }
  }