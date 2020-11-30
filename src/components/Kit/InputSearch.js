import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import I18n from "mHealthBankMobile/src/local/I18n";
import style_vars from 'mHealthBankMobile/src/screens/_styles/vars';
import Search from 'mHealthBankMobile/src/components/input/search';
import * as Kit from './index'

InputSearch.defaultProps = {
}

export function InputSearch(props){
  return(
    <View style={{flex:1, flexDirection: 'column'}}>
      <Search
          {...props}
      />
      {/*Result search*/}
      {/*props.showSuggestion && (
        <Kit.Text>
          Hore
        </Kit.Text>
      )*/}
    </View>
  )
}
