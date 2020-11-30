/* eslint-disable react-native/no-inline-styles */
import React, { createRef, forwardRef } from 'react';
import { ActivityIndicator, StatusBar, View, Platform, Alert, Text } from 'react-native';
import { createSwitchNavigator } from '@react-navigation/compat';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthStack from './AuthNavigator';
import MainTabNavigator from './MainTabNavigator';
import style_vars from '../styles/vars';

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    // const userToken = await AsyncStorage.getItem('token');
    // if (userToken)
    //   setHeader('Authorization', `Bearer ${userToken}`)
    const userToken = 'Stanley'
    console.log(userToken)
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'Main' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading</Text>
        <ActivityIndicator size={'large'} color={style_vars.blue_1} />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

// const Stack = createStackNavigator();
// function RootStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Main" component={MainTabNavigator} />
//     </Stack.Navigator>
//   );
// }
const options = {
  headerShown: false,
}
const TopStack = createStackNavigator();
const TopLevelNavigator = React.forwardRef((props, ref) => (
  <NavigationContainer ref={ref}>
    <TopStack.Navigator>
      <TopStack.Screen name="Main" component={MainTabNavigator} options={options}/>
      <TopStack.Screen name="AuthLoading" component={AuthLoadingScreen} options={options}/>
      <TopStack.Screen name="Auth" component={AuthStack} options={options}/>
    </TopStack.Navigator>
  </NavigationContainer>
));

export default TopLevelNavigator
