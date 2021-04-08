import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeStack from '../Stacks/HomeStack';
import AccountStack from '../Stacks/AccountStack';
import NotificationStack from '../Stacks/NotificationStack';
import ActivityHistoryStack from '../Stacks/ActivityHistoryStack';
import Documentation from '@src/components/screens/Documentation';

type TabNavigationProps = {};
type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};
const Tab = createBottomTabNavigator();
const {Navigator} = Tab;

let i = 0

const renderTabBarIcon = (routeName: string) => {
  return (props: TabBarIconProps) => {
    const {color} = props;
    console.log("from this:", i++ ,routeName, props);
    // let color = '#000'
    let iconName = 'home';
    switch (routeName) {
      case 'Home':
        iconName = 'home-outline';
        break;
      case 'Favourite':
        iconName = 'heart-outline'; 
        break;
      case 'Notifications':
        iconName = 'chatbubble-ellipses-outline';
        break;
      case 'Account':
        iconName = 'md-person-outline';
        break;
      case 'Documentation':
        iconName = 'ios-square-outline';
        break;
      default:
        break;
    }
    return routeName=='Documentation'?<Ionicons name={'search'} size={24} color={color} />:<Ionicons name={iconName} size={24} color={color} />;
  };
};

const TabNavigation: React.FC<TabNavigationProps> = () => {
  return (
    <Navigator
      initialRouteName="Account"
      screenOptions={(props) => {
        const {
          route: {name: routeName},
        } = props;
        return {
          tabBarIcon: renderTabBarIcon(routeName),
        };
      }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Favourite" component={ActivityHistoryStack} />
      <Tab.Screen name="Documentation" component={Documentation} />
      <Tab.Screen name="Notifications" component={NotificationStack} />
      <Tab.Screen name="Account" component={AccountStack} />
    </Navigator>
  );
};

export default TabNavigation;
