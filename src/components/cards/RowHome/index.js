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
import {TouchableOpacity, View} from 'react-native';

// ----------------------------------------
// LOCAL & CONFIG IMPORTS
// ----------------------------------------
import {Colors} from '../../../constants';
import Styles from './style';

// ----------------------------------------
// COMPONENT IMPORTS
// ----------------------------------------
import {TextMX} from '../../derivatives/Text';
import {ImageIllustration} from '../../derivatives/Image';
import Icon from 'react-native-vector-icons/AntDesign';
/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class RowHome extends Component {
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
      <TouchableOpacity onPress={this.props.onPress} style={Styles.container}>
        <View style={Styles.head}>
          <View style={Styles.rounder} />
          <View style={Styles.iconBackground}>
            <View
              style={
                this.props.image === 'notification.close'
                  ? Styles.iconClose
                  : Styles.icon
              }>
              {this.props.image === 'notification.close' ? (
                <Icon name="close" color={Colors.main.baseGray} size={25} />
              ) : (
                <ImageIllustration name={this.props.image} />
              )}
            </View>
          </View>
        </View>

        <TextMX
          size={16}
          color={
            (this.props.isSelected
              ? Colors.main.baseBlack
              : Colors.main.baseBlack,
            this.props.textColor)
          }>
          {this.props.label}
        </TextMX>
      </TouchableOpacity>
    );
  }

  // ----------------------------------------
}
