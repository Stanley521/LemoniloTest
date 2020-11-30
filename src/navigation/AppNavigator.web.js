/* eslint-disable react-native/no-inline-styles */
import {createBrowserApp} from '@react-navigation/web';
import {createSwitchNavigator} from 'react-navigation';
import {View, ActivityIndicator, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';

import AuthStack from './AuthNavigator';
import MainTabNavigator from './MainTabNavigator_deprecated';

const style_vars = {
  blue_1: 'blue',
};

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'Main' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} color={style_vars.blue_1} />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const switchNavigator = createSwitchNavigator(
  {
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    AuthLoading: AuthLoadingScreen,
    Main: MainTabNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);
switchNavigator.path = '';

export default createBrowserApp(switchNavigator, {history: 'hash'});
