import React from 'react';
import {View} from 'react-native';
import {Container,Header,Title,Content,Button,Left,Right,Body,Icon,Text} from 'native-base';

export default class DetailsScreen extends React.Component {
    render() {
      return (
        
        <Container>
        <Header>
          <Left>
            
          </Left>
          <Body>
            <Title>Detaylar</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
            This is details Section
          </Text>
        </Content>
        
      </Container>
      );
    }
  }

