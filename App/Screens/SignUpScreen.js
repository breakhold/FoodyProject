import React from 'react';
import {View} from 'react-native';
import {Container,Header,Title,Content,Button,Left,Right,Body,Icon,Text} from 'native-base';

export default class SignUpScreen extends React.Component {
    render() {
      return (
        
        <Container>
        <Header>
          <Left>
            <Button transparent onPress={()=>this.props.navigation.navigate("Foody")}>
              <Icon name='add' />
            </Button>
          </Left>
          <Body>
            <Title>This screen for the signup asd ad sa sa asd .</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
            This is Content Section
          </Text>
        </Content>
        
      </Container>
      );
    }
  }

