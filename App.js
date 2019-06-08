import React from 'react';
import HomeScreen from './Components/HomeScreen'
import DetailsScreen from './Components/DetailScreen'
import { createAppContainer,createStackNavigator } from 'react-navigation';

export const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);
const AppContainer = createAppContainer(RootStack);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}