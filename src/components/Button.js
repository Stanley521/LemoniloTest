import React from 'react';
import { Text, View } from 'react-native';
import style_vars from '../screens/_styles/vars';

export function Button_2(props){
  const {
    name='Button',
    color=style_vars.blue_2,
    fontColor='white',
  } = props;
  const button_name = props.name
  const button_color = props.color
  return(
    <View style={{paddingVertical:10,marginHorizontal:10,marginVertical:10,backgroundColor: color,marginBottom:20,justifyContent:'center',borderRadius:5}}> 
      <View style={{flexDirection:'row',justifyContent:'center'}}>
        <Text style={{fontSize:style_vars.font_2,fontWeight:'bold',color: fontColor}}>
          {name}
        </Text>
      </View>
    </View>
  )
}