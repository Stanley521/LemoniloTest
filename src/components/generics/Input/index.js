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
import {TextInput as RTextInput} from 'react-native';

// ----------------------------------------
// LOCAL & CONFIG IMPORTS
// ----------------------------------------
import {Colors} from '../../../constants';
import Styles from './style';

/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class Input extends Component {
  // ---------------------------------------------------
  // ---------------------------------------------------
  // CONSTRUCTOR AND LIFE CYCLES
  // ---------------------------------------------------

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props != nextProps) {
      return true;
    }

    return false;
  }

  // ---------------------------------------------------

  componentDidMount() {
    if (this.props.ref) {
      this.props.ref(this.ref);
    }
  }

  // ----------------------------------------
  // ----------------------------------------
  // MAIN METHODS
  // ----------------------------------------

  getComposedStyle() {
    const composedStyle = [Styles.main];
    const newStyle = {};

    if (this.props.color) {
      newStyle.color = this.props.color;
    }

    if (this.props.size) {
      newStyle.fontSize = this.props.size;
    }

    if (this.props.line) {
      newStyle.lineHeight = this.props.line;
    }

    if (this.props.align) {
      newStyle.textAlign = this.props.align;
    }

    if (this.props.bold) {
      newStyle.fontWeight = 'bold';
    }

    if (this.props.light) {
      newStyle.fontWeight = '300';
    }

    composedStyle.push(newStyle);
    composedStyle.push(this.props.style);

    return composedStyle;
  }

  // ---------------------------------------------------
  // ---------------------------------------------------
  // MAIN RENDER
  // ---------------------------------------------------

  render() {
    return (
      <RTextInput
        placeholderTextColor={Colors.main.inactiveGray}
        autoCorrect={false}
        underlineColorAndroid={'transparent'}
        {...this.props}
        style={this.getComposedStyle()}
        autoCapitalize={
          this.props.autoCapitalize
            ? this.props.autoCapitalize
            : this.props.keyboardType != 'email-address'
            ? this.props.autoCapitalize
            : 'none'
        }
        ref={r => (this.ref = r)}
      />
    );
  }
}
