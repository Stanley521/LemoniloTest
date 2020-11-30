import * as React from 'react';
import { Animated, StyleSheet } from 'react-native';
import color from 'color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {TouchableRipple} from 'react-native-paper';
import Colors from '../constants/Colors'

const ANIMATION_DURATION = 100;
const ICON_SIZE = 26

class CheckboxAndroid extends React.Component {
  static displayName = 'Checkbox.Android';

  state = {
    scaleAnim: new Animated.Value(1),
  };

  componentDidUpdate(prevProps) {
    if (prevProps.value === this.props.value) {
      return;
    }

    const checked = this.props.value;

    Animated.sequence([
      Animated.timing(this.state.scaleAnim, {
        toValue: 0.85,
        duration: checked ? ANIMATION_DURATION : 0,
      }),
      Animated.timing(this.state.scaleAnim, {
        toValue: 1,
        duration: checked
          ? ANIMATION_DURATION
          : ANIMATION_DURATION * 1.75,
      }),
    ]).start();
  }

  render() {
    const { value, disabled, onPress, radio, ...rest } = this.props;
    const checked = value;
    const checkedColor = this.props.color || Colors.secondary;
    const uncheckedColor =
      this.props.uncheckedColor ||
      color(Colors.text)
        .alpha(0.30)
        .rgb()
        .string();

    let rippleColor, checkboxColor;

    if (disabled) {
      const disabledColor = color(Colors.text)
        .alpha(0.12)
        .rgb()
        .string();

      rippleColor = color(Colors.text)
        .alpha(0.16)
        .rgb()
        .string();
      checkboxColor = disabledColor;
    } else {
      rippleColor = color(checkedColor)
        .fade(0.32)
        .rgb()
        .string();
      checkboxColor = checked ? checkedColor : uncheckedColor;
    }

    const icon = checked
      ? (radio ? 'radiobox-marked' : 'checkbox-marked')
      : (radio ? 'radiobox-blank' : 'checkbox-blank-outline');

    return (
      <TouchableRipple
        {...rest}
        borderless
        rippleColor={rippleColor}
        onPress={onPress}
        disabled={disabled}
        accessibilityTraits={disabled ? ['button', 'disabled'] : 'button'}
        accessibilityComponentType="button"
        accessibilityRole="button"
        accessibilityStates={disabled ? ['disabled'] : []}
        accessibilityLiveRegion="polite"
        style={styles.container}
      >
        <Animated.View style={{ marginLeft: -4, transform: [{ scale: this.state.scaleAnim }] }}>
          <Icon
            allowFontScaling={false}
            name={icon}
            size={ICON_SIZE}
            color={checkboxColor}
          />
        </Animated.View>
      </TouchableRipple>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // borderRadius: ICON_SIZE / 2,
    width: ICON_SIZE,
    height: ICON_SIZE,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
});

export default CheckboxAndroid;