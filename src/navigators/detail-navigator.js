import { TabNavigator } from 'react-navigation';

import DetailScreen from '../components/detail-container/detail-container';
import ReadScreen from '../components/clean-view-container/clean-view-container';
import NotesScreen from '../components/notes-container/notes-container';

export default TabNavigator({
  Detail: {
    screen: DetailScreen,
  },
  Read: {
    screen: ReadScreen,
  },
  Notes: {
    screen: NotesScreen,
  },
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
    style: {
      marginTop: 24
    }
  },
});