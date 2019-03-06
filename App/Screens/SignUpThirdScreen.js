import React from 'react';
import {View,StyleSheet,CheckBox,TouchableOpacity,ImageBackground,Image} from 'react-native';
import {Container,Picker,Header,Form,Title,Content,Button,Left,Right,Body,Icon,Text,DatePicker,Item,Input} from 'native-base';
import { connect } from 'react-redux';
// import {RegisterChanged} from '../Actions'
import LinearGradient from 'react-native-linear-gradient'
import strings from './Localizations'
import ProgressCircle from 'react-native-progress-circle'
import {RegisterChanged,RegisterThirdStepClick} from '../Actions'


 class SignUpThirdScreen extends React.Component {
     
constructor(props){
        super(props);
        this.state = {
          countDown:2
        }
     
      }
      tick() {
          if(this.state.countDown!=0){
            this.setState(prevState => ({
                countDown: prevState.countDown -1
            }));
          }}
     
    progressCircleRender(){
        return(
            <ProgressCircle
            percent={100*this.state.countDown/60}
            radius={50}
            borderWidth={8}
            color="#0A007C"
            shadowColor="#8a80ff"
            bgColor="#e8e6ff"
        >
        
            <Text style={{ fontSize: 25,fontFamily:'Quicksand-Regular' }}>{this.state.countDown}</Text>
        </ProgressCircle>

        );
    }
    confirmAgain(){
        this.setState({countDown:60})

    }

    renderButton(){
        if(this.state.countDown==0){
            return(
                <Button  style={{backgroundColor:'#48009A'}}  onPress={()=> this.confirmAgain()} rounded >
            <Text textStyle={{paddingLeft:'10%'}} style={{fontFamily:'Quicksand-Regular',color:'#fff'}}>
              {strings.sendAgain.toUpperCase()}
            </Text>
            </Button>
                )
        }
        else{
            return(
                <Button disabled  style={{backgroundColor:'#8a80ff'}}  onPress={()=> this.confirmAgain()} rounded >
            <Text textStyle={{paddingLeft:'10%'}} style={{fontFamily:'Quicksand-Regular',color:'#fff'}}>
              {strings.sendAgain.toUpperCase()}
            </Text>
            </Button>
                )
        }
    }
   render(){

      return (
        
<Container>
<LinearGradient colors={['#ff8383','#d3d7ff','#ffbaba','#C5D5FF']} style={{flex:1}} useAngle={true} angle={-45} angleCenter= {{ x: 2, y: 0.5}}>
        <Header style={{backgroundColor:'#560078'}}>
          
          <Body>
          <Title style={{color:'#fff',fontFamily:'Quicksand-Regular'}}>  {strings.phoneConfirm.toUpperCase()}</Title>
          </Body>
        </Header>
        <View style={{flex:.05}}></View>
            <View style={{justifyContent:"center",alignItems:'center',flex:0.3}}>
            <Text style={{fontFamily:'Quicksand-Regular',textAlign:'center',fontSize:18,paddingBottom:'8%',paddingRight:'8%',paddingLeft:'5%'}}>{strings.phoneConfirmMessage}</Text>
            {this.progressCircleRender()}
            </View>
            <View style={{flex:0.4,alignItems:'center',paddingLeft:'10%',paddingRight:'10%',justifyContent:'space-evenly'}}>
            
            <Item style={{ borderColor: '#000000' }}>
              <Input
                placeholderTextColor='#383838'  placeholder={strings.confirmCode} />
                

            </Item>
            <Button  style={{backgroundColor:'#48009A',alignSelf:'center'}} onPress={()=> this.RegisterThirdStepClick()} rounded >
            <Text  style={{fontFamily:'Quicksand-Regular',color:'#fff',paddingLeft:'20%',paddingRight:'20%'}}>
              {strings.phoneConfirmButtonText.toUpperCase()}
            </Text>
            </Button>
            </View>
            <View style={{flex:0.25,alignSelf:'center',paddingTop:'5%'}}>
            {this.renderButton()}
            </View>
           


        </LinearGradient>
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


  const mapStateToProps = ({ RegisterResponse }) => {
    const { phoneIsVerificated} = RegisterResponse;
    return {
        phoneIsVerificated
    };
  };

  export default connect(mapStateToProps, { RegisterChanged,RegisterThirdStepClick})(SignUpThirdScreen)