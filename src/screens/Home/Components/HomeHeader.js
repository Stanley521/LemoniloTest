import React, { useEffect, useState } from 'react';
import { Animated, Platform, StyleSheet, Text, TouchableOpacity, View, Dimensions, Alert, TouchableWithoutFeedback } from 'react-native';
import { Badge } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Search from '../../../components/input/search';

import { isEmpty } from '../../../services/consts';
import styles_main from '../../_styles/main';
import style_vars from '../../_styles/vars';

const headerHeight = 40;
const widthAnimFull = 100;
const widthAnimClose = 90;

function HomeHeader(props) {
  const {
    setShowSympSuggest = false,
    topAnim,
    mainScrollViewRef
  } = props;

  const openHeader = props.openHeader;

  const heightAnim = new Animated.Value(openHeader ? headerHeight : 0);
  const widthAnim = new Animated.Value(openHeader ? widthAnimFull : widthAnimClose);

  useEffect(() => {
    Animated.timing(heightAnim, {
      toValue: (openHeader ? 0 : headerHeight),
      duration: 300,
      useNativeDriver: false
    }).start();
    Animated.timing(widthAnim, {
      toValue: (openHeader ? widthAnimClose : widthAnimFull),
      duration: 300,
      useNativeDriver: false
    }).start();
  }, [openHeader]);

  const [complaint, setComplaint] = useState('');
  const [appRegion, setAppRegion] = useState('');
  const [modalRegionVisible, setModalRegionVisible] = useState(false);

  const inputForm = {};
  const checkForm = () => {
    // inputForm.complaint.focus();
    NavigationService.navigate('Symptom', {
      complaints: [{
        id: Math.ceil(Math.random() * 10000).toString(),
        suggestion: complaint
      }]
    })
  }

  function onDidFocus() {
    setComplaint('');
  }

  function scrollToTop() {
    if (mainScrollViewRef.current) {
      mainScrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
    }
  }

  useEffect(() => {
    if (complaint == '') {
      setShowSympSuggest(false);
    }

    if (complaint !== '') {
      setShowSympSuggest(true);
    }
  }, [complaint])

  return (
    <View style={s.headerContainer}>
      <Animated.View style={{
        height: heightAnim, // heightAnim
        top: 0, // topAnim
        alignItems: 'center',
      }}>
        <TouchableWithoutFeedback onPress={scrollToTop}>
          <Text style={{
            paddingVertical: 5,
            fontSize: style_vars.font_header,
            color: 'black',
            fontFamily: style_vars.font_bold,
          }}>{'Welcome back Stanley!'}
            {/* <Text style={{fontSize: style_vars.font_1, color: 'red'}}>{'dev'}</Text> */}
          </Text>
        </TouchableWithoutFeedback>
      </Animated.View>
      <View style={{ flexDirection: 'row', }}>
        <Animated.View style={[
          styles_main.flex_row,
          {
            width: widthAnim.interpolate(
              {
                inputRange: [widthAnimClose, widthAnimFull],
                outputRange: ['75%', '100%']
              }
            ),
            height: 40, // headerHeight,
          }
        ]}>
          <Search
            placeholder={
              'Search'
            }
            returnKeyType="go"
            onSubmitEditing={() => {
              setShowSympSuggest(false);
            }}
            theRef={(input) => { inputForm.complaint = input; }}
            onChangeFunction={props.getSympSuggestion}
            search={complaint}
            setSearch={setComplaint}
            onFocus={() => {
              setShowSympSuggest(true);
            }}
            onEndEditing={() => {
              setShowSympSuggest(false);
            }}
          />
        </Animated.View>
      </View>

      <Animated.View style={s.containerIcon}>
        <TouchableOpacity
          style={s.buttonContainer}
          onPress={() => {
            setModalRegionVisible(true)
          }}>
          <Icon2
            name="map-marker-radius"
            size={24}
            style={{ color: '#7cc342' }}
          />
          {/* <Text style={{fontWeight:'bold', fontSize:15}}>
            {appRegion.toUpperCase()}
          </Text> */}
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={async () => {
          //   NavigationService.navigate('Notifications');
          // }}
          style={s.buttonContainer}
        >
          <Icon
            name={Platform.OS === 'ios'
              ? `ios-notifications`
              : 'md-notifications'}
            size={24}
            style={{ color: '#7cc342' }}
          />
        </TouchableOpacity>
      </Animated.View>
    </View>
  )
}

const s = StyleSheet.create({
  headerContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderTopWidth: 0,
    elevation: 5,
    marginTop: 0,
    //Without background view have extra horizontal space
    backgroundColor: 'white',
  },
  containerIcon: {
    position: 'absolute',
    right: 0,
    top: 5,
    // paddingVertical: 10,
    height: headerHeight, // headerHeight,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 35,
    marginRight: 5,
    // backgroundColor: 'green'
  }
})

export default HomeHeader;
