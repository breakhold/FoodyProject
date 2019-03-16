import HomeScreen from './Screens/HomeScreen';
import DetailsScreen from './Screens/DetailsScreen';
import NotificationScreen from './Screens/NotificationScreen';
import AuthLoadingScreen from './Screens/AuthLoadingScreen';
import ProfileScreen from './Screens/ProfileScreen';
import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen';
import SignUpSecondScreen from './Screens/SignUpSecondScreen';
import NewScreen  from './Screens/NewScreen';
import {createStackNavigator,createAppContainer,createBottomTabNavigator,createSwitchNavigator} from 'react-navigation';
import {Icon} from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import FoodyScreen from './Screens/FoodyScreen';
import SignUpThirdScreen from './Screens/SignUpThirdScreen'
import HomeSecond from './Screens/HomeSecond'
import RestourantDetailScreen from './Screens/RestourantDetailScreen'


// export const RootStack = createStackNavigator(
//     {
//       Home: HomeScreen,
//       Details: DetailsScreen,
//     },
//     {
//       initialRouteName: 'Home',
//     }
//   );

const HomeStack = createStackNavigator({

    Home: HomeScreen,
    Foody: FoodyScreen,
    Detail:RestourantDetailScreen
},
{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  })
const LoginStack = createStackNavigator({
  Login: LoginScreen,
  SignUp: SignUpScreen,
  SignUpSecond : SignUpSecondScreen,
  ThirdScreen: SignUpThirdScreen,
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
})

const HomeIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
};

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Icon.Ionicons;
  let iconName;
  if (routeName === 'Home') {
    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    // We want to add badges to home tab icon
    // IconComponent = HomeIconWithBadge;
  } else if (routeName === 'Settings') {
    iconName = `ios-options${focused ? '' : '-outline'}`;
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const TabNavigator = createBottomTabNavigator({

    Home: HomeStack,
    Details: DetailsScreen,
    Notification: NotificationScreen,
    Profile: ProfileScreen,
   
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        // let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home${focused ? '' : '-outline'}`;
          // Sometimes we want to add badges to some icons. 
          // You can check the implementation below.
          // IconComponent = HomeIconWithBadge; 
        } else if (routeName === 'Details') {
          iconName = `account${focused ? '' : '-outline'}`;
        }
        else if (routeName === 'Notification') {
          iconName = `account${focused ? '' : '-outline'}`;
        }
        else if (routeName === 'Profile') {
          iconName = `account${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here!
        return <Icon name={iconName} type="MaterialCommunityIcons" size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      showLabel:false,

      activeTintColor: '#2a363b',
      inactiveTintColor: '#ccc',
      style: {
        backgroundColor: '#fff',
   
      }
    },
  }
  );

export const SwitchNavigator = createSwitchNavigator({
  //  Home:HomeStack,
 SignUp:SignUpScreen,
  AuthLoading:AuthLoadingScreen,
  Login: LoginStack,
  App: TabNavigator
  
})

