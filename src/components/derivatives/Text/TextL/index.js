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

// ----------------------------------------
// LOCAL & CONFIG IMPORTS
// ----------------------------------------
import Styles from './style';

// ----------------------------------------
// COMPONENT IMPORTS
// ----------------------------------------
import Text from '../../../generics/Text';

/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class TextL extends Component {
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
  // MAIN RENDER
  // ----------------------------------------

  render() {
    return (
      <Text size={26} line={32} {...this.props}>
        {this.props.children}
      </Text>
    );
  }

  // ----------------------------------------
}
