import React from 'react';
import {View,StyleSheet,CheckBox,TouchableOpacity,ImageBackground,Image} from 'react-native';
import {Container,Picker,Header,Form,Title,Content,Button,Left,Right,Body,Icon,Text,DatePicker,Item,Input} from 'native-base';
import { connect } from 'react-redux';
import {RegisterChanged} from '../Actions'
import LinearGradient from 'react-native-linear-gradient'
import strings from './Localizations'
import {RadioForm,RadioButton,RadioButtonInput,RadioButtonLabel} from 'react-native-simple-radio-button'


export default class SignUpSecondScreen extends React.Component {
     
    constructor(props){
        super(props);
        this.state = {
          radioSelected: 1,
          chosenDate: new Date(),
          isDateChosen:false,
          selected: undefined
        }
        this.setDate = this.setDate.bind(this);
      }
      onValueChange(value) {
        this.setState({
          selected: value
        });
      }

    
      setDate(newDate) {
        this.setState({ chosenDate: newDate,isDateChosen:true });
        
      }
    
    
      radioClick(id) {
        this.setState({
          radioSelected: id
        })
      }
      renderDatePicker(){
        

          
          return(
            
            <TouchableOpacity style={{ paddingLeft:'1%'}} >
                
            <DatePicker
                // defaultDate={new Date(2018, 4, 4)}
                minimumDate={new Date(2018, 1, 1)}
                maximumDate={new Date(2018, 12, 31)}
                locale={"tr"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText={this.state.chosenDate ? strings.selectYourBirtDay : this.state.chosenDate.toString().substr(4, 12)}
                textStyle={{ color: "#000" }}
                placeHolderTextStyle={{ color: "#000" }}
                onDateChange={this.setDate}

                
                disabled={false}
                />
               
                </TouchableOpacity>
          );
          
      }
      
    render() {
        const products = [{
            id: 1,
            value: 'kiz'
          },
          {
            id: 2,
            value: 'erkek'
          },
          ];
      return (
        

        <Container style={{ }}>
        <LinearGradient colors={['#ff8383','#d3d7ff','#ffbaba','#C5D5FF']} style={{flex:1}} useAngle={true} angle={-45} angleCenter= {{ x: 2, y: 0.5}}>
        <Image

     source={require('../src/Vector.png')}
     style={{flexDirection:'row',alignSelf:'flex-end'}}
  >
   </Image>
  
        
        
        <View  style={{flex:0.095,alignItems:'center'}}>
            <Text style={{fontFamily:'Quicksand-Regular',fontSize:30}}>
                {strings.signUp.toUpperCase()}
            </Text>
        </View>
        <View style={{flex:0.05}}></View>
        {/* <View style={{flex:0.1}}></View> */}
        {/* <View style={{flex:0.05}}></View> */}
       {/* paddling right %4 artacak her textde   */}
            <View style={{flex:0.6,paddingTop:'1%',paddingLeft:'8%',paddingRight:'8%',justifyContent:'space-between'}}>
        {/* <Item style={{flexDirection:'row'}}> */}

        <Text style={{justifyContent:'flex-start',fontFamily:'Quicksand-Regular',paddingLeft:'4%'}}>{strings.birthDate}</Text>
        {this.renderDatePicker()}
        <Item style={{borderColor:'#000000',marginRight:'4%'}}>
      </Item>

        <Text style={{justifyContent:'flex-start',fontFamily:'Quicksand-Regular',paddingTop:'2%',paddingLeft:'4%'}}>{strings.sex}</Text>
        <View style={{paddingTop:'2%',flexDirection:'row',paddingLeft:'4%',paddingRight:'4%',justifyContent:'space-between'}}>

        <TouchableOpacity key={1} style={{flexDirection:'row',justifyContent:'flex-start'}} onPress={this.radioClick.bind(this, 1)}>
            <View style={{
              height: 24,
              width: 24,
              borderRadius: 12,
              borderWidth: 2,
              borderColor: '#560078',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            
              {
                1== this.state.radioSelected ?
                  <View style={{
                    height: 24,
                    width: 24,
                    borderRadius: 12,
                    backgroundColor: '#560078',
                  }} />
                  : null
              }
               
            </View>
           <Text style={{paddingTop:3,paddingLeft:'1%',fontFamily:'Quicksand-Regular'}}>{strings.woman}</Text>

          </TouchableOpacity>

          <TouchableOpacity key={2} style={{flexDirection:'row',justifyContent:'flex-end'}} onPress={this.radioClick.bind(this, 2)}>
            <View style={{
              height: 24,
              width: 24,
              borderRadius: 12,
              borderWidth: 2,
              borderColor: '#560078',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            
              {
                2== this.state.radioSelected ?
                  <View style={{
                    height: 24,
                    width: 24,
                    borderRadius: 12,
                    backgroundColor: '#560078',
                  }} />
                  : null
              }
               
            </View>
           <Text style={{paddingTop:3,paddingLeft:'1%',fontFamily:'Quicksand-Regular'}}>{strings.man}</Text>
          </TouchableOpacity>
              
      </View>
      <Item style={{borderColor:'#000000',paddingTop:'5%',marginRight:'4%'}}>
      </Item>
     

         
          <Text style={{justifyContent:'flex-start',fontFamily:'Quicksand-Regular',paddingTop:'2%',paddingLeft:'5%'}}>{strings.city}</Text>
              
          <Picker
              mode="dropdown"
              placeholder={strings.city}
              iosIcon={<Icon name="arrow-down" />}

              textStyle={{ color: "#000",fontFamily: 'Quicksand-Regular'}}
              itemStyle={{
                backgroundColor: "#d3d3d3",
                marginLeft: 0,
                paddingLeft: 10
              }}
              itemTextStyle={{ color: '#000' ,fontFamily:'Quicksand-Regular'}}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
            <Item style={{flexDirection:'column' ,borderColor:'#000000',marginRight:'4%'}}>
          </Item>
          <Text style={{fontFamily:'Quicksand-Regular',paddingTop:'2%',paddingLeft:18}}>{strings.phone}</Text>         
          
          <Item style={{borderColor:'#000000',marginRight:'4%'}}  >    
          
          <Input 
          style={{fontFamily:'Quicksand-Regular',paddingLeft:'5%',textAlign:"left",color:'#000'}}
          phone placeholderTextColor='#383838' placeholder='+90 506 680 4389'/>
          </Item>
          
          
          {/* <Input 
          style={{textAlign:'auto',fontFamily:'Quicksand-Regular',paddingLeft:'5%',color:'#48009A'}}
          secureTextEntry  placeholderTextColor='#000000' placeholder='+90 506 680 4389'/> 
           <View
  style={{
    borderBottomColor: 'black',justifyContent:'flex-start',
    borderBottomWidth: 1,marginRight:'4%',marginLeft:'5%'
  }}
/> */}

</View>

         
            {/* <View style={{flex:0.10}}/> */}
            <View style={{flex:0.1}}></View>
            <View style={{flex:0.2,flexDirection:'row',justifyContent:"flex-end",paddingRight:'5%',paddingTop:'2%'}}>
            <Button iconRight style={{backgroundColor:'#48009A'}}  onPress={()=> this.props.navigation.navigate("SignUpSecond")} rounded >
            <Text textStyle={{paddingLeft:'10%'}} style={{fontFamily:'Quicksand-Regular',color:'#fff'}}>
              {strings.finish}
            </Text>
            <Icon name='arrow-round-forward'/>
            </Button></View>
          
           

           

            
               
           
        
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