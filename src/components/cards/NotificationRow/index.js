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
import {TextM, TextS} from '../../derivatives/Text';
import {ImageBase64, ImageIllustration} from '../../derivatives/Image';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Padder as PadderContainer} from '../../containers';

/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class NotificationRow extends Component {
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

  _renderBadge() {
    if (!this.props.hasProblem && !this.props.hasAccess) {
      return null;
    }

    let color = Colors.main.successGreen;
    let icon = 'rejected';

    if (this.props.hasProblem) {
      color = Colors.main.errorRed;
      icon = 'rejected';
    }

    return (
      <View style={[Styles.image.badge.container, {backgroundColor: color}]}>
        <Icon name={icon} color={Colors.main.baseWhite} size={9} />
      </View>
    );
  }

  // ----------------------------------------

  _renderImage() {
    if (this.props.noImage) {
      return null;
    }

    return (
      <View>
        <View style={Styles.image.container}>
          <ImageIllustration name={this.props.image} />
        </View>

        {this._renderBadge()}
      </View>
    );
  }

  // ----------------------------------------

  _renderLabel() {
    if (!this.props.label) {
      return null;
    }

    return (
      <TextM color={Colors.main.inactiveGray} style={Styles.label} bold>
        {this.props.label}
      </TextM>
    );
  }

  // ----------------------------------------

  _renderSubInfo() {
    if (!this.props.subInfo) {
      return null;
    }

    return <TextS color={Colors.main.baseGray}>{this.props.subInfo}</TextS>;
  }

  // ----------------------------------------

  _renderMain() {
    return (
      <PadderContainer
        style={[
          Styles.container,
          this.props.noPadding ? {paddingHorizontal: 0} : {},
        ]}>
        {this._renderLabel()}

        <View style={Styles.innerContainer}>
          {this._renderImage()}

          <View style={Styles.name.container}>
            <TextM>{this.props.name}</TextM>

            {this._renderSubInfo()}
          </View>

          {this.props.rightContentRender}
        </View>
      </PadderContainer>
    );
  }

  // ----------------------------------------
  // ----------------------------------------
  // MAIN RENDER
  // ----------------------------------------

  render() {
    if (this.props.onPress) {
      return (
        <TouchableOpacity onPress={() => this.props.onPress()}>
          {this._renderMain()}
        </TouchableOpacity>
      );
    }

    return <View>{this._renderMain()}</View>;
  }

  // ----------------------------------------
}
