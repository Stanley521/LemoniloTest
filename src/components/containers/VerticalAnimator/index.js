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
import {View, Animated, Easing} from 'react-native';

// ----------------------------------------
// LOCAL & CONFIG IMPORTS
// ----------------------------------------
import {Colors, Sizes} from '../../../constants';
import Styles from './style';

/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class VerticalAnimator extends Component {
  // ----------------------------------------
  // ----------------------------------------
  // CONSTRUCTOR AND LIFE CYCLES
  // ----------------------------------------

  constructor(props) {
    super(props);

    this.state = {
      position: new Animated.Value(Sizes.screen.height),
      hasSlide: false,
    };
  }

  // ----------------------------------------

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state !== nextState) {
      return true;
    }

    if (this.props !== nextProps) {
      return true;
    }

    return false;
  }

  // ----------------------------------------

  componentDidMount() {
    if (!this.state.hasSlide) {
      Animated.timing(this.state.position, {
        toValue: 0,
        speed: 3,
        bounciness: 2,
        duration: 300,
        delay: !this.props.order ? 100 : this.props.order * 30,
        useNativeDriver: false,
      }).start();

      this.setState({
        hasSlide: true,
      });
    }
  }

  // ----------------------------------------
  // ----------------------------------------
  // MAIN RENDER
  // ----------------------------------------

  render() {
    const style = [];
    style.push({
      top: this.state.position,
      // opacity: .5,
    });

    return <Animated.View style={style}>{this.props.children}</Animated.View>;
  }

  // ----------------------------------------
}
