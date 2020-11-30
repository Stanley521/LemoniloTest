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
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal as RModal,
} from 'react-native';

import Styles from './style';

// ----------------------------------------
// COMPONENT IMPORTS
// ----------------------------------------
import {VerticalAnimator as VerticalAnimatorContainer} from '../index';
import {ImageIllustration} from '../../derivatives/Image';

/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class ModalTransparent extends Component {
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
      <RModal
        visible={this.props.isActive}
        transparent={true}
        animationType={'fade'}>
        <View style={Styles.outerContainer}>
          <TouchableOpacity
            style={Styles.backdrop}
            onPress={
              this.props.onClosePress
                ? () => this.props.onClosePress()
                : () => {}
            }
          />

          <VerticalAnimatorContainer order={1}>
            <TouchableWithoutFeedback
              onPress={
                this.props.onClosePress
                  ? () => this.props.onClosePress()
                  : () => {}
              }>
              <View style={Styles.head}>
                <View style={Styles.rounder} />
                <View style={Styles.iconBackground}>
                  <View style={Styles.icon}>
                    <ImageIllustration name={this.props.image} />
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
            <View style={Styles.container}>{this.props.children}</View>
          </VerticalAnimatorContainer>
        </View>
      </RModal>
    );
  }

  // ----------------------------------------
}
