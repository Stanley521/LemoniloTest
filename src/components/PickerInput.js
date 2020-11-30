import React, { useState, useRef, useEffect } from 'react'
import { View, TouchableOpacity, Platform, TouchableHighlight, Text, StyleSheet } from 'react-native'
import {Picker} from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../constants/Colors'
import Color from 'color'
import ModalDropdown from 'react-native-modal-dropdown';

const MIN_HEIGHT = 42;

const Component = (props) => {

  const {
    style,
    items,
    mode,
    selectedValue,
    onValueChange,
    widthOption,
    selectedLabel,
    outlineWidth=1,
    styleDropDown={},
    styleAndroid={},
    stylePicker={},
    styleText={}
  } = props;
  const dropdownIos = useRef();
  const [defaultLabel, setDefaultLabel] = useState("")

  const renderRow = (rowData, rowID, highlighted) => {
    let evenRow = rowID % 2;
    //__DEV__ && console.log('text', rowData.label);
    let label = ""
    if(rowData && rowData.label){
      label = rowData?.label?.replace("\r","")
    }else if(rowData && rowData.ctDisplay){
      label = rowData?.ctDisplay;
    }
    //__DEV__ && console.log('label:', label);
    return (
      <TouchableHighlight style={{}} underlayColor='cornflowerblue'>
        <View style={[ {backgroundColor: evenRow ? 'white' : 'white', }]}>

          <Text style={{fontSize:16, marginVertical:7, textAlign:'center'}}>
            {`${label}`}
          </Text>
        </View>

      </TouchableHighlight>
    );

  }

  const renderButtonText = (rowData) => {
    //__DEV__ && console.log('rowData:', JSON.stringify(rowData));
    const {label, value} = rowData;
    return `${label}`;
  }

  const getDefaultLabel = () =>{
    let tmpObj = items.find(o => o.value === selectedValue);
    //__DEV__ && console.log('default label:', tmpObj);
    if(selectedLabel){
      setDefaultLabel(selectedLabel)
    }else if(tmpObj){
      setDefaultLabel(tmpObj?.label)
    }
  }

  useEffect(() => {
    //__DEV__ && console.log('props:', JSON.stringify(props));
    getDefaultLabel()
  }, [])

  return (
    <View style={[s.container, style]}>
      <Outline />
      {Platform.OS === "ios"?(
        <View style={{flexDirection:'row', height:style.height?style.height:40, alignItems:'center', justifyContent:'center'}}>
          <ModalDropdown
          ref={dropdownIos}
          options={items}
          defaultValue={selectedLabel?selectedLabel:defaultLabel}
          onSelect={(index, value)=>{
            onValueChange(index, value)
          }}
          style={[s.dropdown_2,stylePicker]}
           textStyle={s.dropdown_2_text}
           dropdownStyle={[s.dropdown_2_dropdown, {width:widthOption?widthOption:250}, styleDropDown]}
           renderButtonText={(rowData) => renderButtonText(rowData)}
          renderRow={renderRow}
          />
          <TouchableOpacity
          onPress={()=>{
            dropdownIos?.current?.show()
          }}
           style={{width:30, height:30, marginTop:7, justifyContent:'center', alignItems:'center'}}>
            <Icon name="chevron-down" size={18} />
          </TouchableOpacity>
        </View>
      ):(

        <Picker
          selectedValue={selectedValue}
          mode={mode}
          onValueChange={(value, index)=>{
            //__DEV__ && console.log('index:'+index,"value:"+value);
            onValueChange(index, {value: value})
          }}
          style={[{marginTop: 3, marginRight: -5, marginLeft: 3 },styleAndroid]}
        >
          {items?.map((item, i) =>
            <Picker.Item label={item.label} value={item.value} key={i} />
          )}
        </Picker>
      )}
    </View>
  )
}

const Outline = ({
  //  theme,
  backgroundColor,
}) => (
    <View
      pointerEvents="none"
      style={[
        s.outline,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          backgroundColor,
          borderRadius: /* theme.roundness*/ 4,
          borderWidth: 0,
          borderColor: outlineColor,
        },
      ]}
    />
  );

const outlineColor = Color('black')
  .alpha(0.12)
  .rgb()
  .string();

const s = StyleSheet.create({
  container: {
    height: MIN_HEIGHT + 6
  },
  outline: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 6,
    bottom: 0,
  },
  dropdown_2: {
    marginTop: 5,
    height:40,
    marginHorizontal:4,
    width:"80%",
    right: 0,
    borderWidth: 0,
    borderRadius: 3,
    backgroundColor: 'white',
  },
  dropdown_2_text: {
    marginVertical: 5,
    marginHorizontal: 6,
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  dropdown_2_dropdown: {
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 3,
  },
  dropdown_2_row: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
  },
  dropdown_2_image: {
    marginLeft: 4,
    width: 30,
    height: 30,
  },
  dropdown_2_row_text: {
    marginHorizontal: 4,
    fontSize: 18,
    color: 'navy',
    textAlignVertical: 'center',
  },
  dropdown_2_separator: {
    height: 1,
    backgroundColor: 'cornflowerblue',
  },
})

export default Component
