import React from 'react';
import {View,Text} from 'react-native';
import {Button} from 'native-base';

export default class DetailsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>
        This is Detail Screen
    </Text>
</View>
      );
    }
  }