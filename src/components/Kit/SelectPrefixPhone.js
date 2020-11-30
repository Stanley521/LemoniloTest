import React, { useEffect, useRef, useState } from 'react';
import { View, Image } from 'react-native'
import I18n from "mHealthBankMobile/src/local/I18n";
import { Picker } from './Picker'
import icon from 'mHealthBankMobile/src/assets/assets';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export function SelectPrefixPhone(props){
  let flagImage = ""

  switch (props.value.code) {
    case 'ID':
      flagImage = icon.flag.id
      break;
    case 'SG':
      flagImage = icon.flag.sg
      break;
    case 'MY':
      flagImage = icon.flag.my
      break;
    default:
      flagImage = null
  }

  return(
    <View style={{flexDirection: 'row', minWidth: wp(20),borderColor: '#9e9e9e', borderWidth: 1, marginRight: 15, borderRadius: 5,marginTop: 5, marginBottom: 5}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={{width: 24, height: 24, marginLeft: 10}}
          source={flagImage}
        />
      </View>
      <Picker
        {...props}
        label={I18n.t("register.placeholder_prefix_phone")}
        containerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          paddingLeft: 10,
          paddingRight: 10,
        }}
        textAlignPlaceholder="center"
      />
    </View>
  )
}
