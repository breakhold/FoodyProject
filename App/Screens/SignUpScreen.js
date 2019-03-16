import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import { Container, Header, Form, Title, Content,Label, Button, Left, Right, Body, Text,Icon,Item, Input } from 'native-base';
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
        <Button iconRight style={{ backgroundColor: '#4C2BDC' ,shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        
        elevation: 9,
        borderWidth:0}} onPress={this._registerFirstStep.bind(this)} rounded >
        <Text style={{ color: '#fff',fontFamily: 'Quicksand-Regular', }}>
                      {strings.continue}
                    </Text>
                
                  </Button>
      );
    }
    return(
      <Button disabled iconRight style={{ backgroundColor: '#a595ed',opacity:0.8,shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      
      elevation: 9,
      borderWidth:0}} rounded onPress={this._registerFirstStep.bind(this)}   >
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
      <Container style={{ flex:1}}>
        {/* <DropdownAlert ref={ref => this.dropdown = ref}  /> */}
        <Image style={{ width:'100%'}} source={require('../src/LoginScreen/Vector.png')} />

         <Image style={{ position:'absolute',marginTop:7.65,  width:'100%'}} source={require('../src/LoginScreen/Vector2.png')} />
 
         <Image style={{position:'absolute',marginTop:34.44, width:'100%'}} source={require('../src/LoginScreen/Vector1.png')} />
          <View style={{marginTop:'10%'}}></View>

          <Item style={{ flex: 0.1, justifyContent: 'center',borderBottomColor:'transparent',fontFamily:'Quicksand' }}>
            <Text style={{ fontSize: 30,fontWeight:'500', fontFamily: 'Quicksand-Regular' ,color:'#4C2BDC'}}>
              {strings.signUp.toUpperCase()}
            </Text>
          </Item>
          {/* <View style={{ flex: 0.05 }}>  */}
        
          {/* </View> */}
      
          <KeyboardAwareScrollView style={{  flex: 0.45, paddingTop: '5%', paddingLeft: '5%', paddingRight: '5%' }}>

<View style={{marginTop:'3%'}}></View>
          <Item  style={{borderColor:'blue',borderRadius:5
,shadowColor: "#000",
shadowOffset: {
	width: 4,
	height: 8,
},  
shadowOpacity: 1.58,
shadowRadius: 16.00,elevation:5,

}} floatingLabel regular >
              <Label style={{bottom:25,color:'#4C2BDC',marginLeft:5,marginTop:15 ,fontSize:14}}>{strings.name}</Label>
              <Input style={{paddingBottom:20   }} onChangeText={name1 => this.props.RegisterChanged({ props: 'name', value: name1 })}  />
</Item>



            {/* <Item style={{ borderColor: '#000000' }} floatingLabel>
       
              <Input     
                style={styles.textInput} value={this.props.name} onChangeText={name1 => this.props.RegisterChanged({ props: 'name', value: name1 })}
                placeholderTextColor='#000000' placeholder={strings.name} />

            </Item> */}
  <View style={{marginTop:'10%'}}></View>
<Item  style={{borderColor:'blue',borderRadius:5
,shadowColor: "#000",
shadowOffset: {
	width: 4,
	height: 8,
},  
shadowOpacity: 1.58,
shadowRadius: 16.00,elevation:5,

}} floatingLabel regular >
              <Label style={{bottom:25,color:'#4C2BDC',marginLeft:5,marginTop:15 ,fontSize:14}}>{strings.surname}</Label>
              <Input style={{paddingBottom:20   }} value={this.props.surname} onChangeText={surname1 => this.props.RegisterChanged({ props: 'surname', value: surname1 })}  />
</Item>
            {/* <Item style={{ borderColor: '#000000' }}>
              <Input

                style={styles.textInput}
                placeholderTextColor='#000000' value={this.props.surname} onChangeText={surname1 => this.props.RegisterChanged({ props: 'surname', value: surname1 })} placeholder={strings.surname} />


            </Item> */}

  <View style={{marginTop:'10%'}}/>

  <Item  style={{borderColor:'blue',borderRadius:5
,shadowColor: "#000",
shadowOffset: {
	width: 4,
	height: 8,
},  
shadowOpacity: 1.58,
shadowRadius: 16.00,elevation:5,

}} floatingLabel regular >
              <Label style={{bottom:25,color:'#4C2BDC',marginLeft:5,marginTop:15 ,fontSize:14}}>{strings.email}</Label>
              <Input style={{paddingBottom:20   }} value={this.props.email} onChangeText={email1 => this.props.RegisterChanged({ props: 'email', value: email1 })} />
</Item>

            {/* <Item style={{ borderColor: '#000000' }}>
              <Input
                style={styles.textInput}
                placeholderTextColor='#000000' value={this.props.email} onChangeText={email1 => this.props.RegisterChanged({ props: 'email', value: email1 })} placeholder={strings.email} />


            </Item> */}

<View style={{marginTop:'10%'}}/>

<Item  style={{borderColor:'blue',borderRadius:5
,shadowColor: "#000",
shadowOffset: {
width: 4,
height: 8,
},  
shadowOpacity: 1.58,
shadowRadius: 16.00,elevation:5,

}} floatingLabel regular >
            <Label style={{bottom:25,color:'#4C2BDC',marginLeft:5,marginTop:15 ,fontSize:14}}>{strings.password}</Label>
            <Input secureTextEntry style={{paddingBottom:20   }} value={this.props.password} onChangeText={password1 => this.props.RegisterChanged({ props: 'password', value: password1 })}/>
</Item>


            {/* <Item style={{ borderColor: '#000000' }}  >
              <Input 
                style={styles.textInput}
                secureTextEntry placeholderTextColor='#000000' value={this.props.password} onChangeText={password1 => this.props.RegisterChanged({ props: 'password', value: password1 })} placeholder={strings.password} />
            </Item> */}
            </KeyboardAwareScrollView>
 
         
          {/* <View style={{ flex: 0.2,paddingTop:'4%' }} > */}
         
          {/* </View> */}

          <View style={{ flex: 0.2, flexDirection: 'row', justifyContent: "flex-end", paddingRight: '5%' }}>
          {this.renderButton()}
          </View>

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