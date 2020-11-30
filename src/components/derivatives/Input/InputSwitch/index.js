/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  IMPORTS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */

// ----------------------------------------
// PACKAGE IMPORTS
// ----------------------------------------
import React, {Component} from 'react';
import {View, TouchableOpacity, Animated} from 'react-native';

// ----------------------------------------
// LOCAL & CONFIG IMPORTS
// ----------------------------------------
import {Colors, Sizes} from '../../../../constants';
import Styles from './style';

// ----------------------------------------
// COMPONENT IMPORTS
// ----------------------------------------
import {TextS} from '../../../derivatives/Text';

/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class InputSwitch extends Component {
  // ----------------------------------------
  // ----------------------------------------
  // CONSTRUCTOR AND LIFECYCLES
  // ----------------------------------------

  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value ? this.props.value : false,
      position: this.props.value
        ? new Animated.Value(40)
        : new Animated.Value(0),
    };
  }

  // ----------------------------------------

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state != nextState) {
      return true;
    }

    if (this.props != nextProps) {
      if (this.props.value != nextProps.value) {
        this.updateValue(nextProps.value);
      }

      return true;
    }

    return false;
  }

  // ----------------------------------------
  // ----------------------------------------
  // METHODS
  // ----------------------------------------

  onPress() {
    this.updateValue(!this.state.value);
  }

  // ----------------------------------------

  updateValue(value) {
    this.setState({value});

    Animated.timing(this.state.position, {
      toValue: !value ? 0 : 40,
      speed: 3,
      bounciness: 2,
      duration: 300,
      delay: 0,
    }).start();

    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  // ----------------------------------------
  // ----------------------------------------
  // MAIN RENDER
  // ----------------------------------------

  render() {
    return (
      <TouchableOpacity onPress={() => this.onPress()} style={Styles.container}>
        <TextS
          color={Colors.main.baseWhite}
          bold
          style={[Styles.label, {left: this.state.value ? 16 : 36}]}>
          {this.state.value ? this.props.trueLabel : this.props.falseLabel}
        </TextS>

        <Animated.View style={[Styles.circle, {left: this.state.position}]} />
      </TouchableOpacity>
    );
  }

  // ----------------------------------------
}
