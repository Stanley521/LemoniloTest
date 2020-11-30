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
import {View, TouchableOpacity} from 'react-native';

// ----------------------------------------
// LOCAL & CONFIG IMPORTS
// ----------------------------------------
import Styles from './style';

// ----------------------------------------
// COMPONENT IMPORTS
// ----------------------------------------
import {TextM} from '../../../derivatives/Text';
import Toggle from '../../../generics/Toggle';

/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class InputRadio extends Component {
  // ----------------------------------------
  // ----------------------------------------
  // CONSTRUCTOR AND LIFECYCLES
  // ----------------------------------------

  constructor(props) {
    super(props);

    this.state = {
      isActive: this.props.isActive === true ? true : false,
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

  updateValue(value = true) {
    if (this.state.isActive != value) {
      this.setState({isActive: value});

      if (this.props.onToggle) {
        this.props.onToggle(value);
      }
    }
  }

  // ----------------------------------------
  // ----------------------------------------
  // MAIN RENDER
  // ----------------------------------------

  render() {
    return (
      <TouchableOpacity
        style={[Styles.container, this.props.style]}
        onPress={() => this.updateValue(!this.state.isActive)}>
        <Toggle
          isActive={this.state.isActive}
          onToggle={value => this.updateValue(value)}
          rounded
        />

        <View style={Styles.label.container}>
          <TextM>{this.props.label}</TextM>
        </View>
      </TouchableOpacity>
    );
  }

  // ----------------------------------------
}
