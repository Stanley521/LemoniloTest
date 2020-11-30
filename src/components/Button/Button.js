import React from 'react'
import { View, StyleSheet, Platform, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import Colors from '../../constants/Colors'

const Component = (props) => {
  const {
    onPress,
    paddingHorizontal = 0,
    color,
    label,
    disabled,
    loading,
    variant,
    style,
    contentStyle,
    roundness
  } = props

  let backgroundColor
  let textColor
  let borderColor

  switch (variant) {
    case 'primary':
      backgroundColor = Colors.primary
      textColor = Colors.textWhite
      borderColor = Colors.primary
      break
    case 'secondary':
      backgroundColor = Colors.secondary
      textColor = Colors.textWhite
      borderColor = Colors.secondary
      break
    case 'tertiary':
      backgroundColor = Colors.tertiary
      textColor = Colors.textWhite
      borderColor = Colors.tertiary
      break
    case 'white':
      backgroundColor = Colors.white
      textColor = Colors.primary
      borderColor = Colors.white
      break
    case 'primary-ghost':
      backgroundColor = Colors.transparent
      textColor = Colors.primary
      borderColor = Colors.primary
      break
    case 'secondary-ghost':
      backgroundColor = Colors.transparent
      textColor = Colors.secondary
      borderColor = Colors.secondary
      break
    case 'tertiary-ghost':
      backgroundColor = Colors.transparent
      textColor = Colors.tertiary
      borderColor = Colors.tertiary
      break
    case 'white-ghost':
      backgroundColor = Colors.transparent
      textColor = Colors.white
      borderColor = Colors.white
      break
    case 'disabled':
      backgroundColor = Colors.lightGrey
      textColor = Colors.textWhite
      borderColor = Colors.lightGrey
      break
    default:
      backgroundColor = Colors.primary
      textColor = Colors.textWhite
      borderColor = Colors.primary
  }

  if (color) {
    backgroundColor = color === 'secondary' ? Colors.secondary : color
    console.warn('<Button> props color is deprecated. use variant instead');
  }

  if (disabled) {
    backgroundColor = Colors.lightGrey
    textColor = Colors.textWhite
    borderColor = Colors.lightGrey
  }

  return (
    <View style={[s.button, style]}>
      <TouchableOpacity
        onPress={!loading ? onPress : null}
        disabled={disabled}
        style={[s.buttonInner, { borderColor, backgroundColor }, contentStyle || {}]}
      >
        {/* <View
          style={[
            s.content
          ]}
        > */}
          {loading ?
            <ActivityIndicator size="small" color={textColor} style={s.label} />
            :
            <Text
              style={[
                s.label,
                {
                  paddingHorizontal: paddingHorizontal,
                  color: textColor,
                  fontSize: 14,
                  fontWeight:'bold'
                }
              ]}
            >
              {label}
            </Text>
          }
        {/* </View> */}
      </TouchableOpacity>
    </View>
  )
}

const s = StyleSheet.create({
  button: {
    minWidth: 64,
    overflow: 'hidden'
  },
  buttonInner: {
    borderStyle: 'solid',
    borderRadius: 4,
    borderWidth: 1.5,
    justifyContent: 'center'
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    textAlign: 'center',
    marginVertical: 9,
    marginHorizontal: 16,
  },
})

export default Component
