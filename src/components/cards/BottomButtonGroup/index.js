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
import {ButtonFull} from '../../derivatives/Button';
import {Padder as PadderContainer} from '../../containers';

/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class BottomButtonGroup extends Component {
  // ----------------------------------------
  // ----------------------------------------
  // CONSTRUCTOR AND LIFE CYCLES
  // ----------------------------------------

  constructor(props) {
    super(props);

    this.state = {
      isKeyboarUp: false,
    };
  }

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

  _renderCancelButton() {
    if (!this.props.cancelLabel || !this.props.onCancel) {
      return null;
    }

    return (
      <View style={Styles.cancelButton.container}>
        <ButtonFull
          onPress={this.props.onCancel ? () => this.props.onCancel() : {}}
          style={Styles.submitButton}
          color={Colors.main.baseWhite}
          backgroundColor={this.props.inverse ? Colors.primary : null}
          borderColor={this.props.inverse ? null : Colors.primary}>
          {this.props.cancelLabel}
        </ButtonFull>
      </View>
    );
  }

  // ----------------------------------------
  // ----------------------------------------
  // MAIN RENDER
  // ----------------------------------------

  render() {
    const main = (
      <PadderContainer>
        {this.props.text}

        <ButtonFull
          onPress={this.props.onSubmit ? () => this.props.onSubmit() : {}}
          style={Styles.submitButton}
          color={Colors.primary}
          backgroundColor={this.props.inverse ? Colors.main.baseWhite : null}
          borderColor={
            this.props.inverse
              ? this.props.submitBordered
                ? Colors.primary
                : null
              : Colors.main.baseWhite
          }
          inverse={this.props.inverse}>
          {this.props.submitLabel}
        </ButtonFull>

        {this._renderCancelButton()}
      </PadderContainer>
    );

    if (!this.props.transparentBackground) {
      let baseBackground = this.props.backgroundColor
        ? this.props.backgroundColor
        : Colors.main.baseWhite;

      return (
        <View
          style={[Styles.container, {backgroundColor: baseBackground}]}
          pointerEvents={'box-none'}>
          {main}
        </View>
      );
    }

    return (
      <View style={Styles.container} pointerEvents={'box-none'}>
        {main}
      </View>
    );
  }

  // ----------------------------------------
}
