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
import {TextLX, TextM} from '../../derivatives/Text';
import {ImageIllustration} from '../../derivatives/Image';
import {BottomButtonGroup as BottomButtonGroupCard} from '../../cards';
import {
  Padder as PadderContainer,
  Modal as ModalContainer,
} from '../../containers';

/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class SuccessContainer extends Component {
  // ----------------------------------------
  // ----------------------------------------
  // RENDERS
  // ----------------------------------------

  _renderBottom() {
    if (this.props.noButton) return null;
    return (
      <BottomButtonGroupCard
        transparentBackground
        inverse={this.props.inverse}
        submitLabel={this.props.buttonLabel}
        cancelLabel={this.props.cancelLabel}
        onSubmit={this.props.onConfirm ? () => this.props.onConfirm() : {}}
        onCancel={this.props.onCancel}
      />
    );
  }

  // ----------------------------------------

  _renderBottomPadding() {
    if (!this.props.cancelLabel || !this.props.onCancel) {
      return false;
    }

    return <View style={Styles.bottomPadder} />;
  }

  // ----------------------------------------
  // ----------------------------------------
  // MAIN RENDER
  // ----------------------------------------

  render() {
    return (
      <ModalContainer
        isActive={this.props.isActive}
        bottomContent={this._renderBottom()}
        backgroundColor={this.props.backgroundColor}
        inverse={this.props.inverse}
        onClosePress={this.props.onClosePress}
        floatingHeader={this.props.floatingHeader}
        scrollable={this.props.scrollable}>
        <PadderContainer style={Styles.container}>
          <View style={Styles.top.container}>
            <View style={Styles.top.image.container}>
              <ImageIllustration
                name={this.props.image ? 'modal.' + this.props.image : null}
              />
            </View>
          </View>

          <View style={Styles.bottom}>
            <TextLX
              align={'center'}
              style={{marginBottom: 24}}
              color={
                this.props.inverse
                  ? Colors.main.baseWhite
                  : Colors.main.fontGray
              }>
              {this.props.title}
            </TextLX>

            <TextM
              align={'center'}
              color={
                this.props.inverse
                  ? Colors.main.baseWhite
                  : Colors.main.baseGray
              }>
              {this.props.message}
            </TextM>

            {this._renderBottomPadding()}
          </View>
        </PadderContainer>
      </ModalContainer>
    );
  }

  // ----------------------------------------
}
