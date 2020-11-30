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
import {View, Animated, TouchableOpacity} from 'react-native';

// ----------------------------------------
// LOCAL & CONFIG IMPORTS
// ----------------------------------------
import Styles from './style';

/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class Toggle extends Component {
  // ----------------------------------------
  // ----------------------------------------
  // CONSTRUCTOR AND LIFECYCLES
  // ----------------------------------------

  constructor(props) {
    super(props);

    this.state = {
      size: new Animated.Value(this.props.isActive === true ? 16 : 0),
      isActive: !!this.props.isActive,
    };
  }

  // ----------------------------------------

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state != nextState) {
      return true;
    }

    if (this.props != nextProps) {
      if (this.props.isActive != nextProps.isActive) {
        this.updateValue(nextProps.isActive);
      }

      if (this.props.shouldPersist && !nextProps.shouldPersist) {
        this.updateValue(nextProps.isActive, true);
      }

      return true;
    }

    return false;
  }

  // ----------------------------------------
  // ----------------------------------------
  // METHODS
  // ----------------------------------------

  updateValue(value = true, throughLockRealease = false) {
    if (this.props.shouldPersist && !value && !throughLockRealease) {
      return false;
    }

    this.setState({isActive: value});

    if (value) {
      Animated.timing(this.state.size, {
        toValue: 16,
        duration: 100,
        delay: 0,
      }).start();
    } else {
      Animated.timing(this.state.size, {
        toValue: 0,
        duration: 100,
        delay: 0,
      }).start();
    }

    if (this.props.onToggle && !throughLockRealease) {
      this.props.onToggle(value);
    }
  }

  // ----------------------------------------
  // ----------------------------------------
  // MAIN RENDER
  // ----------------------------------------

  render() {
    return (
      <TouchableOpacity
        style={[Styles.border, this.props.rounded ? {borderRadius: 50} : {}]}
        onPress={() => this.updateValue(!this.state.isActive)}>
        <Animated.View
          style={[
            Styles.fill,
            {width: this.state.size, height: this.state.size},
            this.props.rounded ? {borderRadius: 50} : {},
          ]}
        />
      </TouchableOpacity>
    );
  }

  // ----------------------------------------
}
