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
import {Colors} from '../../../../constants';
import Styles from './style';

// ----------------------------------------
// COMPONENT IMPORTS
// ----------------------------------------
import Text from '../../../generics/Text';
import Button from '../../../generics/Button';

/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class ButtonSmall extends Component {
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
      <View style={[Styles.container, this.props.style]}>
        <Button
          {...this.props}
          onPress={this.props.onPress}
          height={this.props.height ? this.props.height : 32}
          width={this.props.width}
          paddingHorizontal={this.props.padding ? this.props.padding : 18}
          inverse={this.props.inverse}
          backgroundColor={this.props.backgroundColor}
          radius={16}>
          <Text
            size={14}
            line={24}
            color={
              this.props.inverse
                ? this.props.color
                  ? this.props.color
                  : Colors.primary
                : Colors.main.baseWhite
            }>
            {this.props.children}
          </Text>
        </Button>
      </View>
    );
  }

  // ----------------------------------------
}
