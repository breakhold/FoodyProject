import React from 'react';
import {View} from 'react-native';
import {Container,Header,Title,Content,Button,Left,Right,Body,Icon,Text} from 'native-base';

export default class FoodyScreen extends React.Component {
    
    render() {
        
      return (
        
        <Container>
        <Header>
          <Left>
            <Button transparent onPress={()=>this.props.navigation.goBack()}>
              <Icon name='arrow-dropleft' />
            </Button>
          </Left>
          <Body>
            <Title>Foody Ekle</Title>
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
 