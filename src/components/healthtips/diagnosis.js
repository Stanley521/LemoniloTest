import React from 'react';
import Colors from '../constants/Colors';

export default function diagnosistips(props) {
  return (
    <Icon
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
