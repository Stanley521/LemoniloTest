import React from 'react';
import { View } from 'react-native';

export default function RadioButton(props) {
    return (
        <View style={[{
          height: 22,
          width: 22,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: 'lightgrey',
          justifyContent: 'center',
          alignItems: 'center',
        }, props.style]}>
          {
            props.selected === props.value ?
              <View style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: '#000',
                borderWidth: 7,
                borderColor: '#66dfd6'
              }}/>
              : null
          }
        </View>
    );
  }