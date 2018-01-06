import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/screens/home/home';
import DetailsScreen from './src/screens/details/details';

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
      headerStyle: {
        marginTop: 24
      }
    },
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      headerTitle: 'Details',
      headerStyle: {
        marginTop: 24
      }
    },
  },
});

export default RootNavigator;