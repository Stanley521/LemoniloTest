import React, { useEffect, useRef, useState } from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ChatScreen from '../screens/Chat/ChatScreen';
import ProductScreen from '../screens/Product/ProductScreen';

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {
        defaultNavigationOptions: {
            cardStyle: {
                backgroundColor: 'white',
            },
            ...TransitionPresets.SlideFromRightIOS,
        },
    },
});

const Stack = createStackNavigator();

Stack.options = ({ navigation }) => {
    console.log('boom')
    let tabBarVisible = true;
    let routes = navigation.state.routes;
    if (
        routes[routes.length - 1].routeName === 'NoTabBar'
    ) {
        tabBarVisible = false;
    }
    return {
        tabBarVisible,
        tabBarLabel: <Text>Home</Text>,
        tabBarIcon: ({ focused }) => (
            <TabBar
                focused={focused}
                value={I18n.t('common.txt_home')}
                name={Platform.OS === 'ios' ? `ios-home` : 'md-home'}
            />
        ),
        tabBarOnPress: ({ navigation, defaultHandler }) => {
            navigation.dispatch(
                StackActions.reset({
                    index: 0,
                    actions: [
                        navigation.navigate({
                            routeName: 'Home',
                        }),
                    ],
                    key: 'Home',
                }),
            );
        },
    };
};

function HomeStack() {
    return (
        <Stack.Navigator
            headerMode={'screen'}
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Product" component={ProductScreen} />
        </Stack.Navigator>
    );
}
function ChatStack() {
    return (
        <Stack.Navigator
            headerMode={'screen'}
        >
            <Stack.Screen name="Chat" component={ChatScreen} />
        </Stack.Navigator>
    );
}



const Tab = createBottomTabNavigator();
function tabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: (props) => {
                    const { focused, color, size } = props;
                    console.log(props)
                    let iconName;
                    if (route.name === 'HomeTab') {
                        iconName = Platform.OS === 'ios' ? `ios-home` : 'md-home'
                    } else if (route.name === 'ChatTab') {
                        iconName = Platform.OS === 'ios' ? `ios-chatbubbles` : 'md-chatbubbles'
                    }
                    console.log(iconName)
                    console.log(color)
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />
                },
            })}
            tabBarOptions={{
                activeTintColor: '#7cc342',
                inactiveTintColor: 'gray',
                showLabel: false
            }}
            
        >
            <Tab.Screen name="HomeTab" component={HomeStack} />
            <Tab.Screen name="ChatTab" component={ChatStack} options={{ tabBarBadge: 3 }} />
        </Tab.Navigator>
    );
}

export default tabNavigator;
