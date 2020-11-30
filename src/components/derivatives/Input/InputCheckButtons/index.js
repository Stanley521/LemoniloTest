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
import {Colors, Sizes} from '../../../../constants';
import Styles from './style';

// ----------------------------------------
// COMPONENT IMPORTS
// ----------------------------------------
import {TextXS} from '../../../derivatives/Text';
import {ButtonSmall} from '../../../derivatives/Button';

/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class InputCheckButtons extends Component {
  // ----------------------------------------
  // ----------------------------------------
  // CONSTRUCTOR AND LIFE CYCLES
  // ----------------------------------------

  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
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
    this.setState({value});

    if (this.props.onSelect) {
      this.props.onSelect(value);
    }
  }

  // ----------------------------------------
  // ----------------------------------------
  // RENDERS
  // ----------------------------------------

  _renderOption(label, value, isActive = false, index) {
    return (
      <ButtonSmall
        key={index}
        inverse
        color={isActive ? Colors.main.baseRed : Colors.main.inactiveGray}
        style={Styles.option.content}
        width={104}
        height={40}
        onPress={() => this.updateValue(value)}>
        {label}
      </ButtonSmall>
    );
  }

  // ----------------------------------------
  // ----------------------------------------
  // MAIN RENDER
  // ----------------------------------------

  render() {
    const options = this.props.options ? this.props.options : [];

    return (
      <View style={[this.props.style]}>
        <TextXS color={Colors.main.baseGray}>{this.props.label}</TextXS>

        <View style={Styles.option.grouper}>
          {options.map((option, index) => {
            return this._renderOption(
              option.label,
              option.value,
              option.value == this.state.value,
              index,
            );
          })}
        </View>
      </View>
    );
  }

  // ----------------------------------------
}
