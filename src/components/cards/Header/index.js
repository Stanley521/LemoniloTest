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
import {View, TouchableOpacity} from 'react-native';

// ----------------------------------------
// LOCAL & CONFIG IMPORTS
// ----------------------------------------
import {Colors, Sizes} from '../../../constants';
import Styles from './style';

// ----------------------------------------
// COMPONENT IMPORTS
// ----------------------------------------
import {TextMX} from '../../derivatives/Text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class Header extends Component {
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
  // RENDERS
  // ----------------------------------------

  _renderLeftButton() {
    if (!this.props.onLeftPress) {
      return null;
    }

    return (
      <TouchableOpacity
        style={Styles.button.container}
        onPress={
          this.props.onLeftPress ? () => this.props.onLeftPress() : () => {}
        }>
        <Icon
          name="chevron-left"
          color={
            !this.props.inverse ? Colors.main.iconGray : Colors.main.baseWhite
          }
          size={35}
        />
      </TouchableOpacity>
    );
  }

  // ----------------------------------------

  _renderRightButton() {
    if (!this.props.onRightPress && !this.props.rightContentRender) {
      return null;
    }

    if (this.props.rightContentRender) {
      return this.props.rightContentRender;
    }

    return (
      <TouchableOpacity
        style={[Styles.button.container, {alignItems: 'flex-end'}]}
        onPress={
          this.props.onRightPress ? () => this.props.onRightPress() : () => {}
        }>
        <Icon
          name="close"
          color={
            !this.props.inverse ? Colors.main.iconGray : Colors.main.baseWhite
          }
          size={35}
        />
      </TouchableOpacity>
    );
  }

  // ----------------------------------------
  // ----------------------------------------
  // MAIN RENDER
  // ----------------------------------------

  render() {
    return (
      <View
        style={[
          Styles.grouper,
          this.props.floating
            ? {
                position: 'absolute',
                top: Sizes.isIphoneX
                  ? 44
                  : this.props.isModal && Sizes.isAndroid
                  ? 0
                  : 20,
              }
            : {},
          this.props.noPadding ? {paddingVertical: 0} : {},
          this.props.backgroundColor
            ? {backgroundColor: this.props.backgroundColor}
            : {},
        ]}>
        {this._renderLeftButton()}

        <View style={Styles.title.container}>
          <TextMX
            color={
              this.props.inverse ? Colors.main.baseWhite : Colors.main.fontGray
            }
            ellipsizeMode={'tail'}
            numberOfLines={1}>
            {this.props.title}
          </TextMX>
        </View>

        {this._renderRightButton()}
      </View>
    );
  }

  // ----------------------------------------
}
