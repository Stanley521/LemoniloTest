import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import I18n from "mHealthBankMobile/src/local/I18n";

Picker.defaultProps = {
  value: null,
  label: I18n.t("register.placeholder_prefix_phone"),
  items: {},
  textAlignPlaceholder: 'left',
  outline: false
}

export function Picker(props){
  const containerStyle = !props.outline ? {} : { borderWidth: 0.8, borderRadius: 5, paddingTop: 20, paddingBottom: 20, paddingLeft: 15, borderColor: '#9e9e9e' }

  return(
    <View
      style={[props.containerStyle,containerStyle]}>
      <RNPickerSelect
          {...props}
          itemKey={props.key}
          placeholder={{
            label: props.label,
            value: null
          }}
          value={props.value}
          onValueChange={props.onValueChange}
          items={props.items}
          style={[props.style,{
              flex: 1,
              backgroundColor: 'red',
              textAlign: 'right',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }
          ]}
          textInputProps={{
            textAlign: props.textAlignPlaceholder
          }}
      />
      {props.onError && (
        <Text>error</Text>
      )}
    </View>
  )
}
