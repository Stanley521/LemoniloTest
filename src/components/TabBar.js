import React, { useEffect, useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { Badge } from 'react-native-paper';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import SendBird from 'sendbird';
import style_vars from '../screens/_styles/vars';
import I18n from '../local/I18n';


export default function TabBar(props) {
  const unreadMessage = useSelector( state => state.groupChannel.list);
  const unreadList = []
  unreadMessage.map((value, index) => {
    unreadList.push(value.unreadMessageCount)
  })

  const unreadMessageCount = unreadList.length > 0 ? unreadList.reduce((a, b) => a+b) : 0

  return (
    <View style={{alignItems: 'center', width: wp(20)}}>
      {
        props.value == I18n.t('common.txt_chat') && !!unreadMessageCount && !!unreadMessageCount > 0 &&
        <Badge style={{position: 'absolute', right: style_vars.font_1, top: style_vars.font_1/-3, zIndex: 1, elevation: 1}}>{unreadMessageCount}</Badge>
      }
      <Icon
        name={props.name}
        size={30}
        style={{ marginBottom: -3 }}
        color={props.focused ? style_vars.blue_2 : style_vars.grey}
      />
      <Text style={{
        color: (props.focused ? style_vars.blue_2 : style_vars.grey),
        fontSize: style_vars.font_1
      }}>
        {props.value}
      </Text>
    </View>
  );
}
