import * as React from 'react';
import {
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
} from 'react-native';
//import color from 'color';

const ANDROID_VERSION_LOLLIPOP = 21;
const ANDROID_VERSION_PIE = 28;

class TouchableRipple extends React.Component {
  static defaultProps = {
    borderless: false,
  };

  static supported =
    Platform.OS === 'android' && Platform.Version >= ANDROID_VERSION_LOLLIPOP;

  render() {
    const {
      style,
      background,
      borderless,
      disabled: disabledProp,
      rippleColor,
      underlayColor,
      children,
  //    theme,
      ...rest
    } = this.props;

  //  const { dark, colors } = theme;
    const disabled = disabledProp || !this.props.onPress;
    const calculatedRippleColor = 'white'
  /*    rippleColor ||
      color( 'white')
        .alpha(0.2)
        .rgb()
        .string();*/

    // A workaround for ripple on Android P is to use useForeground + overflow: 'hidden'
    // https://github.com/facebook/react-native/issues/6480
    const useForeground =
      Platform.OS === 'android' &&
      Platform.Version >= ANDROID_VERSION_PIE &&
      borderless;

    if (TouchableRipple.supported) {
      return (
        <TouchableNativeFeedback
          {...rest}
          disabled={disabled}
          useForeground={useForeground}
          background={
            background != null
              ? background
              : TouchableNativeFeedback.Ripple(
                  calculatedRippleColor,
                  borderless
                )
          }
        >
          <View style={[borderless && { overflow: 'hidden' }, style]}>
            {React.Children.only(children)}
          </View>
        </TouchableNativeFeedback>
      );
    }

    return (
      <TouchableHighlight
        {...rest}
        disabled={disabled}
        style={[borderless && { overflow: 'hidden' }, style]}
        underlayColor={
          underlayColor != null
            ? underlayColor : 'white'
          /*  : color(calculatedRippleColor)
                .fade(0.5)
                .rgb()
                .string()*/
        }
      >
        {React.Children.only(children)}
      </TouchableHighlight>
    );
  }
}

export default TouchableRipple;