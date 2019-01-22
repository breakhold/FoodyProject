import React from 'react';
import {View,StyleSheet} from 'react-native';
import {Container,Header,Title,Content,Button,Left,Right,Body,Icon,Text,Item,Input} from 'native-base';

export default class SignUpSecondScreen extends React.Component {
    render() {
      return (
        
        <Container>
        <Header>
          <Left>
            
          </Left>
          <Body>
            <Title>Uye Ol@2</Title>
          </Body>
          <Right >
          
          </Right>
        </Header>
        <Content style={styles.contentStyle}>
        <Text >
              Telefon
          </Text>
          <Item rounded >
          <Input  placeholder='Kullanıcı Adı'/>
        
          </Item>
          <Text >
              SoyIsim
          </Text>
          <Item rounded >
          <Input  placeholder='Kullanıcı Adı'/>
        
          </Item>
          <Text >
              Kullanici Adi
          </Text>
          <Item rounded >
          <Input  placeholder='Kullanıcı Adı'/>
        
          </Item>
          <Text >
              Email
          </Text>
          <Item rounded >
          <Input  placeholder='Kullanıcı Adı'/>
        
          </Item>
          <Text >
              Sifre
          </Text>
          <Item rounded >
          <Input  placeholder='Kullanıcı Adı'/>
        
          </Item>

          <Button full iconLeft rounded style={styles.loginButton} onPress={()=>this.props.navigation.navigate("Home")} >
          <Icon style={{color:'white'}} name='arrow-forward' />    
          <Text>Bitir ve Uygulamaya Gir</Text>
          </Button>
          
        </Content>
        
      </Container>
      );
    }
  }

  const styles = StyleSheet.create({
   contentStyle: {
       paddingTop:30,
       paddingLeft:10,
       paddingRight:10
   },
   
  });