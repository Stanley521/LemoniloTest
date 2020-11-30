import React, { useEffect, useRef, useState, useImperativeHandle, forwardRef } from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import I18n from "mHealthBankMobile/src/local/I18n";
import style_vars from 'mHealthBankMobile/src/screens/_styles/vars';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const InputText = forwardRef((props, ref) => {

  const [isEndEditing, setIsEndEditing] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  // const [hasErrors, setHasErrors] = useState(false)
  
  return (
    <KeyboardAvoidingView style={[{ flex: props.unflex ? 0 : 1 }, { ...props.style }]}>
      <TextInput
        ref={ref}
        mode={'outlined'}
        onFocus={handleOnFocused}
        onBlur={handleOnBlur}
        underline="#f5f5f5"
        error={props.hasErrors}
        {...props}
        style={[{
          fontSize: style_vars.font_2,
          marginBottom: 5,
          justifyContent: 'flex-end'
        }, props.style]}
        placeholderTextColor="black"
      />
    </KeyboardAvoidingView>
  )
  
  const handleOnBlur = () => {
    if (!isEndEditing) {
      setIsEndEditing(true)
    }
  }

  const handleOnFocused = () => {
    if (!isFocused) {
      setIsFocused(true)
    }
  }

  useEffect(() => {
    return () => {
      setIsFocused(false)
      setIsEndEditing(false)
    }
  }, [])

})