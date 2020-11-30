import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './style';

export default function Subtitle ( props) {
    return (
      <View style={{backgroundColor:'white'}}>
        <Text style={styles.title_text}>
          {props.title}
        </Text>
      </View>
    );
}
