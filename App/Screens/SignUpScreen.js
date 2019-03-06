import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Header, Form, Title, Content, Button, Left, Right, Body, Text,Icon,Item, Input } from 'native-base';
import { connect } from 'react-redux';
import { RegisterChanged,RegisterFirstStepClick} from '../Actions'
import LinearGradient from 'react-native-linear-gradient'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import DropdownAlert from 'react-native-dropdownalert'
import strings from './Localizations'

class SignUpScreen extends React.Component {

  _registerFirstStep=async()=>{
    let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/ ;

    if(this.props.name=='' || this.props.email=='' || this.props.password=='' || this.props.surname==''){
      this.dropdown.alertWithType('warn', 'Uyarı', "Tüm alanları eksiksiz doldurmanız daha iyi bir uygulama deneyimi kazandırır");
    }
    else if(this.props.password.length<6){
      this.dropdown.alertWithType('warn', 'Uyarı', "Şifre 6 karakterden az olamaz");
    }
    else if(!reg.test(this.props.email)){
      this.dropdown.alertWithType('warn', 'Uyarı', "Lütfen doğru email adresi giriniz");
    }
    else{
    const { name, surname,password,email } = this.props;
   
    this.props.RegisterFirstStepClick({name,surname,password,email});
  }
  }


  renderButton(){
    if(this.props.name!='' && this.props.email!='' && this.props.password!='' && this.props.surname!='' && this.props.password.length>5){
      return (
        <Button iconRight style={{ backgroundColor: '#48009A' }} onPress={this._registerFirstStep.bind(this)} rounded >
        <Text style={{ color: '#fff',fontFamily: 'Quicksand-Regular', }}>
                      {strings.continue}
                    </Text>
                
                  </Button>
      );
    }
    return(
      <Button iconRight style={{ backgroundColor: '#48009A',opacity:0.8}} rounded onPress={this._registerFirstStep.bind(this)}   >
  <Text style={{ color: '#fff',fontFamily: 'Quicksand-Regular', fontSize:12}}>
                {strings.continue}
              </Text>
        
            </Button>
  );

  }



  componentWillMount() {
    //It worked in english for me i forced to work in Turkish please remove under this line

    strings.setLanguage('tr');
  }
  _scrollToInput (reactNode) {
    // Add a 'scroll' ref to your ScrollView
    this.scroll.props.scrollToFocusedInput(reactNode)
  }
  render() {

    return (
      <Container style={{ justifyContent: "center" }}>
        <DropdownAlert ref={ref => this.dropdown = ref}  />
        <LinearGradient colors={['#ff8383', '#d3d7ff', '#ffbaba', '#C5D5FF']} style={{ flex: 1 }} useAngle={true} angle={-45} angleCenter={{ x: 2, y: 0.5 }}>
          <View style={{ flex: 0.1 }}></View>

          <Item style={{ flex: 0.1, justifyContent: 'center',borderBottomColor:'transparent',fontFamily:'Quicksand' }}>
            <Text style={{ fontSize: 30,fontWeight:'500', fontFamily: 'Quicksand-Regular' }}>
              {strings.signUp.toUpperCase()}
            </Text>
          </Item>
          <View style={{ flex: 0.05 }}>
        
          </View>
      
          <KeyboardAwareScrollView style={{  flex: 0.35, paddingTop: '5%', paddingLeft: '8%', paddingRight: '12%' }}>
            <Item style={{ borderColor: '#000000' }} floatingLabel>
       
              <Input     
                style={styles.textInput} value={this.props.name} onChangeText={name1 => this.props.RegisterChanged({ props: 'name', value: name1 })}
                placeholderTextColor='#000000' placeholder={strings.name} />

            </Item>
            <Item style={{ borderColor: '#000000' }}>
              <Input

                style={styles.textInput}
                placeholderTextColor='#000000' value={this.props.surname} onChangeText={surname1 => this.props.RegisterChanged({ props: 'surname', value: surname1 })} placeholder={strings.surname} />


            </Item>
            <Item style={{ borderColor: '#000000' }}>
              <Input
                style={styles.textInput}
                placeholderTextColor='#000000' value={this.props.email} onChangeText={email1 => this.props.RegisterChanged({ props: 'email', value: email1 })} placeholder={strings.email} />


            </Item>

            <Item style={{ borderColor: '#000000' }}  >
              <Input 
                style={styles.textInput}
                secureTextEntry placeholderTextColor='#000000' value={this.props.password} onChangeText={password1 => this.props.RegisterChanged({ props: 'password', value: password1 })} placeholder={strings.password} />
            </Item>
            </KeyboardAwareScrollView>
 
         
          <View style={{ flex: 0.2,paddingTop:'4%' }} >
         
          </View>

          <View style={{ flex: 0.2, flexDirection: 'row', justifyContent: "flex-end", paddingRight: '5%' }}>
          {this.renderButton()}
          </View>
        </LinearGradient>
      </Container>
    );
  }

}

const styles = StyleSheet.create({
  contentStyle: {
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10
  },
  textInput: {
    textAlign: "center",
    color: '#000000',
    fontFamily: 'Quicksand-Regular'
  }
});

const mapStateToProps = ({ RegisterResponse }) => {
  const { name, surname, username, email, password,isEmpty} = RegisterResponse;
  return {
    name,
    surname,
    username, email, password
    ,isEmpty
  };
};


export default connect(mapStateToProps, { RegisterChanged,RegisterFirstStepClick})(SignUpScreen)