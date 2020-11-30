import React, { useEffect, useRef, useState } from 'react';
import { TextInput } from 'react-native-paper';
import I18n from "mHealthBankMobile/src/local/I18n";
import style_vars from 'mHealthBankMobile/src/screens/_styles/vars';

InputNumber.defaultProps = {
  value: null,
  label: I18n.t("register.placeholder_prefix_phone"),
  items: {},
  textAlignPlaceholder: 'left'
}

export function InputNumber(props){
  return(
    <TextInput
      {...props}
      mode={'outlined'}
      style={{
        flex: 1,
        fontSize: style_vars.font_2,
        marginBottom: 5,
        marginTop: 5
      }}
      value={props.value}
      label={props.placeholder}
    />
  )
}
