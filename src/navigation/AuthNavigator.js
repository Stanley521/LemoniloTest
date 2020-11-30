import { Platform } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import SigninScreen from '../screens/Authentication/SigninScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {
    defaultNavigationOptions: {
      cardStyle: {
        backgroundColor: 'white',
      },
      ...TransitionPresets.SlideFromRightIOS
    },
  },
});

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Text>Auth</Text>
      <Stack.Screen name="Signin" component={SigninScreen} />
    </Stack.Navigator>
  );
}
export default AuthStack;
