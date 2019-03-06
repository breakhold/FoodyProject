import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Button } from 'native-base';
import {SwitchNavigator} from './App/Router';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {setNavigator} from './App/Services/Navigator';
import reducers from './App/Reducers'
import {SharedElementRenderer} from 'react-native-motion'
 const AppContainer = createAppContainer(SwitchNavigator);

export default class App extends React.Component {
  render() {
      const store  = createStore(reducers,{},applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        
         <AppContainer ref={nav => {setNavigator(nav);}}/>
 

      </Provider>
    )
  }
}
