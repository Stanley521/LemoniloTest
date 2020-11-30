import React, { useState, useEffect } from 'react';
import { Button, Alert, Picker, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import styles_main from '../screens/_styles/main';
import style_vars from '../screens/_styles/vars';

export default function RadioButton(props) {
  const {
    selected,
    value,
    onClick,
    text="",
    textStyle = {},
    color = '#FC4F6E',
    style={},
    additionalText="",
    styleAdditionalText={},
  } = props;

  return (
    <TouchableOpacity style={[{flexDirection:'row', alignItems: 'flex-start'}, style]}
      onPress={() => {
        onClick()
      }}
    >
      <View style={[{
        height: 22,
        width: 22,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center',
      },]}>
        {
          props.selected === props.value ?
            <View style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: color,
              borderColor: style_vars.blue_1,
            }} />
            : null
        }
      </View>
      <Text style={[ { marginLeft: 7, fontSize:14, marginTop:1, color:'#1A1A1A' }, textStyle]}>
        {text}
        <Text style={[{fontSize:12, color:'#1A1A1A80', fontStyle:'italic'}, styleAdditionalText]}>{additionalText}</Text>
      </Text>
    </TouchableOpacity>

  );
}
