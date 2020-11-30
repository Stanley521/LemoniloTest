import React, { useEffect, useRef, useState } from 'react';
import { Text, StyleSheet } from 'react-native'
import I18n from "mHealthBankMobile/src/local/I18n";
import style_vars from 'mHealthBankMobile/src/screens/_styles/vars';

Texty.defaultProps = {
  fontSize: 14,
  lineHeight: 25
}

export function Texty(props){
  return(
    <Text
      {...props}
      style={[
        {
          lineHeight: !props.lineHeight ? 25 : props.lineHeight
        },
        props.style
      ]}>
      {props.children}
    </Text>
  )
}
