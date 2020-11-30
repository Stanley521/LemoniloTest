/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-key */
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
import {Colors} from '../../../constants';
import Styles from './style';

// ----------------------------------------
// COMPONENT IMPORTS
// ----------------------------------------
import {TextM, TextS} from '../../derivatives/Text';

/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class Summary extends Component {
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

  // ----------------------------------------

  _renderMain() {
    if (this.props.multiLine) {
      return null;
    }
    return (
      <View style={Styles.container}>
        <View style={Styles.label.container}>
          <TextS color={Colors.main.inactiveGray}>{this.props.title}</TextS>
          <TextS
            style={{marginTop: 5}}
            bold
            color={
              !this.props.disabled
                ? Colors.main.fontGray
                : Colors.main.inactiveGray
            }>
            {this.props.subtitle}
          </TextS>
        </View>
      </View>
    );
  }

  _renderMultiline() {
    if (!this.props.multiLine) {
      return null;
    }
    return (
      <View style={Styles.container}>
        <View style={[Styles.label.container]}>
          {this.props.options.map((x, y) => {
            return (
              <View
                style={{
                  marginTop: 10,
                }}>
                <TextS color={Colors.main.inactiveGray}>{x.title}</TextS>
                <TextS
                  style={{
                    marginTop: 5,
                  }}
                  bold
                  color={
                    !this.props.disabled
                      ? Colors.main.fontGray
                      : Colors.main.inactiveGray
                  }>
                  {x.subtitle}
                </TextS>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
  // ----------------------------------------
  // ----------------------------------------
  // MAIN RENDER
  // ----------------------------------------

  render() {
    return (
      <View>
        {/* {this._renderMain()} */}
        {this._renderMultiline()}
      </View>
    );
  }

  // ----------------------------------------
}
