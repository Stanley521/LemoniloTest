/* eslint-disable react-native/no-inline-styles */
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
import {TextM, TextS} from '../../derivatives/Text';
import {Padder as PadderContainer} from '../../containers';

/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class SimpleDataRow extends Component {
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
  // RENDERS
  // ----------------------------------------

  _renderValue(value, index = 0) {
    return (
      <TextM
        key={index}
        style={Styles.value}
        color={
          this.props.inverse ? Colors.main.baseWhite : Colors.main.baseBlack
        }>
        {value}
      </TextM>
    );
  }

  // ----------------------------------------

  _renderMain() {
    let noteRender = null;
    if (this.props.note) {
      noteRender = (
        <TextS color={Colors.main.baseGray}>{this.props.note}</TextS>
      );
    }

    let valueRender = this._renderValue(this.props.value);
    if (Array.isArray(this.props.value)) {
      valueRender = this.props.value.map((value, index) => {
        return this._renderValue(value, index);
      });
    }

    return (
      <View>
        <TextS
          color={
            this.props.inverse ? Colors.main.baseWhite : Colors.main.baseGray
          }>
          {this.props.label}
        </TextS>

        {valueRender}

        {noteRender}
      </View>
    );
  }

  // ----------------------------------------
  // ----------------------------------------
  // MAIN RENDER
  // ----------------------------------------

  render() {
    if (this.props.noPadding) {
      return (
        <View
          style={[
            Styles.container,
            this.props.noBorder ? {borderBottomWidth: 0} : {},
          ]}>
          {this._renderMain()}
        </View>
      );
    }

    return (
      <View
        style={[
          Styles.container,
          this.props.noBorder ? {borderBottomWidth: 0} : {},
        ]}>
        <PadderContainer>{this._renderMain()}</PadderContainer>
      </View>
    );
  }

  // ----------------------------------------
}
