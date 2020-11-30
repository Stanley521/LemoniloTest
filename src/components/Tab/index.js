import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';

const Square = (props) => {
  return (
    <TouchableOpacity
      style={[styles.square, props.style]}
      onPress={props.onPress}
    >
      <Text style={styles.text}>
        {props.text}
      </Text>
    </TouchableOpacity>
  )
}

export const Tab = (props) => {
  return (
    <View style={styles.container}>
      <Square
        text={props.text1}
        style={props.style1}
        onPress={() => props.onPress(true)}
      />

      <Square
        text={props.text2}
        style={props.style2}
        onPress={() => props.onPress(false)}
      />
    </View>
  )
};

export default Tab;
