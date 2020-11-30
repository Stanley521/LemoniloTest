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
import {View} from 'react-native';

// ----------------------------------------
// LOCAL & CONFIG IMPORTS
// ----------------------------------------
import {Colors} from '../../../constants';
import Styles from './style';

// ----------------------------------------
// COMPONENT IMPORTS
// ----------------------------------------
import RText from '../Text';

/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class Text extends Component {
  // ----------------------------------------
  // ----------------------------------------
  // CONSTRUCTOR AND LIFE CYCLES
  // ----------------------------------------

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props != nextProps) {
      return true;
    }

    return false;
  }

  // ----------------------------------------
  // ----------------------------------------
  // MAIN METHODS
  // ----------------------------------------

  getComposedStyle() {
    const composedStyle = [Styles.main];
    const newStyle = {};

    if (this.props.color) {
      newStyle.backgroundColor = this.props.color;
    }

    composedStyle.push(newStyle);
    composedStyle.push(this.props.style);

    return composedStyle;
  }

  // ----------------------------------------
  // ----------------------------------------
  // MAIN RENDER
  // ----------------------------------------

  render() {
    return (
      <View style={Styles.container}>
        <View {...this.props} style={this.getComposedStyle()}>
          <RText size={9} line={11} color={Colors.main.baseWhite} bold>
            {this.props.children}
          </RText>
        </View>
      </View>
    );
  }

  // ----------------------------------------
}
