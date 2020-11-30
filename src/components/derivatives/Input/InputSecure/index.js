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
import moment from 'moment';
import {View, TouchableOpacity} from 'react-native';

// ----------------------------------------
// LOCAL & CONFIG IMPORTS
// ----------------------------------------
import Styles from './style';

import {InputString} from '../../../derivatives/Input';

/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class InputSecure extends Component {
  // ----------------------------------------
  // ----------------------------------------
  // CONSTRUCTOR AND LIFE CYCLES
  // ----------------------------------------

  constructor(props) {
    super(props);

    this.state = {
      isSecure: true,

      value: this.props.value ? this.props.value : '',
    };
  }

  // ----------------------------------------

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state != nextState) {
      return true;
    }

    if (this.props != nextProps) {
      return true;
    }

    return false;
  }

  // ----------------------------------------
  // ----------------------------------------
  // METHODS
  // ----------------------------------------

  updateValue(value) {
    this.setState({
      value,
    });

    if (this.props.onChangeText) {
      this.props.onChangeText(value);
    }
  }

  // ----------------------------------------
  // ----------------------------------------
  // MAIN RENDER
  // ----------------------------------------

  render() {
    return (
      <View>
        <InputString
          {...this.props}
          secureTextEntry={this.state.isSecure}
          // value={ this.state.value }
          onChangeText={value => this.updateValue(value)}
          rightIcon={this.state.isSecure ? 'hide' : 'unhide'}
          onRightIconPress={() =>
            this.setState({isSecure: !this.state.isSecure})
          }
        />
      </View>
    );
  }

  // ----------------------------------------
}
