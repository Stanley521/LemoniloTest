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
import {Modal as RModal} from 'react-native';

// ----------------------------------------
// COMPONENT IMPORTS
// ----------------------------------------
import {Base as BaseContainer} from '../index';

/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class Modal extends Component {
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

  _renderChildren() {
    return this.props.children;
  }

  // ----------------------------------------
  // ----------------------------------------
  // MAIN RENDER
  // ----------------------------------------

  render() {
    return (
      <RModal
        visible={this.props.isActive}
        onShow={this.props.onShow}
        animationType={
          this.props.animationType ? this.props.animationType : 'slide'
        }>
        <BaseContainer
          static={!this.props.scrollable || this.props.floatingHeader}
          onClosePress={this.props.onClosePress}
          bottomContent={this.props.bottomContent}
          backgroundColor={this.props.backgroundColor}
          inverse={this.props.inverse}
          title={this.props.title}
          persistScrollTitle={this.props.persistScrollTitle}
          floatingHeader={this.props.floatingHeader}
          isModal>
          {this._renderChildren()}
        </BaseContainer>
      </RModal>
    );
  }

  // ----------------------------------------
}
