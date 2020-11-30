import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import Color from 'color'
import Colors from '../constants/Colors'

const Component = (props) => {
  const {
    title,
    diameter,
    style
  } = props;

  function getTwoLetter(){
    var twoLetter = "";
    if(title){
      var str = title.split(' ');
      for (i = 0; i < str.length; i++) {
          twoLetter += str[i].substr(0,1);
      }
      if(twoLetter.length > 2){
        return twoLetter.substr(0,2).toUpperCase();
      }
    }

    return twoLetter.toUpperCase();
  }

  function getBackGroundColor(){
    let tmpBackground = ['#47D1CD','#7CE4E5','#ADECEE','#FFDDF4', '#FF9EBF', '#FE6E89']
    let abcd = "abcdefghijklmnopqrstuvwxyz"
    let tmpTwoLetter = getTwoLetter();
    if(tmpTwoLetter){
      let firstLetter = tmpTwoLetter.substr(0,1).toLowerCase();
      
      let index = abcd.indexOf(firstLetter)
      if(index > -1){
        if(index < 4){
          return tmpBackground[0]
        }
        if(index < 8){
          return tmpBackground[1]
        }
        if(index < 12){
          return tmpBackground[2]
        }
        if(index < 16){
          return tmpBackground[3]
        }
        if(index < 20){
          return tmpBackground[4]
        }
        return tmpBackground[5]
      }
    }
    return tmpBackground[0];

  }

  return (
    <View style={[{height: diameter, borderRadius:diameter/2,
      width: diameter, backgroundColor:getBackGroundColor(), justifyContent:'center',
      alignItems:'center'},style]}>
      <Text style={{color:'white', fontSize:diameter/2-2, fontWeight:'bold'}}>
        {getTwoLetter()}
      </Text>
    </View>
  )
}

export default Component
