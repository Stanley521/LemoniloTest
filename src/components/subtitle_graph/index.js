// import { Feather, MaterialCommunityIcons } from 'react-native-vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

class SubtitleGraph extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View style={{flexDirection:'row', justifyContent:'center'}}>
        <View>
          <MaterialCommunityIcons name={this.props.iconName} size={18} color={this.props.iconColor} />
        </View>
        <View style={{flex:1}}>
          <Text>{this.props.title}</Text>
        </View>
        <TouchableOpacity
        style={{width:80, height:25}}
        onPress={()=>{
          this.props.onClick();
        }}>
          <View style={{flexDirection:'row', justifyContent:'flex-end', alignItems:'center'}}>
            <Text>Graphs</Text>
            <Feather name="chevrons-right" size={14} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SubtitleGraph;
