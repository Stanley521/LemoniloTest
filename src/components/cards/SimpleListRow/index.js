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
import {Colors, Sizes} from '../../../constants';
import Styles from './style';

// ----------------------------------------
// COMPONENT IMPORTS
// ----------------------------------------
import {TextS} from '../../derivatives/Text';
import {Padder as PadderContainer} from '../../containers';

/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class SimpleListRow extends Component {
  // ----------------------------------------
  // ----------------------------------------
  // CONSTRUCTOR AND LIFE CYCLES
  // ----------------------------------------

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props !== nextProps) {
      return true;
    }

    return false;
  }

  // ----------------------------------------
  // ----------------------------------------
  // MAIN RENDER
  // ----------------------------------------

  render() {
    return (
      <View
        style={[
          Styles.container,
          this.props.backgroundColor
            ? {backgroundColor: this.props.backgroundColor}
            : {},
        ]}>
        <PadderContainer style={Styles.innerContainer}>
          <TextS
            color={
              this.props.inverse ? Colors.main.baseWhite : Colors.main.baseBlack
            }>
            {this.props.label}
          </TextS>
          <TextS
            color={
              this.props.inverse ? Colors.main.baseWhite : Colors.main.baseBlack
            }>
            {this.props.value}
          </TextS>
        </PadderContainer>
      </View>
    );
  }

  // ----------------------------------------
}
