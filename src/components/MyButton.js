import { Button } from 'native-base';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import style_vars from '../screens/_styles/vars';


export function MyButton(props){
  const {
    name='Button',
    color=style_vars.blue_2,
    fontColor='white',
    onPress=()=>{},
    text='Save'
  } = props;
  
  return(
    <Button full style={{ backgroundColor: style_vars.blue_2, borderRadius: style_vars.font_1 * 1 }} onPress={onPress}>
        <Text style={[s.textStyle, { color: fontColor }]}>{text}</Text>
    </Button>
  )
}

const s = StyleSheet.create({
    textStyle: {
    }
})