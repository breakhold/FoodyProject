import React from 'react';
import {View} from 'react-native';
import {Container,Header,Title,Content,Button,Left,Right,Body,Icon,Text} from 'native-base';

export default class NotificationScreen extends React.Component {
    render() {
      return (
        
        <Container>
        <Header>
            <Left />
          <Body>
            <Title>Bildirimler</Title>
          </Body>
          <Right />
        </Header>
        <Content style={{paddingTop:20,paddingLeft:20}}>
          <Text>
           Bildirim Ekrani
          </Text>
        </Content>
        
      </Container>
      );
    }
  }
