/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableHighlight, TouchableOpacity, ImageBackground
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AppNavigator from './src/navigation/AppNavigator'
import { isReadyRef, navigationRef } from './src/navigation/NavigationService'
function App(props) {
  React.useEffect(() => {
    return () => {
      isReadyRef.current = false
    };
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('./src/assets/pictures/bg.jpg')} style={styles.image}>
        <Text style={styles.text}>Inside</Text>
      </ImageBackground>
      <StatusBar barStyle="dark-content" />
      <AppNavigator
        ref={navigationRef}
        onReady={() => {
          isReadyRef.current = true;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    position: "absolute"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  }
});

export default App;
