import HomeScreen from './Screens/HomeScreen';
import DetailsScreen from './Screens/DetailsScreen';
import {createStackNavigator,createAppContainer} from 'react-navigation';




export const RootStack = createStackNavigator(
    {
      Home: HomeScreen,
      Details: DetailsScreen,
    },
    {
      initialRouteName: 'Home',
    }
  );



