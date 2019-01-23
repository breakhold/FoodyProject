import React from 'react';
import {View,StyleSheet} from 'react-native';
import {Container,Header,Title,Content,Button,Left,Right,Body,Icon,Text,Item,Input} from 'native-base';
import { connect } from 'react-redux';
import {RegisterChanged} from '../Actions'
class SignUpScreen extends React.Component {
    render() {
      return (
        <Container>
        <Header>
          <Left>
          </Left>
          <Body>
            <Title>This screen for signup.</Title>

            <Title>Uye Ol</Title>

          </Body>
          <Right >
          
          </Right>
        </Header>
        <Content style={styles.contentStyle}>
        <Text >
              Isim
          </Text>
          <Item rounded >
          <Input value={this.props.name} onChangeText={password1 => this.props.RegisterChanged({props:'name',value:password1})}/>

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

          <Button full iconLeft rounded style={styles.loginButton} onPress={()=>this.props.navigation.navigate("SignUpSecond")} >
          <Icon style={{color:'white'}} name='arrow-forward' />    
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

  const mapStateToProps = ({RegisterResponse}) =>{
      const {name,surname,username,email,password}= RegisterResponse;
      return{
        name,
          surname,
          username,email,password
      };
  };


  export default connect(mapStateToProps,{RegisterChanged})(SignUpScreen)